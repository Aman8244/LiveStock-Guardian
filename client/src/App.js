import './App.css';
import { useEffect } from "react";
// import axios from "axios";
import Home from './pages/Home';

function App() {
  useEffect(() => {
    // const uri = process.env.REACT_APP_BACKEND_URI;
    //    const uriNode = process.env.REACT_APP_BACKEND_NODE_URI;
    // axios.post(`${uriNode}predict`, {
    //   "Animal": 3,
    //   "Age": 2,
    //   "Temperature": 103.6,
    //   "Symptom 1": 11,
    //   "Symptom 2": 12,
    //   "Symptom 3": 10
    // }).then(res => {
    //   console.log(res)
    // }).catch(err => {
    //   console.log(err)
    // })
    // axios.post(`${uri}/predict`, {
    //   "Animal": 3,
    //   "Age": 2,
    //   "Temperature": 103.6,
    //   "Symptom 1": 11,
    //   "Symptom 2": 12,
    //   "Symptom 3": 10
    // }).then(res => {
    //   console.log(res)
    // }).catch(err => {
    //   console.log(err)
    // })
    // console.log(uriNode)
  }, [])
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
