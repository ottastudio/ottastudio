import { withDB } from "../../../../lib/database";
import { useModels } from "../../../../lib/database/useModels";
import { NextApiRequest, NextApiResponse } from "next";

const login = async (req: NextApiRequest, res: NextApiResponse) => {
  const { body } = req;
  const { User } = await useModels();
  try {
    const user = await User.findOne({ email: body.email });

    if (!user) {
      return res.json({ success: false, message: "Email not found!" });
    } else {
      if (user.role !== 2) {
        return res.json({
          success: false,
          message: "🥺"
        });
      } else {
        await user.comparePassword(
          body.password,
          (_err: any, isMatch: boolean) => {
            if (!isMatch) {
              return res.json({ success: false, message: "Wrong password!" });
            } else {
              user.generateToken((err: any, user: any) => {
                if (err) {
                  return res.json({
                    success: false,
                    message: "Cannot generate token"
                  });
                }
                return res.status(200).json({
                  success: true,
                  message: `Logged in as ${user.name}.`,
                  user
                });
              });
            }
          }
        );
      }
    }
  } catch (error) {
    return res.status(400).json({ success: false, error });
  }
};

export default withDB(login);
