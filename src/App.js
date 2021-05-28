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

  useEffect(() => {
    setArray(generateRandomArray(SliderValue))
  }, [SliderValue])



  return (
    <div className="App">
      <input type="range" min="1" max="80" value={SliderValue} onChange={(e)=>setSliderValue(e.target.value)} class="slider" id="myRange"></input>
      {SliderValue}
      <div className= 'outer-div'>
          <div className="blocks-div">


            {SliderValue<28 ? Array.map((i)=>
            <div className='block' style={{"height":i, width: (800-5*(SliderValue))/SliderValue}} id={"block-"+i.toString()}>{i}</div>) :
            Array.map((i)=>
            <div className='block' style={{"height":i, width: (800-5*(SliderValue))/SliderValue}} id={"block-"+i.toString()}></div>)}


            

          </div>
      </div>
    </div>
  );
}

export default App;
