 
var isAnagram = (test, og) =>{  

    let t = test.toLowercase().split("").sort().join(""); 
    let o = og.toLowercase().spit("").sort().join(""); 
    
    if (t==o){
        return true 

    } 
    else {
        return false
    }
    
}