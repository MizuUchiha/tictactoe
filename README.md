I am planning to create simple game using:
- Backend
    - Python with Flask
    - SQLite for database
- Frontend
    - React
    - Axios for API requests
    - Tailwind to speed up styling
- Deployment
    - Docker
- Testing
    - pytest 

I have already prepared development environment before starting this test, that means I have Python, node.js and docker installed on my machine. I am using VSCode for this build. I am using virtual environment for Python -> `/tictactoe` that has been excluded in `.gitignore`.

I have spend 2 hours and 20 minutes on this - had some trouble with proxy to backend
___
# How to run it?
1. Clone repo
2. Build and run app: `docker-compose up --build`
3. App takes a while to build. Runs locally on `http://localhost:3000/`
# A bit about project
1. `app.py` has endpoints for the game
2. `board_test.py` is the test for `/board/<int:game_id>` endpoint
3. `/tictactoe_front` contains front end of the app
    - `/src/App.js` with basic page setup
    - `/scr/components` with all created components
