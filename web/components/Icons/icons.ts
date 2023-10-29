import insta from "@/assets/insta.svg";
import facebook from "@/assets/facebook.svg";
import linkedin from "@/assets/linkedin.svg";
import linkedindark from "@/assets/linkedin-dark.svg";
import medium from "@/assets/medium.svg";
import telegram from "@/assets/telegram.svg";
import twitter from "@/assets/twitter.svg";
import youtube from "@/assets/youtube.svg";
import github from "@/assets/github-mark-white.svg"
import githubdark from "@/assets/github-mark.svg"
import web from "@/assets/web.svg"

export const getIcon = (name: string) => {
  const icons = {
    insta,
    facebook,
    linkedin,
    medium,
    telegram,
    twitter,
    youtube,
    github,
    githubdark,
    linkedindark,
    web
  };
  return icons[name as keyof typeof icons];
};
