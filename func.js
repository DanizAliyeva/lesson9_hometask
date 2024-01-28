
//part1
function calculateSum(arr){
    let sum=0
    for(i=0;i<arr.length;i++){
        sum+=arr[i]
    }
    return sum

}

const myArray=[1,2,5,7]
console.log("the sum of the elements in the array is:", calculateSum(myArray));

//part2
let counter=0
while(counter<5){
    console.log(counter);
    counter++
    
}
console.log("///////////////////////////////");
//part3
let countdown=5

do{
    console.log(countdown);
    countdown--  
}while(countdown>0)


//part4
function evaluateGrade(num){
    if (num>60){
        return "Pass"
    }
    return "Fail"
}
const grade=67
console.log(evaluateGrade(grade));