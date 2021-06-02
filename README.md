# Sorting Visualizer

####  Demo : https://sorting-vis-by-arpit.netlify.app/

This is a Sorting Algorithm Visualizer, built using React. It currently supports Merge Sort, Bubble Sort and Insertion Sort.

### How the visualization works

Let's take the example of Insertion sort. A function for bubble sort would look like -

```
for(i = 0; i< arr.length ; i++)
{
    for(j = 0; j<arr.length-1-i ; j++)
    {
        if (arr[j] > arr[j+1])
        {         
            swap(arr[j], arr[j+1])
        }
    }
}

```

The array arr can be the list of bars, and the values can be the heights of these bars. So, the bars have ids - block-0, block-1, block-2 etc. If bar at index j has a height greater than bar at index j+1, the bars can be swapped. And by swapping, I mean height of bar[j] becomes height of bar[j+1].  So, we can write the code as following :

```
for(i = 0; i< arr.length ; i++){
  for(j = 0; j<arr.length-1-i ; j++){
    p = document.getElementById('block-' + j.toString());      //p becomes the bar of height arr[j]
    q = document.getElementById('block-' + (j+1).toString());  //q becomes the bar of height arr[j+1]
    if (p.style.height > q.style.height){                      //Comparing heights and swapping
      let temp = p.style.height;
      p.style.height = q.style.height;
      q.style.height = temp;
    }
  }
}
```

We can also add colors in a similar manner. Add the following lines
```
for(i = 0; i< arr.length ; i++){
  for(j = 0; j<arr.length-1-i ; j++){
    p = document.getElementById('block-' + j.toString());      
    q = document.getElementById('block-' + (j+1).toString());  
    
    p.style.backgroundColor = 'red';                           // Change background color of bar with height arr[j]
    q.style.backgroundColor = 'red';                           // Change background color of bar with height arr[j+1]
    await sleep()                                              // A sleep function for delaying the execution of further instructions(sleep.js in /src). setTimeout() works too
    
    if (p.style.height > q.style.height){                      //Comparing heights and swapping
      let temp = p.style.height;
      p.style.height = q.style.height;
      q.style.height = temp;
    }
    
    p.style.backgroundColor = 'blue';                           // Change background color of bar to original color
    q.style.backgroundColor = 'blue';                           // Change background color of bar to original color
    
}
```


