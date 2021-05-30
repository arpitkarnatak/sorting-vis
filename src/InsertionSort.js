import sleep from './sleep'
import colors from './ColorScheme'

const insertionSort = async (nums) => {
    
    document.getElementById('myRange').disabled = true
    let n = nums.length;
    for (let i = 1; i < n; i++)
    {
        document.getElementById('block-'+i.toString()).style.backgroundColor = colors.ColorSwap
        let j = i-1;
        let temp = nums[i]
        while(j >= 0 && nums[j] > temp){
            document.getElementById('block-'+(j).toString()).style.backgroundColor = colors.ColorSelect
            await sleep()
            document.getElementById('block-'+(j+1).toString()).style.height = `${nums[j]}px`
            document.getElementById('block-'+(j).toString()).style.backgroundColor = colors.ColorUnselect
            await sleep()
            nums[j+1] = nums[j]
            j--;
        }
        document.getElementById('block-'+(j+1).toString()).style.height = `${temp}px`
        nums[j+1] = temp;
        document.getElementById('block-'+i.toString()).style.backgroundColor = colors.ColorUnselect
        await sleep()
    }
    for(let i=0;i<nums.length;i++){
        let p = document.getElementById('block-'+i.toString())
        p.style.backgroundColor = colors.ColorDone
        await sleep()
      }
    
      document.getElementById('myRange').disabled = false

    return nums
}

export default insertionSort