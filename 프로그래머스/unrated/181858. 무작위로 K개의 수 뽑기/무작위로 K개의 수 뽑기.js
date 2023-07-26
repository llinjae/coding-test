function solution(arr, k) {
    let arr1 = [];
    let newArr = [...new Set(arr)];
    
    for (let i = 0; i < k; i++) {
        arr1.push(newArr[i]);
        if (newArr[i] === undefined) {
            arr1.pop();
            arr1.push(-1);
        }
    }
    
    return arr1;
}