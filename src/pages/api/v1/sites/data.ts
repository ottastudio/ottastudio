import { NextApiRequest, NextApiResponse } from "next";
import { withDB } from "../../../../lib/database";
import { useModels } from "../../../../lib/database/useModels";

export default withDB(async (_req: NextApiRequest, res: NextApiResponse) => {
  const { Site } = await useModels();
  const sites = await Site.find({}, (err: any, sites: any) =>
    err ? err : sites
  );

  if (!sites) {
    return res.json({ success: false });
  } else {
    return res.status(200).json({ success: true, sites: sites[0] });
  }
});
