import { authenticated } from "../../../utils/authenticated";

import User from "../../../models/User";
import dbConnect from "../../../utils/dbConnect";

dbConnect();

export default authenticated(async (req, res) => {
  const id = req.query.id;
  const { method } = req;

  try {
    if (method === "GET") {
      const user = await User.findOne({ _id: id });

      if (!user) {
        return res.status(400).json({ message: "User tidak ditemukan!" });
      }

      const { _id, name, email, score } = await user;

      return res.json({ _id, name, email, score });
    }
    return res.status(400).json({ message: "Terjadi masalah!" });
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});
