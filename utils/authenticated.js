import jwt from "jsonwebtoken";

export const authenticated = (fn) => async (req, res) => {
  jwt.verify(req.cookies.auth, process.env.JWT_SECRET, async (err, decoded) => {
    if (!err && decoded) {
      await fn(req, res);
    } else {
      res.status(401).json({
        message: "Maaf, anda tidak diperbolehkan mengakses halaman ini!",
      });
    }
  });
};
