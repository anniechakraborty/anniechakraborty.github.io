import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Import Bootstrap JavaScript

import HomeComponent from './components/Home';
import NavigationComponent from './components/Navigation';

function App() {
  return (
      <div className="App">
        <NavigationComponent />
        <header className="App-header">
          <HomeComponent />
        </header>
      </div>     
  );
}

export default App;
