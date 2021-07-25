import arrayProjects from './components/Portfolio/arrayProjects';
import {Portfolio} from './components/Portfolio/Portfolio';

function App() {
  return (
    <Portfolio myWorks={arrayProjects}/>
  );
}

export default App;
