function solution(arr1, arr2) {
    const sum1 = arr1.reduce((cur, acc) => cur + acc);
    const sum2 = arr2.reduce((cur, acc) => cur + acc);
    
    if (arr1.length !== arr2.length) {
        return arr1.length > arr2.length ? 1 : -1;
    }
    
    return sum1 === sum2 ? 0 : sum1 > sum2 ? 1 : -1; 
}