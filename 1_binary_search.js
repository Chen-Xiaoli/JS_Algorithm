function binary_search(list, target) {
  let low = 0;
  let high = list.length - 1;

  while(low <= high) {
    let mid = Math.floor((low + high) / 2);
    let current = list[mid];
    if(current === target) return mid;
    if(current < target) low = mid + 1;
    else high = mid - 1;
  }
  return null
}
