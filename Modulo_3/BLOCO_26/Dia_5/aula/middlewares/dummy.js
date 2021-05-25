module.exports = (req, res, next) => {
  console.log({ message: "Dummy"});
  next()
}