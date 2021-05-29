import colors from './ColorScheme'
import sleep from './sleep'



const merge = async (arr, l, mid, r) =>{
    const ll = l
    const rr = r
    var ans = arr.slice(ll, rr).sort()

    while(l<=mid && mid+1 < r){
        document.getElementById('block-'+l.toString()).style.backgroundColor = colors.ColorSelect
        document.getElementById('block-'+(mid+1).toString()).style.backgroundColor = colors.ColorSelect
        await sleep()
        document.getElementById('block-'+l.toString()).style.backgroundColor = colors.ColorUnselect
        document.getElementById('block-'+(mid+1).toString()).style.backgroundColor = colors.ColorUnselect
        await sleep()
        l++;
        mid++;

    }

    for(let i = ll; i < rr; i++ ){
        document.getElementById('block-'+i.toString()).style.height = `${ans[i-ll]}px`
        await sleep()
    }

    
}

const mergeSort = async (arr, l, r, size) => {
    if(l>r || l===r-1){
        return;
    }
    let mid = l + parseInt((r-l)/2)
    await mergeSort(arr, l, mid, size)
    await mergeSort(arr, mid, r, size)
    await merge(arr, l, mid, r)

    if(r-l === size){
        for(let i=l;i<r;i++){
            document.getElementById('block-'+i.toString()).style.backgroundColor = colors.ColorDone
            await sleep()
        }
        
    }
}

export {mergeSort, merge}