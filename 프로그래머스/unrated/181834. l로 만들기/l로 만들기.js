function solution(myString) {
    return [...myString].map((a, b) => a.charCodeAt() < 108 ? 'l' : a).join('')
}