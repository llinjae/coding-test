function solution(str_list, ex) {
    const filtered = str_list.filter(a => !a.includes(ex));
    
    return filtered.join('');
}