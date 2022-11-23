function mostfrequentCount(collection){
    let count = 0; 
    let  freCount = 0; 


    for( i = 0; i < collection.length ; i++){


        for(j = 0; j < collection.length; j++){

                if(collection[i] == collection[j]){
                    count++
                }
                if (freCount < count){
                    freCount = count
                }




        }










    }
















}