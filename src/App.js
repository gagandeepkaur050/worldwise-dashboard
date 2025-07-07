import './App.css';
import SearchBar from './components/SearchBar';
import Weather from './components/WeatherWidget';

function App() {
  return (
    <div className="App">
      <h1>WorldWise Dashboard</h1>
      <p>Welcome! Let's build a news & weather app.</p>
            <SearchBar />
            <Weather city="London" />

    </div>
  );
}

export default App;
