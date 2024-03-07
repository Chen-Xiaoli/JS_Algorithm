Function.prototype.myCall = function(cnx, ...args) {
  // compatible number, string, null, undefined
  cnx = cnx ? Object(cnx) : globalThis;
  let key = Symbol('temp');
  cnx[key] = this;

  let result = cnx[key](...args);
  delete cnx[key];
  return result
}

function test(name) {
  return name
}

test.myCall({}, 'Max');
