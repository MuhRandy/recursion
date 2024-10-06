function fibb(amount) {
  const result = [0];
  for (let i = 0; i < amount - 1; i++) {
    if (i === 0) result.push(1);
    else result.push(result[i - 1] + result[i]);
  }

  return result;
}

module.exports = fibb;
