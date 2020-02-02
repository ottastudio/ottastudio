import { typedModel } from "ts-mongoose";
import siteSchema from "./schemas/site_schema";

export const useModels = async () => {
  let Site;
  try {
    Site = await typedModel("Site");
  } catch (_error) {
    Site = await typedModel("Site", siteSchema);
  }

  return { Site };
};
