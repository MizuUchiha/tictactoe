from flask import Flask
from flask import jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///game.db'
db = SQLAlchemy(app)
CORS(app)

class GameState(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    board = db.Column(db.String, nullable=False)
    current_player = db.Column(db.String, nullable=False)
    status = db.Column(db.String, nullable=False)
    # More fields can be added as needed

@app.route('/')
def index():
    return jsonify({"HELLO": "WORLD"})

@app.route('/start', methods=['POST'])
def start_game():
    empty_board = "---------"  # Represents an empty tic-tac-toe board
    new_game = GameState(board=empty_board, current_player="X", status="ongoing")
    db.session.add(new_game)
    db.session.commit()
    return jsonify({"game_id": new_game.id, "board": new_game.board})

@app.route('/restart/<int:game_id>', methods=['POST'])
def restart_game(game_id):
    game = GameState.query.get(game_id)
    if game:
        game.board = "---------"  # Reset the board
        db.session.commit()
        return jsonify({"game_id": game.id, "board": game.board})
    else:
        return jsonify({"error": "Game not found"}), 404


@app.route('/move', methods=['POST'])
def make_move():
    return jsonify({"game_id": 1})

@app.route('/status', methods=['GET'])
def check_status():
    return jsonify({"game_id": 1})

@app.route('/board', methods=['GET'])
def get_board():
    return jsonify({"game_id": 1})

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)
