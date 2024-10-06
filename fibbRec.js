function fibbRec(amount) {
  if (amount === 1) return [0];
  if (amount === 2) return [0, 1];
  else {
    return fibbRec(amount - 1).concat(
      fibbRec(amount - 1).at(-2) + fibbRec(amount - 1).at(-1)
    );
  }
}

module.exports = fibbRec;
