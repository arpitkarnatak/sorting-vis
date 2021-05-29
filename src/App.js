import {useEffect, useState} from 'react'
import './App.css';
import BubbleSort from "./BubbleSort"

function App() {


  const [SliderValue, setSliderValue] = useState(1)
  const [Array, setArray] = useState([])
  const [Width, setWidth] = useState(800)

   function generateRandomArray(nums) {
    let test_array = []
    for(let i=0;i<nums;i++){
      test_array = [...test_array, Math.floor(Math.random() * (300 - 20 + 1) + 100)]
    }
    return test_array
  }

  useEffect(() => {
    setArray(generateRandomArray(SliderValue))
    setWidth((800-5*(SliderValue))/SliderValue)
    for(let i=0;i<Array.length;i++){
      document.getElementById('block-'+i.toString()).style.backgroundColor = '#2176ff'
    }
  }, [SliderValue])
  

  return (
    <div className="App">

      <div className="Header">

      <input className='slider-length' type="range" min="1" max="80" value={SliderValue} onChange={(e)=>setSliderValue(e.target.value)} class="slider" id="myRange"></input>
      <button onClick={()=>BubbleSort(Array)}>Bubble Sort</button>
      {/*<button onClick={()=>quickSort(Array)}>Quick Sort</button> */}


      </div>



      <div className= 'outer-div'>
          <div className="blocks-div">
            {Array.map((i, index)=>
            <div className='block' style={{"height":i, width: Width}} id={"block-"+index.toString()}></div>)}
          </div>
      </div>


    </div>
  );
}

export default App;
