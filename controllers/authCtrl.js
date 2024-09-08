const Users = require("../models/authModel");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")




const loginFxn = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await Users.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User account not found" });
    }

    const isMatched = bcrypt.compare(password, user.password);

    if (!isMatched) {
      return res.status(400).json({ message: "Incorrect password or email!" });
    }

    // Generating Tokens
    // Access Token

    const accessToken = jwt.sign({ user }, `${process.env.ACCESS_TOKEN}`, {
      expiresIn: "30m",
    });

    const refreshToken = jwt.sign({ user }, `${process.env.REFRESH_TOKEN}`, {
      expiresIn: "5m",
    });

    // await sendUserEmail(email);

    return res.status(200).json({
      message: "Login Successful",
      accessToken,
      user,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};


module.exports = {
    loginFxn
}
