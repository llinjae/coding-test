function solution(order) {
    const menu = Array.from(order);
    let sum = 0;
    
    for (let i = 0; i < menu.length; i++) {
        const select = menu[i].includes('americano') || menu[i].includes('anything') ? 4500 : 5000;
        sum += select;
    }
    
    return sum;
}