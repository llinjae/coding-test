function solution(array, height) {
    let HeightList = [...array, height].sort((a,b) => a-b);
    console.log(HeightList);
    let count = 0;
    
    for (let i = 0; i < HeightList.length; i++) {
        if (HeightList[i] > height) {
            count++;
        }
    }
    
    return count;
}