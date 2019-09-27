module.exports = function multiply(first, second) {
  const res = BigInt(first) * BigInt(second)
  return res.toLocaleString()
  // your solution
}
