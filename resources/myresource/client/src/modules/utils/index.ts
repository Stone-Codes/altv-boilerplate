import { log } from "alt-client";
import config from "./config";
export const generateViewLink = (link: string): string => {
  return `${config.VIEW_URL}${link}`;
};
