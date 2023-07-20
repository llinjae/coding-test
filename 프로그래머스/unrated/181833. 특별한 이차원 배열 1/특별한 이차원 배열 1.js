function solution(n) {
    let arr = Array(n).fill(Array(n).fill(0));
    
    return arr.map((a, i) => {
        return a.map((b, bi) => bi === i ? 1 : 0);
    })
    
    console.log(arr);
}