function mostfrequentCount(collection){
    let count = 0; 
    let  freCount = 0; 


    //no map

    for( i = 0; i < collection.length ; i++){


        for(j = 0; j < collection.length; j++){

                if(collection[i] == collection[j]){
                    count++
                }
                if (freCount < count){
                    freCount = count
                }




        }



// solution with map
        function mostFrequentItemCount(arr) {
            var len = arr.length;
          
            if (len) {
              var map = {};
              var max = 0;
          
              for (var i = 0; i < len; i++) {
                map[arr[i]] = (map[arr[i]] || 0) + 1;
          
                if (max < map[arr[i]]) {
                  max = map[arr[i]];
                }
              }
          
              return max;
            }
          
            return 0;
          }







    }
















}