import arrayProjects from './components/Portfolio/arrayProjects.js';
import {Portfolio} from './components/Portfolio/Portfolio.jsx';

function App() {
  return (
    <Portfolio myWorks={arrayProjects}/>
  );
}

export default App;
