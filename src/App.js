import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Import Bootstrap JavaScript

import HomeComponent from './components/Home';
import NavigationComponent from './components/Navigation';
import WorkExperience from './components/WorkExperience';
import Blog from './components/Blog';

function App() {
  return (
      <div className="App">
        <NavigationComponent />
        <HomeComponent />
        <WorkExperience />
        <Blog />
        {/* <header className="App-header">
          
        </header> */}
      </div>     
  );
}

export default App;
