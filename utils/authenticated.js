import jwt from "jsonwebtoken";

export const authenticated = (fn) => async (req, res) => {
  const token = req.headers.authorization;

  jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
    if (!err && decoded) {
      return await fn(req, res);
    }

    return res.status(401).json({
      message: "Maaf, anda tidak diperbolehkan mengakses halaman ini!",
    });
  });
};
