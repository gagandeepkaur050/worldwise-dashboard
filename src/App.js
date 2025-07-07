import './App.css';
import SearchBar from './components/SearchBar';
import Weather from './components/WeatherWidget';
import News from './components/NewsList';

function App() {
  return (
    <div className="App">
      <h1>WorldWise Dashboard</h1>
      <p>Welcome! Let's build a news & weather app.</p>
            <SearchBar />
            <Weather city="London" />
            <News /> 

    </div>
  );
}

export default App;
