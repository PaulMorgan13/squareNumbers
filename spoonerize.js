function spoonerize(word){

    const [wordOne , wordTwo] = word.split(" "); 

    return [wordTwo[0]+ wordOne.splice(1) , wordOne[0] + wordTwos.splice(1)].join(" ")






}