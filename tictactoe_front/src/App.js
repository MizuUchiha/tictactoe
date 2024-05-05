import logo from './logo.svg';
import './App.css';
import { Board } from './components/Board';
import { StartButton } from './components/StartButton';
import { RestartButton } from './components/RestartButton';
import { EndGameButton } from './components/EndGameButton';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl w-full">
        <div className="md:col-span-2 bg-gray-200 p-4 shadow rounded">
          <Board />
        </div>
        <div className="space-y-4">
          <StartButton />
          <RestartButton />
          <EndGameButton />
        </div>
      </div>
    </div>
  );
}

export default App;
