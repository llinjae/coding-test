function solution(strArr) {
    const groupedStrings = {};

  for (const str of strArr) {
    const length = str.length;
    if (!groupedStrings[length]) {
      groupedStrings[length] = [str];
    } else {
      groupedStrings[length].push(str);
    }
  }

  let maxGroupSize = 0;
  for (const group in groupedStrings) {
    const groupSize = groupedStrings[group].length;
    if (groupSize > maxGroupSize) {
      maxGroupSize = groupSize;
    }
  }

  return maxGroupSize;
}