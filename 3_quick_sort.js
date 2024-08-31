function quickSort(list) {
  if(list.length < 2) return list;
  let basis = list[0];
  let less = list.map(item =>{
    if (basis > item) return item
  }).filter(item => item);
  let more = list.map(item => {
    if (basis < item) return item
  }).filter(item => item);

  return quickSort(less).concat([basis]).concat(quickSort(more));
}
