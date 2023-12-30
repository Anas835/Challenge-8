import './App.css';
import DataFetcher from './Components/DataFetcher';
import DataPoster from './Components/DataPoster';

function App() {
  return (
    <div className="App">
      <h1>Data Fetcher</h1>
      <DataFetcher />
      <h1>Data Poster</h1>
      <DataPoster></DataPoster>
    </div>
  );
}

export default App;
