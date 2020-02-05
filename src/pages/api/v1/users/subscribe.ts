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
        return res.status(200).json({ success: true, doc });
      } catch (error) {
        return res.status(400).json({ success: false, error });
      }
    case "DELETE":
      try {
        await Subscriber.remove({ _id: query.id });
        return res.status(200).json({ success: true });
      } catch (error) {
        return res.status(400).json({ success: false });
      }
    default:
      return (
        res.setHeader("Allow", ["GET", "PUT"]),
        res.status(405).end(`Method ${method} Not Allowed!`)
      );
  }
};

export default withDB(register);
