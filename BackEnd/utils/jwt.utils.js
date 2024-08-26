const jwt = require("jsonwebtoken");

exports.GenerateToken = async (user) => {
  console.log(process.env.JWT_KEY);
  const token = await jwt.sign({ userId: user._id }, process.env.JWT_KEY, {
    expiresIn: "1d",
  });
  return token;
};
