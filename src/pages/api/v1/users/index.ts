import { withDB } from "../../../../lib/database";
import { useModels } from "../../../../lib/database/useModels";
import { NextApiRequest, NextApiResponse } from "next";

const users = async (req: NextApiRequest, res: NextApiResponse) => {
  const { query, method } = req;
  const { User } = await useModels();

  const findBy = query.id
    ? { _id: query.id }
    : query.token
    ? { token: query.token }
    : {};

  switch (method) {
    case "GET":
      try {
        const users = await User.find(findBy);
        return res.status(200).json({ success: true, users: users });
      } catch (error) {
        return res.status(400).json({ success: false, error });
      }
    case "DELETE":
      try {
        await User.remove({ _id: query.id });
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

export default withDB(users);
