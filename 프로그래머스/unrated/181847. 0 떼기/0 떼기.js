function solution(n_str) {
    while(n_str.charAt(0) === '0') {
        n_str = n_str.slice(1);
    }
    
    return n_str;
}