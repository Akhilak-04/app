
import './App.css';
import Image from "./assers/cat.jpg.jpg";
function App() {
  const x=10;
  var text;
  if(x=== 10){
    text="equal";
  }else{
    text="not equal";
  }
  
  return (
  <div className="App">
    <h1>hello world</h1>
    <p> This is the paragraph</p>
    <h2>{50-5}</h2>
    <img src={Image} alt="Pic"/>
    <h3>{text}</h3>

    <h2>{ x >= 10 ? "greater" : "lesser" }</h2>
    </div>
  );   
   
}

export default App;
