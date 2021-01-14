import bcrypt from "bcryptjs";

import User from "../../../models/User";
import dbConnect from "../../../utils/dbConnect";

dbConnect();

export default async (req, res) => {
  const { name, email, password } = req.body;
  const { method } = req;

  if (method === "POST") {
    const newUser = new User({
      name,
      email,
      password: bcrypt.hashSync(password, 10),
    });

    const user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ message: "Email sudah terpakai!" });
    }

    await newUser.save();

    return res.json({ message: "Register user berhasil!" });
  }

  return res.status(200).json({ message: "Terjadi masalah!" });
};
