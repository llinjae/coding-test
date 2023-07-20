function solution(date1, date2) {
    let dateOne = Number(date1.join(''));
    let dateTwo = Number(date2.join(''));
    
    console.log(dateOne, dateTwo)
    
    return dateOne < dateTwo ? 1 : 0;
}