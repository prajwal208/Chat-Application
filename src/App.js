import './App.css';
import { BrowserRouter as Router,Route} from "react-router-dom";
import Join from './componets/Join';
import Chat from './componets/Chat'

function App() {
  return (
    <>
    <Router>

    <Route exact path='/' component={Join}></Route>
    <Route exact path='/chat' component={Chat}></Route>

    </Router>
    </>
  );
}

export default App;
