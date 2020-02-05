import { withDB } from "../../../../lib/database";
import { useModels } from "../../../../lib/database/useModels";
import { NextApiRequest, NextApiResponse } from "next";

const users = async (req: NextApiRequest, res: NextApiResponse) => {
  const { query } = req;
  const { User } = await useModels();

  const findBy = query.id
    ? { _id: query.id }
    : query.token
    ? { token: query.token }
    : {};

  try {
    const users = await User.find(findBy);
    return res.status(200).json({ success: true, users: users });
  } catch (error) {
    return res.status(400).json({ success: false, error });
  }
};

export default withDB(users);
