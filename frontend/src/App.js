import { Route } from 'react-router';
import './App.css';
import Homepage from './Pages/Homepage';
import Chatpage from './Pages/Chatpage';


function App() {
  return (
    <div className="App">
       <Route path='/' component={Homepage} exact/>
       <Route path='/chat' component={Chatpage}/>
    </div>
  );
}

export default App;
