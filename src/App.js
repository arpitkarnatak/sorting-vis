import {useEffect, useState} from 'react'
import './App.css';

function App() {


  const [SliderValue, setSliderValue] = useState(1)
  const [Array, setArray] = useState([])


   function generateRandomArray(nums) {
    let test_array = []
    for(let i=0;i<nums;i++){
      test_array = [...test_array, Math.floor(Math.random() * (300 - 20 + 1) + 100)]
    }
    return test_array
  }

  

  var indents = (num) =>{
    let arr = []
    let x = generateRandomArray(num)
    if (num < 40){
      for(let i=0; i< num; i++){
        arr = [...arr,<div className='block' style={{"height":x[i], width: (800-5*(num))/num}} id={"block-"+i.toString()}>{x[i]}</div>]
      }
    }else{
      for(let i=0; i< num; i++){
        arr = [...arr,<div className='block' style={{"height":x[i], width: (800-5*(num))/num}} id={"block-"+i.toString()}>{}</div>]
      }
    }
    return arr
  }


  return (
    <div className="App">
      <input type="range" min="1" max="80" value={SliderValue} onChange={(e)=>setSliderValue(e.target.value)} class="slider" id="myRange"></input>
      {SliderValue}
      <div className= 'outer-div'>
          <div className="blocks-div">
            {indents(SliderValue)}
          </div>
      </div>
    </div>
  );
}

export default App;
