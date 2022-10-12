import './App.css';
import data from './data/trainings.json';
import Days from './components/Days';

function App() {
  return (
    <div className="App">
      <Days data={data} />
    </div>
  );
}

export default App;
