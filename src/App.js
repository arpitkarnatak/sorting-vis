import {useEffect, useState} from 'react'
import './App.css';

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


  function sleep(ms) {
    return new Promise(
      resolve => setTimeout(resolve, ms)
    );
  }

  async function BubbleSort(arr){
    for(var i = 0; i < arr.length -1; i++){
      for(var j = i+1; j < arr.length; j++){
        var p = document.getElementById('block-'+i.toString())
        var q = document.getElementById('block-'+j.toString())
        p.style.backgroundColor = '#f1c40f'
        q.style.backgroundColor = '#f1c40f'
        await sleep(50)

        if (p.style.height > q.style.height){
          p.style.backgroundColor = '#f4989c'
          q.style.backgroundColor = '#f4989c'
          var temp = p.style.height;
          p.style.height = q.style.height;
          q.style.height  = temp
          await sleep(50)
        }

        p.style.backgroundColor = '#2176ff'
        q.style.backgroundColor = '#2176ff'
        await sleep(50)
      }
    }
    for(i=0;i<arr.length;i++){
      p = document.getElementById('block-'+i.toString())
      p.style.backgroundColor = '#32e875'
      await sleep(50)
    }
    setArray(Array.sort())
  }
  
/*
function quickSort(origArray) {
	if (origArray.length <= 1) { 
		return origArray;
	} else {

		var left = [];
		var right = [];
		var newArray = [];
		var pivot = origArray.pop();
		var length = origArray.length;

		for (var i = 0; i < length; i++) {
			if (origArray[i] <= pivot) {
				left.push(origArray[i]);
			} else {
				right.push(origArray[i]);
			}
		}

		return newArray.concat(quickSort(left), pivot, quickSort(right));
	}
}
*/


  return (
    <div className="App">
      <input className='slider-length' type="range" min="1" max="80" value={SliderValue} onChange={(e)=>setSliderValue(e.target.value)} class="slider" id="myRange"></input>
      <button onClick={()=>BubbleSort(Array)}>Bubble Sort</button>
      {/*<button onClick={()=>quickSort(Array)}>Quick Sort</button> */}


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
