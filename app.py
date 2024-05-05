from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///game.db'
db = SQLAlchemy(app)

class GameState(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    board = db.Column(db.String, nullable=False)
    current_player = db.Column(db.String, nullable=False)
    status = db.Column(db.String, nullable=False)
    # Might be more fields here just for start

@app.route('/')
def index():
    return "Hello World!"

if __name__ == '__main__':
    app.run(debug=True)
