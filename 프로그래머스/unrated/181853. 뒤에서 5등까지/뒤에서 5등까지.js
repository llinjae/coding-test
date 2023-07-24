function solution(num_list) {
    let sortedArr = num_list.sort((a,b) => a - b);
    sortedArr.length = 5;
    
    return sortedArr;
}