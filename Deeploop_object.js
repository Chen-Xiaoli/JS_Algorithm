function getNestedKeys(obj, parentKey = '') {
  let result = [];

  for (const key in obj) {
    const currentKey = parentKey ? `${parentKey}.${key}` : key;

    if (typeof obj[key] === 'object' && obj[key] !== null) {
      if (obj[key] instanceof HTMLElement) {
        result.push(currentKey);
      } else {
        result = result.concat(getNestedKeys(obj[key], currentKey));
      }
    } else {
      result.push(currentKey);
    }
  }

  return result;
}

// const data = {
//   a: {
//     b: {
//       c: 'Hi',
//       d: function(){},
//       e: {
//         f: {
//           g: {
//             h: function(){}
//           }
//         }
//       }
//     }
//   },
//   a1: {
//     b1: '666'
//   },
//   a2: {
//     b2: function(){}
//   },
//   a3: 'hahah',
//   a4: '<div ></path></svg></div></div></div><div class="mb-5 text-2xl font-medium">How can I help you today?</div></div>',
//   a5: document.createElement('div') // Example of an HTMLElement
// };

// const resultArray = getNestedKeys(data);
// console.log(resultArray);
