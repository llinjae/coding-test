function solution(arr, k) {
    return result = k % 2 === 0 ? arr.map(a => a + k) : arr.map(a => a * k);
}