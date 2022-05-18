import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Addpost from './component/Addpost';
import Searchpost from './component/Searchpost';
import Viewpost from './component/Viewpost';

function App() {
  return (
    <div >
     <Addpost/>
     <Searchpost/>
     <Viewpost/>

    </div>
  );
}

export default App;
