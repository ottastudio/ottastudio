import { withDB } from "../../../../lib/database";
import { useModels } from "../../../../lib/database/useModels";
import { NextApiRequest, NextApiResponse } from "next";

const users = async (_req: NextApiRequest, res: NextApiResponse) => {
  const { User } = await useModels();

  try {
    const users = await User.find({});
    return res.status(200).json({ success: true, users });
  } catch (error) {
    return res.status(400).json({ success: false, error });
  }
};

export default withDB(users);
