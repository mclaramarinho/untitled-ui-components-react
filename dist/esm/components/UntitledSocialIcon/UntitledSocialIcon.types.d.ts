import { IconBaseType } from "../../types/icons.types";
export interface UntitledSocialIconProps extends IconBaseType {
    social: SocialNetworkOptions;
    variant?: eSocialNetworkIconVariants;
}
export type SocialNetworkOptions = "angellist" | "apple" | "clubhouse" | "discord" | "dribble" | "facebook" | "figma" | "github" | "google" | "instagram" | "layers" | "linkedin" | "pinterest" | "reddit" | "signal" | "snapchat" | "telegram" | "tiktok" | "tumblr" | "x_twitter" | "youtube";
declare enum eSocialNetworksNames {
    ANGEL_LIST = "angellist",
    APPLE = "apple",
    CLUBHOUSE = "clubhouse",
    DISCORD = "discord",
    DRIBBLE = "dribble",
    FACEBOOK = "facebook",
    FIGMA = "figma",
    GITHUB = "github",
    GOOGLE = "google",
    INSTAGRAM = "instagram",
    LAYERS = "layers",
    LINKEDIN = "linkedin",
    PINTEREST = "pinterest",
    REDDIT = "reddit",
    SIGNAL = "signal",
    SNAPCHAT = "snapchat",
    TELEGRAM = "telegram",
    TIKTOK = "tiktok",
    TUMBLR = "tumblr",
    X = "x-twitter",
    TWITTER = "x-twitter",
    YOUTUBE = "youtube"
}
export type SocialNetworkVariants = "default" | "gray-default" | "gray-hover" | "white-default" | "white-hover";
declare enum eSocialNetworkIconVariants {
    DEFAULT = "default",
    GRAY = "gray-default",
    GRAY_HOVER = "gray-hover",
    WHITE = "white-default",
    WHITE_HOVER = "white-hover"
}
export { eSocialNetworkIconVariants, eSocialNetworksNames as eSocialNetworks };
