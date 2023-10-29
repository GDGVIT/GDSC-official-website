import insta from "@/assets/insta.svg";
import facebook from "@/assets/facebook.svg";
import linkedin from "@/assets/linkedin.svg";
import medium from "@/assets/medium.svg";
import telegram from "@/assets/telegram.svg";
import twitter from "@/assets/twitter.svg";
import youtube from "@/assets/youtube.svg";
import github from "@/assets/github-mark-white.svg"

export const getIcon = (name: string) => {
  const icons = {
    insta,
    facebook,
    linkedin,
    medium,
    telegram,
    twitter,
    youtube,
    github
  };
  return icons[name as keyof typeof icons];
};
