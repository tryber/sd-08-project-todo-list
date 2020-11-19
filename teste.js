function progeramaAritimetica(stard, end, step) {
  let arr = [];
  for (let index = stard; stard <= end; index +=step) {
      arr.push(index);
  }
  return arr;
}

console.log(progeramaAritimetica(2, 10, 2));
