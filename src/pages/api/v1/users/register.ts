import { withDB } from "../../../../lib/database";
import { useModels } from "../../../../lib/database/useModels";
import { NextApiRequest, NextApiResponse } from "next";

const register = async (req: NextApiRequest, res: NextApiResponse) => {
  const { body } = req;
  const { User } = await useModels();
  const user = await new User(body);

  try {
    const doc = await user.save();
    return res.status(200).json({ success: true, doc });
  } catch (error) {
    return res.status(400).json({ success: false, error });
  }
};

export default withDB(register);
