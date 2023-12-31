const User = require("../model/user")

// register function
exports.register = async (req, res, next) => {
  const { name,email, password } = req.body
  try {
    await User.create({
      name,
      email,
      password,
    }).then(User =>
      res.status(200).json({
        message: "User successfully created",
        User,
      })
    )
  } catch (err) {
    res.status(401).json({
      message: "User not successful created",
    })
  }
}

  // login function
  exports.login = async (req, res, next) => {
    const { email, password } = req.body
    try {
      const user = await User.findOne({ email, password })
      if (!user) {
        res.status(401).json({
          message: "Login not successful",
          error: "User not found",
        })
      } else {
        res.status(200).json({
          message: "Login successful",
          user,
        })
      }
    } catch (error) {
      res.status(400).json({
        message: "An error occurred",
        error: error.message,
      })
    }
  }

  