import { authenticated } from "../../../utils/authenticated";

export default authenticated(async (req, res) => {
  const id = req.query.id;

  res.json(id);
});
