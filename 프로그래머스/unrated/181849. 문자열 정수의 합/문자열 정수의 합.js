function solution(num_str) {
    let arr = [];
    let sum = 0;
    
    for (let i = 0; i < num_str.length; i++) {
        arr.push(parseInt(num_str[i]));
    }
    
    for (let j = 0; j < arr.length; j++) {
        sum += arr[j];
    }
    
    return sum;
    
}