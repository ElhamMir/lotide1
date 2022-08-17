const min = function(numbers) {
  // Write code here that returns the smallest value in numbers
  let m = numbers[0]
  for(let i=0;i<numbers.length;i++){
    if (numbers[i] <m){
      m=numbers[i]
    }
  }
return m
  
}
console.log(min([3,2,5]))