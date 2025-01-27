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

// tail Recursive binary_search
function binary_search(list, target, low, high) {
  let mid = Math.floor((low + high) / 2);
  let current = list[mid];
  if(low > high) return null;
  if(current === target ) return mid;
  if(current < target) return binary_search(list, target, mid+1, high);
  if(current > target) return binary_search(list, target, low, mid - 1);
}
