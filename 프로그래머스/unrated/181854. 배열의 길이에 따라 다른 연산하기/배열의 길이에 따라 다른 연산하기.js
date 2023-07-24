function solution(arr, n) {
    const result = arr.map((el, i) => {
        if (arr.length % 2 === 1 && i % 2 === 0) {
            return arr[i] + n;
        } else if (arr.length % 2 === 0 && i % 2 === 1) {
            return arr[i] + n;
        } else return arr[i]
    })
    
    return result;
}