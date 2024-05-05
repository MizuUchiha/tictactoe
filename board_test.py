import pytest
from app import app, db, GameState

@pytest.fixture
def client():
    app.config['TESTING'] = True
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///:memory:'
    client = app.test_client()

    with app.app_context():
        db.create_all()
        # Setup a game state for testing
        game = GameState(board="---------", current_player="X", status="ongoing")
        db.session.add(game)
        db.session.commit()

    yield client

def test_update_board(client):
    game_id = 1
    new_board = "X--------"
    response = client.post(f'/board/{game_id}', json={'board': new_board})
    json_data = response.get_json()
    assert response.status_code == 200
    assert json_data['board'] == new_board
    assert json_data['game_id'] == game_id
    assert json_data['status'] == "ongoing"
