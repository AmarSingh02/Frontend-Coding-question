function repeated(arr){
    // const repeated =[...new Set(arr.filter((item,index)=>arr.indexOf(item)!== index))]
    const repeated =[...new Set(arr.sort((a,b)=>a-b).filter((item,index)=>arr.indexOf(item)!== index))]
    return repeated

}

console.log(repeated(""));
