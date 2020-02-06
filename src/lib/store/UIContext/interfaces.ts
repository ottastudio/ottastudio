import { Dispatch, SetStateAction } from "react";

export type NotificationType = {
  status: boolean | undefined | null;
  message?: string | null;
  type?: "error" | "good" | "bad" | "cool" | null;
};
export type SetNotificationType = Dispatch<SetStateAction<NotificationType>>;

type Footer = boolean | null | undefined;
export type UIType = {
  footer?: Footer;
};
export type SetUIType = Dispatch<SetStateAction<UIType>>;

export type LoadingType = boolean;
export type SetLoadingType = Dispatch<SetStateAction<LoadingType>>;
