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
    # Might be more fields here just for start

@app.route('/')
def index():
    return jsonify({"HELLO": "WORLD"})


@app.route('/start', methods=['POST'])
def start_game():
    return jsonify({"game_id": 1})


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
    app.run(debug=True)
