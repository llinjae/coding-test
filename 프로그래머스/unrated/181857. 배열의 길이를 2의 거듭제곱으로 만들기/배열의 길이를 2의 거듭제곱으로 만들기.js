function solution(arr) {
    const currentLength = arr.length;
  
    let newLength = 1;
    while (newLength < currentLength) {
        newLength *= 2;
    }

    const zerosToAdd = newLength - currentLength;
  
    console.log(newLength, currentLength, zerosToAdd);
    
    for (let i = 0; i < zerosToAdd; i++) {
        arr.push(0);
    }

    return arr;
}