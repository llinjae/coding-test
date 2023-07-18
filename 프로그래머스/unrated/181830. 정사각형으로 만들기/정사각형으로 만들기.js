function solution(arr) {
    const row = arr.length;
    const col = arr[0].length;
    
    if (row > col) {
        const zero = Array(row - col).fill(0)
        return arr.map(el => [...el, ...zero])
    }
    
    if (col > row) {
        for (let i = 0; i < col - row; i++) {
            const zero = Array(col).fill(0);
            arr.push(zero);
        }
    }
    
    return arr;
}