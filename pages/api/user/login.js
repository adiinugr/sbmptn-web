import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import User from "../../../models/User";
import dbConnect from "../../../utils/dbConnect";

dbConnect();

export default async (req, res) => {
  const { email, password } = req.body;
  const { method } = req;

  if (method === "POST") {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Email atau password salah!" });
    }

    const validPassword = await bcrypt.compareSync(password, user.password);

    if (!validPassword) {
      return res.status(400).json({ message: "Email atau password salah!" });
    }

    const token = await jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    return res.json({ token });
  }

  return res.status(200).json({ message: "Terjadi masalah!" });
};
