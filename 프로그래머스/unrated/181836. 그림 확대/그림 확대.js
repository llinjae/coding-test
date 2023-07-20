function solution(picture, k) {
    const arr = [];
    
    for (let i = 0; i < picture.length; i++) {
        const row = [...picture[i]].map(a => a.repeat(k)).join(''); 
        
        for (let j = 0; j < k; j++) {
            arr.push(row);
        }
    }
    
    return arr;
}