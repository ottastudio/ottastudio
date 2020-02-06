import { withDB } from "../../../../lib/database";
import { useModels } from "../../../../lib/database/useModels";
import { NextApiRequest, NextApiResponse } from "next";

const register = async (req: NextApiRequest, res: NextApiResponse) => {
  const { body, method, query } = req;
  const { Subscriber } = await useModels();

  switch (method) {
    case "GET":
      const response = await Subscriber.find({});
      return res.status(200).json({ success: true, response });
    case "POST":
      const user = await new Subscriber(body);
      try {
        const doc = await user.save();
        return res.status(200).json({
          success: true,
          message: "Thank you!",
          doc
        });
      } catch (error) {
        return res.json({
          success: false,
          message: `Error "${body.email}" already used by other!`,
          error
        });
      }
    case "DELETE":
      try {
        await Subscriber.deleteOne({ _id: query.id });
        return res.status(200).json({ success: true, message: "deleted" });
      } catch (error) {
        return res.json({ success: false, message: "cannot be delete" });
      }
    default:
      return (
        res.setHeader("Allow", ["GET", "PUT"]),
        res.status(405).end(`Method ${method} Not Allowed!`)
      );
  }
};

export default withDB(register);
