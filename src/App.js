import './App.css';
import Countdown from './components/countdown/Countdown';
import Crono from './components/crono/Crono';
import Digital from './components/digital/digital';

function App() {
  return (
    <div className="App">
      <Digital />
      <Countdown />
      <Crono />
    </div>
  );
}

export default App;
