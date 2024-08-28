function selection_sort(list) {
  let newArr = [];
  while(list.length) {
      let smallest_index = find_smallest(list);
      newArr.push(list.pop(smallest_index));
  }
  return newArr
}

function find_smallest(list) {
  let smallest = list[0];
  let smallest_index = 0;
  for(let i=0; i < list.length; i++) {
    if(list[i] < smallest) {
      smallest = list[i];
      smallest_index = i;
    }
  }

  return smallest_index
}
