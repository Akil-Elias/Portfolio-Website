import 'bootstrap/dist/css/bootstrap.min.css';
import AboutMe from './Components/AboutMe';
import MenuBar from './Components/MenuBar';
import Skills from './Components/Skills';

function App() { 
const title = 'My Website';  
  return ( 
    <div>
      <MenuBar />
      <AboutMe />
      <Skills />
    </div>
  );
}

export default App;
