import { typedModel } from "ts-mongoose";
import site_schema from "./schemas/site_schema";
import user_schema from "./schemas/user_schema";
import subscriber_schema from "./schemas/subscriber_schema";

export const useModels = async () => {
  let Site;
  let User;
  let Subscriber;
  try {
    Site = await typedModel("Site");
    User = await typedModel("User");
    Subscriber = await typedModel("Subscriber");
  } catch (_error) {
    Site = await typedModel("Site", site_schema);
    User = await typedModel("User", user_schema);
    Subscriber = await typedModel("Subscriber", subscriber_schema);
  }

  return { Site, User, Subscriber };
};
