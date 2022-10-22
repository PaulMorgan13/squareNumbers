const uniqSort = function(arry) {
    const breadcrumbs = {}; // cahce data
   // const result = [arry[0]];
    let result 

    

    for (let i = 0; i < arry.length; i++) {
      // this loops through every element in the array   
      if (!breadcrumbs[arry[i]]) {
        result.push(arry[i]);
        breadcrumbs[arry[i] = true];
      }
    }
  
    return result.sort((a, b) => a - b);
  
  }
  

  
  const mynums = [6, 2, 3, 3, 5]
  

  uniqSort(mynums)  