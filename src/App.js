import './App.css';
import SearchBar from './components/SearchBar';
import Weather from './components/WeatherWidget';
import News from './components/NewsList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <h1>WorldWise Dashboard</h1>
      <p>Welcome! Let's build a news & weather app.</p>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8'>
            <News /> 
          </div>
          <div className='col-md-4'>
            <SearchBar />
            <Weather city="London" />
          </div>
        </div>
        
      </div>
            
            

    </div>
  );
}

export default App;
