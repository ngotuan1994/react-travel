import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';
import PlaceDetails from './components/PlaceDetails/PlaceDetails';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <List></List>
      <Map></Map>
      <PlaceDetails></PlaceDetails>
    </div>
  );
}

export default App;
