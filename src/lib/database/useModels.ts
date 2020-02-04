import { typedModel } from "ts-mongoose";
import siteSchema from "./schemas/site_schema";
import user_schema from "./schemas/user_schema";

export const useModels = async () => {
  let Site;
  let User;
  try {
    Site = await typedModel("Site");
    User = await typedModel("User");
  } catch (_error) {
    Site = await typedModel("Site", siteSchema);
    User = await typedModel("User", user_schema);
  }

  return { Site, User };
};
