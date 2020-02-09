import { Dispatch, SetStateAction } from "react";

type Footer = boolean | null | undefined;
export type UIType = {
  footer?: Footer;
};
export type SetUIType = Dispatch<SetStateAction<UIType>>;

export type LoadingType = boolean;
export type SetLoadingType = Dispatch<SetStateAction<LoadingType>>;
