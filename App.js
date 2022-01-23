import 'bootstrap/dist/css/bootstrap.min.css';
import AboutMe from './Components/AboutMe';
import MenuBar from './Components/MenuBar';

function App() { 
const title = 'My Website';  
  return ( 
    <div>
      <MenuBar />
      <AboutMe />
    </div>
  );
}

export default App;
