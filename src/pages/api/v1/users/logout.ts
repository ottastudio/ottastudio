import { withDB } from "../../../../lib/database";
import { useModels } from "../../../../lib/database/useModels";
import { NextApiRequest, NextApiResponse } from "next";

const register = async (req: NextApiRequest, res: NextApiResponse) => {
  const { body } = req;
  const { User } = await useModels();

  try {
    await User.findOneAndUpdate({ _id: body._id }, { token: "" });
    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(400).json({ success: false, error });
  }
};

export default withDB(register);
