function solution(flo) {
    let str = String(flo);
    
    return Number(str.split('.')[0]);
}