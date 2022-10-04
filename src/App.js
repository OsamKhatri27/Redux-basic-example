import logo from './logo.svg';
import './App.css';
import {useSelector,useDispatch} from 'react-redux'
function App() {
  const counter=useSelector(state=>state.count)
  const dispatch=useDispatch();
  return (
    <div className="App">
      <header className="App-header">
       <h1>Counter :{counter}</h1>
       <button onClick={()=>dispatch({type:'INCREMENT'})}>Increment</button>
       <button onClick={()=>dispatch({type:'DECREMENT'})}>DECREMENT</button>
      </header>
    </div>
  );
}

export default App;
