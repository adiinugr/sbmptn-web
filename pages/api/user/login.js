import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import cookie from "cookie";

import User from "../../../models/User";
import dbConnect from "../../../utils/dbConnect";

dbConnect();

export default async (req, res) => {
  const { email, password } = req.body;
  const { method } = req;

  try {
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

      res.setHeader(
        "Set-Cookie",
        cookie.serialize("auth", token, {
          httpOnly: true,
          secure: process.env.NODE_ENV == "production",
          sameSite: "strict",
          maxAge: 3600,
          path: "/",
        })
      );

      return res.json({ message: "Login berhasil!" });
    }

    return res.status(200).json({ message: "Terjadi masalah!" });
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};
