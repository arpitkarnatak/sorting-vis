import colors from './ColorScheme'
import sleep from './sleep'

const BubbleSort =  async (arr) =>{
    for(var i = 0; i < arr.length; i++){
      for(var j = 0; j < arr.length-1-i; j++){
        var p = document.getElementById('block-'+j.toString())
        var q = document.getElementById('block-'+(j+1).toString())
        p.style.backgroundColor = colors.ColorSelect
        q.style.backgroundColor = colors.ColorSelect
        await sleep()

        if (p.style.height > q.style.height){
          p.style.backgroundColor = colors.ColorSwap
          q.style.backgroundColor = colors.ColorSwap
          var temp = p.style.height;
          p.style.height = q.style.height;
          q.style.height  = temp
          await sleep()
        }

        p.style.backgroundColor = colors.ColorUnselect
        q.style.backgroundColor = colors.ColorUnselect
        await sleep()
      }
    }
    for(i=0;i<arr.length;i++){
      p = document.getElementById('block-'+i.toString())
      p.style.backgroundColor = colors.ColorDone
      await sleep()
    }
  }

export default BubbleSort