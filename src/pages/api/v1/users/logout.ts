import { withDB } from "../../../../lib/database";
import { useModels } from "../../../../lib/database/useModels";
import { NextApiRequest, NextApiResponse } from "next";

const logout = async (req: NextApiRequest, res: NextApiResponse) => {
  const { body } = req;
  const { User } = await useModels();

  try {
    await User.findOneAndUpdate({ _id: body._id }, { token: "" });
    return res.status(200).json({ success: true, message: "Logged Out" });
  } catch (error) {
    return res.json({ success: false, message: "Error" });
  }
};

export default withDB(logout);
