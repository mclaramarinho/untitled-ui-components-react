import { IconBaseType } from "../../types/icons.types";

export interface UntitledSocialIconProps extends IconBaseType {
    social: eSocialNetworksNames,
    variant?: eSocialNetworkIconVariants
}

enum eSocialNetworksNames {
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

enum eSocialNetworkIconVariants {
    DEFAULT = "default",
    GRAY = "gray-default",
    GRAY_HOVER = "gray-hover",
    WHITE = "white-default",
    WHITE_HOVER = "white-hover"
}

export { eSocialNetworkIconVariants, eSocialNetworksNames as eSocialNetworks };