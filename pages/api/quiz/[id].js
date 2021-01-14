import dbConnect from "../../../utils/dbConnect";
import Quiz from "../../../models/Quiz";

dbConnect();

export default async (req, res) => {
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case "GET":
      try {
        const quiz = await Quiz.findById(id);

        if (!quiz) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: quiz });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "PUT":
      try {
        const quiz = await Quiz.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });

        if (!quiz) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: quiz });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "DELETE":
      try {
        const deletedQuiz = await Quiz.deleteOne({ _id: id });

        if (!deletedQuiz) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
