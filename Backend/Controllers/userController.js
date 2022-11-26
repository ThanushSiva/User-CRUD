const User = require("../Model/userModel");

exports.home = (req,res) => {
    res.send("Hello World");
}

exports.createUser = async (req,res) => {
    try {
        const { name, email } = req.body;
        if(!name || !email) {
            throw new Error("Name and Email are required")
        }
        const userExists = await User.findOne({ email });
        if (userExists) {
            throw new Error("Email alreay exists")
        }
        const user = await User.create({ name, email });
        res.status(201).json({
            success: true,
            message: "User Created Successfully",
            user
        })
    }
    catch(err) {
        console.log(err);
    }
}

exports.readUser = async (req, res) => {
    try {
      const users = await User.find();
      res.status(200).json({
        success: true,
        users,
      });
    } catch (err) {
      console.log(err);
      res.status(401).json({
        success: false,
        message: err.message,
      });
    }
  };
  
  exports.updateUser = async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, req.body);
      res.status(200).json({
        success: true,
        message: "User updated Successfully",
      });
    } catch (err) {
      console.log(err);
      res.status(401).json({
        success: false,
        message: err.message,
      });
    }
  };
  
  exports.deleteUser = async (req, res) => {
    try {
      const userId = req.params.id;
      const user = await User.findByIdAndDelete(userId);
      res.status(200).json({
        success: true,
        message: "User Deleted Successfully",
      });
    } catch (err) {
      console.log(err);
      res.status(401).json({
        success: false,
        message: err.message,
      });
    }
  };