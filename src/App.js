import {useEffect, useState} from 'react'
import './App.css';
import BubbleSort from "./BubbleSort"
import {mergeSort} from './mergeSort'
import insertionSort from './InsertionSort'

function generateRandomArray(nums) {
  let test_array = []
  for(let i=0;i<nums;i++){
    test_array = [...test_array, Math.floor(Math.random() * (300 - 20 + 1) + 100)]
  }
  return test_array
}

function App() {


  const [SliderValue, setSliderValue] = useState(Math.random()*100)
  const [Array, setArray] = useState([1])
  const [Width, setWidth] = useState(100)

   
  useEffect(() => {
    setArray(generateRandomArray(SliderValue))
    setWidth((800-5*(SliderValue))/SliderValue)
    
    for(let i=0;i<Array.length;i++){
      document.getElementById('block-'+i.toString()).style.backgroundColor = '#2176ff'
    }
  }, [SliderValue])

  return (
    <div className="App">

      <h2>Sorting Algorithm Visualizer</h2>

      <div className="Header">
        <input className='slider-length' type="range" min="1" max="100" value={SliderValue} onChange={(e)=>setSliderValue(e.target.value)}  id="myRange"></input>
        <button onClick={()=>BubbleSort(Array)}>Bubble Sort</button>
        <button onClick={()=>mergeSort(Array,0,Array.length, parseInt(SliderValue))}>Merge Sort</button>
        <button onClick={()=>insertionSort(Array)}>Insertion Sort</button>
      </div>



      <div className= 'outer-div'>
          <div className="blocks-div">
            {Array.map((i, index)=>
            <div key={index.toString()} className='block' style={{"height":i, width: Width}} id= {"block-"+index.toString()}></div>)}
          </div>
      </div>

    </div>
  );
}

export default App;
