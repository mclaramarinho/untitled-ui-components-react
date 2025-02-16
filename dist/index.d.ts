import React, { CSSProperties } from 'react';

/**
 * Base type for any image-containing component
 */
interface ImageBaseType {
    /**
     * [REQUIRED] parameter to set image alt attribute
     * @type string
     */
    altText: string;
    /**
     * [OPTIONAL] parameter to set image ariaHidden attribute
     * @type boolean | undefined
     */
    ariaHidden?: boolean;
    /**
     * [OPTIONAL] parameter that indicates the image path url
     * @type string | undefined
     */
    imgPath?: string;
    /**
     * [OPTIONAL] parameter to set image src attribute
     * @type ModuleExport | undefined
     */
    img?: ModuleExport;
}
/**
 * Image size object
 * @property width
 * @property height
 */
type ImageSizeType = {
    /**
     * @type number
     */
    width: number;
    /**
     * @type number
     */
    height: number;
};
type ModuleExport<T = any> = {
    default: T;
};

/** @description Base type for all Icon components
 * @extends ImageBaseType
*/
interface IconBaseType extends ImageBaseType {
    /** Optional attribute
     *
     * If undefined, the icon will have its regular size
     *
     * @type ImageSizeType
     */
    size?: ImageSizeType;
}
/**
 * Used to set the icon to default sizes. Is passed as prop to components.
 * @class
 * @example size={FixedIconSize.SM}
 */
declare class FixedIconSize {
    /**
     * Extra-small size (12x12)
     * @static
     */
    static get XS(): ImageSizeType;
    /**
    * Small size (16x16)
    * @static
    */
    static get SM(): ImageSizeType;
    /**
    * Medium size (20x20)
    * @static
    */
    static get MD(): ImageSizeType;
    /**
    * Large size (24x24)
    * @static
    */
    static get LG(): ImageSizeType;
    /**
    * Extra-large size (32x32)
    * @static
    */
    static get XL(): ImageSizeType;
    /**
    * Double-extra-large size (48x48)
    * @static
    */
    static get XXL(): ImageSizeType;
}

/**
 * Prop interface for UntitleCountryIcon component
 * @extends IconBaseType
 */
interface UntitledCountryIconProps extends IconBaseType {
    /**
     * Country two-letter abbreviation
     */
    country: eCountryAbbr;
}
type eCountryAbbr = "AD" | "AE" | "AF" | "AG" | "AI" | "AL" | "AM" | "AO" | "AR" | "AS" | "AT" | "AU" | "AW" | "AX" | "AZ" | "BB" | "BD" | "BE" | "BF" | "BG" | "BH" | "BI" | "BJ" | "BL" | "BM" | "BN" | "BO" | "BQ1" | "BQ2" | "BQ" | "BR" | "BS" | "BT" | "BW" | "BY" | "BZ" | "CA" | "CC" | "CD1" | "CD" | "CF" | "CH" | "CK" | "CL" | "CM" | "CN" | "CO" | "CR" | "CU" | "CW" | "CX" | "CY" | "CZ" | "DE" | "DJ" | "DK" | "DM" | "DO" | "DS" | "DZ" | "EC" | "EE" | "EG" | "EH" | "ER" | "ES" | "ET" | "FI" | "FJ" | "FK" | "FM" | "FO" | "FR" | "GA" | "GB2" | "GB" | "GD" | "GE" | "GG" | "GH" | "GI" | "GL" | "GM" | "GN" | "GQ" | "GR" | "GT" | "GU" | "GW" | "GY" | "HK" | "HN" | "HR" | "HT" | "HU" | "ID" | "IE" | "IL" | "IM" | "IN" | "IO" | "IQ" | "IR" | "IS" | "IT" | "JE" | "JM" | "JO" | "JP" | "KE" | "KG" | "KH" | "KI" | "KM" | "KN" | "KP" | "KR" | "KW" | "KY" | "KZ" | "LA" | "LB" | "LC" | "LI" | "LK" | "LR" | "LS" | "LT" | "LU" | "LV" | "LY" | "MA" | "MC" | "MD" | "ME" | "MG" | "MK" | "ML" | "MM" | "MN" | "MO" | "MP" | "MQ" | "MR" | "MS" | "MT" | "MU" | "MV" | "MW" | "MX" | "MY" | "MZ" | "NA" | "NE" | "NF" | "NG" | "NI" | "NL" | "NO" | "NP" | "NR" | "NU" | "NZ" | "OM" | "PA" | "PE" | "PF" | "PG" | "PH" | "PK" | "PL" | "PN" | "PR" | "PS" | "PT" | "PW" | "PY" | "QA" | "RO" | "RS" | "RU" | "RW" | "SA" | "SB" | "SC" | "SE" | "SG" | "SI" | "SK" | "SL" | "SM" | "SN" | "SO" | "SR" | "SS" | "ST" | "SV" | "SX" | "SY" | "SZ" | "TC" | "TD" | "TG" | "TH" | "TJ" | "TK" | "TL" | "TM" | "TN" | "TO" | "TR" | "TT" | "TV" | "TW" | "TZ" | "UA" | "UG" | "US" | "UY" | "UZ" | "VC" | "VE" | "VG" | "VI" | "VN" | "VU" | "WS" | "YE" | "ZA" | "ZM" | "ZW";
/**
 * Enum to reference asset file name by country abbreviation
 * @enum
 */
declare enum eCountryIconAssetByAbbreviation {
    AD = "AD.svg",
    AE = "AE.svg",
    AF = "AF.svg",
    AG = "AG.svg",
    AI = "AI.svg",
    AL = "AL.svg",
    AM = "AM.svg",
    AO = "AO.svg",
    AR = "AR.svg",
    AS = "AS.svg",
    AT = "AT.svg",
    AU = "AU.svg",
    AW = "AW.svg",
    AX = "AX.svg",
    AZ = "AZ.svg",
    BB = "BB.svg",
    BD = "BD.svg",
    BE = "BE.svg",
    BF = "BF.svg",
    BG = "BG.svg",
    BH = "BH.svg",
    BI = "BI.svg",
    BJ = "BJ.svg",
    BL = "BL.svg",
    BM = "BM.svg",
    BN = "BN.svg",
    BO = "BO.svg",
    BQ1 = "BQ-1.svg",
    BQ2 = "BQ-2.svg",
    BQ = "BQ.svg",
    BR = "BR.svg",
    BS = "BS.svg",
    BT = "BT.svg",
    BW = "BW.svg",
    BY = "BY.svg",
    BZ = "BZ.svg",
    CA = "CA.svg",
    CC = "CC.svg",
    CD1 = "CD-1.svg",
    CD = "CD.svg",
    CF = "CF.svg",
    CH = "CH.svg",
    CK = "CK.svg",
    CL = "CL.svg",
    CM = "CM.svg",
    CN = "CN.svg",
    CO = "CO.svg",
    CR = "CR.svg",
    CU = "CU.svg",
    CW = "CW.svg",
    CX = "CX.svg",
    CY = "CY.svg",
    CZ = "CZ.svg",
    DE = "DE.svg",
    DJ = "DJ.svg",
    DK = "DK.svg",
    DM = "DM.svg",
    DO = "DO.svg",
    DS = "DS.svg",
    DZ = "DZ.svg",
    EC = "EC.svg",
    EE = "EE.svg",
    EG = "EG.svg",
    EH = "EH.svg",
    ER = "ER.svg",
    ES = "ES.svg",
    ET = "ET.svg",
    FI = "FI.svg",
    FJ = "FJ.svg",
    FK = "FK.svg",
    FM = "FM.svg",
    FO = "FO.svg",
    FR = "FR.svg",
    GA = "GA.svg",
    GB2 = "GB-2.svg",
    GB = "GB.svg",
    GD = "GD.svg",
    GE = "GE.svg",
    GG = "GG.svg",
    GH = "GH.svg",
    GI = "GI.svg",
    GL = "GL.svg",
    GM = "GM.svg",
    GN = "GN.svg",
    GQ = "GQ.svg",
    GR = "GR.svg",
    GT = "GT.svg",
    GU = "GU.svg",
    GW = "GW.svg",
    GY = "GY.svg",
    HK = "HK.svg",
    HN = "HN.svg",
    HR = "HR.svg",
    HT = "HT.svg",
    HU = "HU.svg",
    ID = "ID.svg",
    IE = "IE.svg",
    IL = "IL.svg",
    IM = "IM.svg",
    IN = "IN.svg",
    IO = "IO.svg",
    IQ = "IQ.svg",
    IR = "IR.svg",
    IS = "IS.svg",
    IT = "IT.svg",
    JE = "JE.svg",
    JM = "JM.svg",
    JO = "JO.svg",
    JP = "JP.svg",
    KE = "KE.svg",
    KG = "KG.svg",
    KH = "KH.svg",
    KI = "KI.svg",
    KM = "KM.svg",
    KN = "KN.svg",
    KP = "KP.svg",
    KR = "KR.svg",
    KW = "KW.svg",
    KY = "KY.svg",
    KZ = "KZ.svg",
    LA = "LA.svg",
    LB = "LB.svg",
    LC = "LC.svg",
    LI = "LI.svg",
    LK = "LK.svg",
    LR = "LR.svg",
    LS = "LS.svg",
    LT = "LT.svg",
    LU = "LU.svg",
    LV = "LV.svg",
    LY = "LY.svg",
    MA = "MA.svg",
    MC = "MC.svg",
    MD = "MD.svg",
    ME = "ME.svg",
    MG = "MG.svg",
    MK = "MK.svg",
    ML = "ML.svg",
    MM = "MM.svg",
    MN = "MN.svg",
    MO = "MO.svg",
    MP = "MP.svg",
    MQ = "MQ.svg",
    MR = "MR.svg",
    MS = "MS.svg",
    MT = "MT.svg",
    MU = "MU.svg",
    MV = "MV.svg",
    MW = "MW.svg",
    MX = "MX.svg",
    MY = "MY.svg",
    MZ = "MZ.svg",
    NA = "NA.svg",
    NE = "NE.svg",
    NF = "NF.svg",
    NG = "NG.svg",
    NI = "NI.svg",
    NL = "NL.svg",
    NO = "NO.svg",
    NP = "NP.svg",
    NR = "NR.svg",
    NU = "NU.svg",
    NZ = "NZ.svg",
    OM = "OM.svg",
    PA = "PA.svg",
    PE = "PE.svg",
    PF = "PF.svg",
    PG = "PG.svg",
    PH = "PH.svg",
    PK = "PK.svg",
    PL = "PL.svg",
    PN = "PN.svg",
    PR = "PR.svg",
    PS = "PS.svg",
    PT = "PT.svg",
    PW = "PW.svg",
    PY = "PY.svg",
    QA = "QA.svg",
    RO = "RO.svg",
    RS = "RS.svg",
    RU = "RU.svg",
    RW = "RW.svg",
    SA = "SA.svg",
    SB = "SB.svg",
    SC = "SC.svg",
    SE = "SE.svg",
    SG = "SG.svg",
    SI = "SI.svg",
    SK = "SK.svg",
    SL = "SL.svg",
    SM = "SM.svg",
    SN = "SN.svg",
    SO = "SO.svg",
    SR = "SR.svg",
    SS = "SS.svg",
    ST = "ST.svg",
    SV = "SV.svg",
    SX = "SX.svg",
    SY = "SY.svg",
    SZ = "SZ.svg",
    TC = "TC.svg",
    TD = "TD.svg",
    TG = "TG.svg",
    TH = "TH.svg",
    TJ = "TJ.svg",
    TK = "TK.svg",
    TL = "TL.svg",
    TM = "TM.svg",
    TN = "TN.svg",
    TO = "TO.svg",
    TR = "TR.svg",
    TT = "TT.svg",
    TV = "TV.svg",
    TW = "TW.svg",
    TZ = "TZ.svg",
    UA = "UA.svg",
    UG = "UG.svg",
    US = "US.svg",
    UY = "UY.svg",
    UZ = "UZ.svg",
    VC = "VC.svg",
    VE = "VE.svg",
    VG = "VG.svg",
    VI = "VI.svg",
    VN = "VN.svg",
    VU = "VU.svg",
    WS = "WS.svg",
    YE = "YE.svg",
    ZA = "ZA.svg",
    ZM = "ZM.svg",
    ZW = "ZW.svg"
}

/**
 * Country icon component
 * @param props
 */
declare const UntitledCountryIcon: React.FC<UntitledCountryIconProps>;

type UntitledColors = 'gray' | 'brand' | 'error' | 'warning' | 'success' | 'blue-gray' | 'blue-light' | 'blue' | 'indigo' | 'purple' | 'pink' | 'rose' | 'orange';
declare function isUntitledColor(value: unknown): value is UntitledColors;
type UntitledColorShades = 'gray-50' | 'gray-100' | 'gray-200' | 'gray-300' | 'gray-400' | 'gray-500' | 'gray-600' | 'gray-700' | 'gray-800' | 'gray-900' | 'brand-50' | 'brand-100' | 'brand-200' | 'brand-300' | 'brand-400' | 'brand-500' | 'brand-600' | 'brand-700' | 'brand-800' | 'brand-900' | 'error-50' | 'error-100' | 'error-200' | 'error-300' | 'error-400' | 'error-500' | 'error-600' | 'error-700' | 'error-800' | 'error-900' | 'warning-50' | 'warning-100' | 'warning-200' | 'warning-300' | 'warning-400' | 'warning-500' | 'warning-600' | 'warning-700' | 'warning-800' | 'warning-900' | 'success-50' | 'success-100' | 'success-200' | 'success-300' | 'success-400' | 'success-500' | 'success-600' | 'success-700' | 'success-800' | 'success-900' | 'blue-gray-50' | 'blue-gray-100' | 'blue-gray-200' | 'blue-gray-300' | 'blue-gray-400' | 'blue-gray-500' | 'blue-gray-600' | 'blue-gray-700' | 'blue-gray-800' | 'blue-gray-900' | 'blue-light-50' | 'blue-light-100' | 'blue-light-200' | 'blue-light-300' | 'blue-light-400' | 'blue-light-500' | 'blue-light-600' | 'blue-light-700' | 'blue-light-800' | 'blue-light-900' | 'blue-50' | 'blue-100' | 'blue-200' | 'blue-300' | 'blue-400' | 'blue-500' | 'blue-600' | 'blue-700' | 'blue-800' | 'blue-900' | 'indigo-50' | 'indigo-100' | 'indigo-200' | 'indigo-300' | 'indigo-400' | 'indigo-500' | 'indigo-600' | 'indigo-700' | 'indigo-800' | 'indigo-900' | 'purple-50' | 'purple-100' | 'purple-200' | 'purple-300' | 'purple-400' | 'purple-500' | 'purple-600' | 'purple-700' | 'purple-800' | 'purple-900' | 'pink-50' | 'pink-100' | 'pink-200' | 'pink-300' | 'pink-400' | 'pink-500' | 'pink-600' | 'pink-700' | 'pink-800' | 'pink-900' | 'rose-50' | 'rose-100' | 'rose-200' | 'rose-300' | 'rose-400' | 'rose-500' | 'rose-600' | 'rose-700' | 'rose-800' | 'rose-900' | 'orange-50' | 'orange-100' | 'orange-200' | 'orange-300' | 'orange-400' | 'orange-500' | 'orange-600' | 'orange-700' | 'orange-800' | 'orange-900';
declare function isUntitledColorShades(value: unknown): value is UntitledColorShades;
interface UntitledColorsMap {
    [index: string]: UntitledColorInfo;
}
interface UntitledColorInfo {
    name: string;
    cssVariablePrefix: string;
    shades: UntitledColorShadesList;
}
interface UntitledColorShadesList {
    [index: number]: UntitledColorShadeInfo;
    [index: string]: UntitledColorShadeInfo;
    25: UntitledColorShadeInfo;
    50: UntitledColorShadeInfo;
    100: UntitledColorShadeInfo;
    200: UntitledColorShadeInfo;
    300: UntitledColorShadeInfo;
    400: UntitledColorShadeInfo;
    500: UntitledColorShadeInfo;
    600: UntitledColorShadeInfo;
    700: UntitledColorShadeInfo;
    800: UntitledColorShadeInfo;
    900: UntitledColorShadeInfo;
}
interface UntitledColorShadeInfo {
    hex: string;
}
declare class UntitledColorsList {
    static get AllColors(): UntitledColorsMap;
    static get PrimaryGray(): UntitledColorInfo;
    static get PrimaryBrand(): UntitledColorInfo;
    static get PrimaryError(): UntitledColorInfo;
    static get PrimaryWarning(): UntitledColorInfo;
    static get PrimarySuccess(): UntitledColorInfo;
    static get SecondaryBlueGray(): UntitledColorInfo;
    static get SecondaryBlueLight(): UntitledColorInfo;
    static get SecondaryBlue(): UntitledColorInfo;
    static get SecondaryIndigo(): UntitledColorInfo;
    static get SecondaryPurple(): UntitledColorInfo;
    static get SecondaryPink(): UntitledColorInfo;
    static get SecondaryRose(): UntitledColorInfo;
    static get SecondaryOrange(): UntitledColorInfo;
}

type UntitledFontWeights = 'regular' | 'medium' | 'semibold' | 'bold';

interface UntitledHeaderProps {
    /**
     * The text content of the header.
     * Accepts a `string` or `number`.
     */
    text?: string | number;
    /**
     * The font weight of the header.
     * Should be a value from `UntitledFontWeights` (not defined here).
     */
    weight?: UntitledFontWeights;
    /**
     * The color of the header text.
     * Can be a predefined color from `UntitledColorShades` or `UntitledColors`,
     * or a custom color string (e.g., HEX, RGB, or color name).
     */
    color?: UntitledColorShades | UntitledColors | string;
    /**
     * The font size of the header.
     * Can be a predefined size from `UntitledHeaderFontSizes` or a custom numeric value.
     */
    size?: number | UntitledHeaderFontSizes;
    /**
     * The semantic level of the header (`h1` to `h6`).
     * If not provided, it can be inferred from `size` using `HeaderLevelsByFontSize`.
     */
    level?: UntitledHeaderLevels;
    /**
     * Additional styles to be applied to the header.
     * Overrides color set by prop.
     * Accepts a `CSSProperties` object.
     */
    styles?: CSSProperties;
}
type UntitledHeaderFontSizes = '2XL' | 'XL' | 'LG' | 'MD' | 'SM' | 'XS';
type UntitledHeaderLevels = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
declare enum HeaderLevelsByFontSize {
    '2XL' = "h1",
    'XL' = "h2",
    'LG' = "h3",
    'MD' = "h4",
    'SM' = "h5",
    'XS' = "h6"
}

declare const UntitledHeader: React.FC<UntitledHeaderProps>;

interface UntitledIconProps {
    icon: UntitledIconType;
    size?: number;
    variant?: UntitleIconVariant;
    bgColor?: UntitledColors;
    customBgColor?: string;
    customSecondaryBgColor?: string;
    customIconColor?: string;
    iconColor?: UntitledColors;
    styles?: UntitledIconStyles;
}
declare const iconNamesFromFeatherIcons: string[];
type UntitledIconType = (typeof iconNamesFromFeatherIcons)[number];
type UntitleIconVariant = "no-bg" | "light" | "double-color-light" | "double-color-dark" | "square-fill-light" | "square-fill" | "square-fill-dark" | "square-outline";
interface UntitledIconStyles {
    outerWrapper: CSSProperties;
    innerWrapper: CSSProperties;
}

/**
 * @param props.icon - Please refer to {@link https://feathericons.com/ | Feather Icons} to see all available icons
 * @param props.size - Single number
 * @copyright Uses {@link https://github.com/feathericons/react-feather | React Feather} lib to render the icons
 */
declare const UntitledIcon: React.FC<UntitledIconProps>;

interface UntitledIntegrationIconProps extends IconBaseType {
    integration: AllIntegrations;
}
type AllIntegrations = "chrome" | "edge" | "firefox" | "ie" | "opera" | "safari" | "tor" | "uc" | "yandex" | "adobe_dreamweaver" | "angular" | "atom" | "bitbucket" | "c_sharp" | "c_plus_plus" | "codepen" | "css_3" | "docker" | "drupal" | "git" | "go" | "html_5" | "java" | "jb_appcode" | "jb_clion" | "jb_datagrip" | "jb_dotcover" | "jb_dotmemory" | "jb_dotpeek" | "jb_dottrace" | "jb_goland" | "jb_hub" | "jb_intellij" | "jb_kotlin" | "jb_phpstorm" | "jb_pycharm" | "jb_pycharm_edu" | "jb_resharper" | "jb_resharper_c_plus_plus" | "jb_rider" | "jb_rubymine" | "jb_teamcity" | "jb_toolbox_app" | "jb_upsource" | "jb_webstorm" | "jb_youtrack" | "joomla" | "jquery" | "js" | "node_js" | "npm" | "php" | "python" | "r_lang" | "react" | "redux" | "sublime_text" | "swift" | "vs_code" | "vue" | "weebly" | "wordpress" | "yii_1" | "adobe" | "adobe_after_effects" | "adobe_illustrator" | "adobe_indesign" | "adobe_lightroom" | "adobe_photoshop" | "adobe_xd" | "autodesk" | "behance" | "dribble" | "figma" | "framer" | "invision" | "marvel" | "procreate" | "sketch" | "zeplin" | "alfa_bank" | "american_express" | "direct_debit" | "jcb" | "mastercard" | "paypal" | "qiwi" | "sberbank" | "shopify" | "stripe" | "swift_bank" | "tinkoff" | "visa" | "webmoney" | "western_union" | "world_pay" | "yandex_kassa" | "discord" | "facetime" | "fb_messenger" | "google_meet" | "google_hangouts" | "kakao_talk" | "line" | "messages" | "ms_skype" | "slack" | "spectrum" | "telegram" | "viber" | "wechat" | "whatsapp" | "zoom" | "apple_music" | "google_play_music" | "grooveshark" | "shazam" | "sound_cloud" | "spotify" | "yandex_music" | "youtube_music" | "android" | "apple" | "blackberry" | "chrome_os" | "elementary" | "fedora" | "freebsd" | "gnome" | "ios" | "linux" | "linux_mint" | "macos" | "microsoft" | "ubuntu" | "airbnb" | "amd" | "angel_list" | "app_store" | "bluetooth" | "dell" | "envato" | "general_electric" | "google" | "google_ads" | "google_play" | "ibm" | "intel" | "kickstarter" | "medium" | "ms_xbox" | "playstation" | "product_hunt" | "steam" | "stumble_upon" | "tech_crunch" | "tripadvisor" | "amazon" | "asana" | "atlassian" | "bamboo" | "basecamp" | "confluence" | "dropbox" | "evernote" | "finder" | "flowmapp" | "g_calendar" | "github" | "gitlab" | "gmail" | "google_docs" | "google_maps" | "google_drive" | "google_meet2" | "intercom" | "jira" | "jira_core" | "jira_ops" | "jira_service_desk" | "kayako" | "linear" | "loom" | "mailchimp" | "ms_excel" | "ms_onedrive" | "ms_outlook" | "ms_powerpoint" | "ms_sharepoint" | "ms_word" | "ms_yammer" | "notion" | "opsgenie" | "sourcetree" | "teams" | "things" | "treehouse" | "trello" | "workflowy" | "zapier" | "zendesk" | "askfm" | "badoo" | "facebook" | "foursquare" | "instagram" | "linkedin" | "ok" | "patreon" | "pinterest" | "quora" | "qzone" | "reddit" | "snapchat" | "stack_overflow" | "tiktok" | "tinder" | "tumblr" | "twitter" | "vk" | "weibo" | "appearin" | "coub" | "flickr" | "igtv" | "netflix" | "twitch" | "vimeo" | "youtube";
declare enum eBrowserNames {
    CHROME = "chrome",
    EDGE = "edge",
    FIREFOX = "firefox",
    IE = "ie",
    OPERA = "opera",
    SAFARI = "safari",
    TOR = "tor",
    UC = "uc",
    YANDEX = "yandex"
}
declare enum eCodingPlatforms {
    ADOBE_DREAMWEAVER = "adobe_dreamweaver",
    ANGULAR = "angular",
    ATOM = "atom",
    BITBUCKET = "bitbucket",
    C_SHARP = "c_sharp",
    C_PLUS_PLUS = "c_plus_plus",
    CODEPEN = "codepen",
    CSS_3 = "css_3",
    DOCKER = "docker",
    DRUPAL = "drupal",
    GIT = "git",
    GO = "go",
    HTML_5 = "html_5",
    JAVA = "java",
    JB_APPCODE = "jb_appcode",
    JB_CLION = "jb_clion",
    JB_DATAGRIP = "jb_datagrip",
    JB_DOTCOVER = "jb_dotcover",
    JB_DOTMEMORY = "jb_dotmemory",
    JB_DOTPEEK = "jb_dotpeek",
    JB_DOTTRACE = "jb_dottrace",
    JB_GOLAND = "jb_goland",
    JB_HUB = "jb_hub",
    JB_INTELLIJ = "jb_intellij",
    JB_KOTLIN = "jb_kotlin",
    JB_PHPSTORM = "jb_phpstorm",
    JB_PYCHARM = "jb_pycharm",
    JB_PYCHARM_EDU = "jb_pycharm_edu",
    JB_RESHARPER = "jb_resharper",
    JB_RESHARPER_C_PLUS_PLUS = "jb_resharper_c_plus_plus",
    JB_RIDER = "jb_rider",
    JB_RUBYMINE = "jb_rubymine",
    JB_TEAMCITY = "jb_teamcity",
    JB_TOOLBOX_APP = "jb_toolbox_app",
    JB_UPSOURCE = "jb_upsource",
    JB_WEBSTORM = "jb_webstorm",
    JB_YOUTRACK = "jb_youtrack",
    JOOMLA = "joomla",
    JQUERY = "jquery",
    JS = "js",
    NODE_JS = "node_js",
    NPM = "npm",
    PHP = "php",
    PYTHON = "python",
    R_LANG = "r_lang",
    REACT = "react",
    REDUX = "redux",
    SUBLIME_TEXT = "sublime_text",
    SWIFT = "swift",
    VS_CODE = "vs_code",
    VUE = "vue",
    WEEBLY = "weebly",
    WORDPRESS = "wordpress",
    YII_1 = "yii_1"
}
declare enum eDesignPlatforms {
    ADOBE = "adobe",
    ADOBE_AFTER_EFFECTS = "adobe_after_effects",
    ADOBE_ILLUSTRATOR = "adobe_illustrator",
    ADOBE_INDESIGN = "adobe_indesign",
    ADOBE_LIGHTROOM = "adobe_lightroom",
    ADOBE_PHOTOSHOP = "adobe_photoshop",
    ADOBE_XD = "adobe_xd",
    AUTODESK = "autodesk",
    BEHANCE = "behance",
    DRIBBLE = "dribble",
    FIGMA = "figma",
    FRAMER = "framer",
    INVISION = "invision",
    MARVEL = "marvel",
    PROCREATE = "procreate",
    SKETCH = "sketch",
    ZEPLIN = "zeplin"
}
declare enum eFinance {
    ALFA_BANK = "alfa_bank",
    AMERICAN_EXPRESS = "american_express",
    DIRECT_DEBIT = "direct_debit",
    JCB = "jcb",
    MASTERCARD = "mastercard",
    PAYPAL = "paypal",
    QIWI = "qiwi",
    SBERBANK = "sberbank",
    SHOPIFY = "shopify",
    STRIPE = "stripe",
    SWIFT_BANK = "swift_bank",
    TINKOFF = "tinkoff",
    VISA = "visa",
    WEBMONEY = "webmoney",
    WESTERN_UNION = "western_union",
    WORLD_PAY = "world_pay",
    YANDEX_KASSA = "yandex_kassa"
}
declare enum eMessengers {
    DISCORD = "discord",
    FACETIME = "facetime",
    FB_MESSENGER = "fb_messenger",
    GOOGLE_MEET = "google_meet",
    GOOGLE_HANGOUTS = "google_hangouts",
    KAKAO_TALK = "kakao_talk",
    LINE = "line",
    MESSAGES = "messages",
    MS_SKYPE = "ms_skype",
    SLACK = "slack",
    SPECTRUM = "spectrum",
    TELEGRAM = "telegram",
    VIBER = "viber",
    WECHAT = "wechat",
    WHATSAPP = "whatsapp",
    ZOOM = "zoom"
}
declare enum eMusic {
    APPLE_MUSIC = "apple_music",
    GOOGLE_PLAY_MUSIC = "google_play_music",
    GROOVESHARK = "grooveshark",
    SHAZAM = "shazam",
    SOUND_CLOUD = "sound_cloud",
    SPOTIFY = "spotify",
    YANDEX_MUSIC = "yandex_music",
    YOUTUBE_MUSIC = "youtube_music"
}
declare enum eOSNames {
    ANDROID = "android",
    APPLE = "apple",
    BLACKBERRY = "blackberry",
    CHROME_OS = "chrome_os",
    ELEMENTARY = "elementary",
    FEDORA = "fedora",
    FREEBSD = "freebsd",
    GNOME = "gnome",
    IOS = "ios",
    LINUX = "linux",
    LINUX_MINT = "linux_mint",
    MACOS = "macos",
    MICROSOFT = "microsoft",
    UBUNTU = "ubuntu"
}
declare enum eOtherIntegrations {
    AIRBNB = "airbnb",
    AMD = "amd",
    ANGEL_LIST = "angel_list",
    APP_STORE = "app_store",
    BLUETOOTH = "bluetooth",
    DELL = "dell",
    ENVATO = "envato",
    GENERAL_ELECTRIC = "general_electric",
    GOOGLE = "google",
    GOOGLE_ADS = "google_ads",
    GOOGLE_PLAY = "google_play",
    IBM = "ibm",
    INTEL = "intel",
    KICKSTARTER = "kickstarter",
    MEDIUM = "medium",
    MS_XBOX = "ms_xbox",
    PLAYSTATION = "playstation",
    PRODUCT_HUNT = "product_hunt",
    STEAM = "steam",
    STUMBLE_UPON = "stumble_upon",
    TECH_CRUNCH = "tech_crunch",
    TRIPADVISOR = "tripadvisor"
}
declare enum eProductivity {
    AMAZON = "amazon",
    ASANA = "asana",
    ATLASSIAN = "atlassian",
    BAMBOO = "bamboo",
    BASECAMP = "basecamp",
    CONFLUENCE = "confluence",
    DROPBOX = "dropbox",
    EVERNOTE = "evernote",
    FINDER = "finder",
    FLOWMAPP = "flowmapp",
    G_CALENDAR = "g_calendar",
    GITHUB = "github",
    GITLAB = "gitlab",
    GMAIL = "gmail",
    GOOGLE_DOCS = "google_docs",
    GOOGLE_MAPS = "google_maps",
    GOOGLE_DRIVE = "google_drive",
    GOOGLE_MEET2 = "google_meet2",
    INTERCOM = "intercom",
    JIRA = "jira",
    JIRA_CORE = "jira_core",
    JIRA_OPS = "jira_ops",
    JIRA_SERVICE_DESK = "jira_service_desk",
    KAYAKO = "kayako",
    LINEAR = "linear",
    LOOM = "loom",
    MAILCHIMP = "mailchimp",
    MS_EXCEL = "ms_excel",
    MS_ONEDRIVE = "ms_onedrive",
    MS_OUTLOOK = "ms_outlook",
    MS_POWERPOINT = "ms_powerpoint",
    MS_SHAREPOINT = "ms_sharepoint",
    MS_WORD = "ms_word",
    MS_YAMMER = "ms_yammer",
    NOTION = "notion",
    OPSGENIE = "opsgenie",
    SOURCETREE = "sourcetree",
    TEAMS = "teams",
    THINGS = "things",
    TREEHOUSE = "treehouse",
    TRELLO = "trello",
    WORKFLOWY = "workflowy",
    ZAPIER = "zapier",
    ZENDESK = "zendesk"
}
declare enum eSocialIntegrations {
    ASKFM = "askfm",
    BADOO = "badoo",
    FACEBOOK = "facebook",
    FOURSQUARE = "foursquare",
    INSTAGRAM = "instagram",
    LINKEDIN = "linkedin",
    OK = "ok",
    PATREON = "patreon",
    PINTEREST = "pinterest",
    QUORA = "quora",
    QZONE = "qzone",
    REDDIT = "reddit",
    SNAPCHAT = "snapchat",
    STACK_OVERFLOW = "stack_overflow",
    TIKTOK = "tiktok",
    TINDER = "tinder",
    TUMBLR = "tumblr",
    TWITTER = "twitter",
    VK = "vk",
    WEIBO = "weibo"
}
declare enum eVideoIntegrations {
    APPEARIN = "appearin",
    COUB = "coub",
    FLICKR = "flickr",
    IGTV = "igtv",
    NETFLIX = "netflix",
    TWITCH = "twitch",
    VIMEO = "vimeo",
    YOUTUBE = "youtube"
}

declare const UntitledIntegrationIcon: React.FC<UntitledIntegrationIconProps>;

interface UntitledPaymentMethodIconProps extends ImageBaseType {
    paymentMethod: PaymentMethodOption;
    size?: ImageSizeType;
}
type PaymentMethodOption = "Affirm" | "Alipay" | "Amazon" | "AMEX" | "ApplePay" | "Bancontact" | "Bitcoin" | "BitcoinCash" | "Bitpay" | "Citadele" | "DinersClub" | "Discover" | "Elo" | "Etherium" | "Forbrugsforeningen" | "giropay" | "GooglePay" | "Ideal" | "Interac" | "JCB" | "Klarna" | "Lightcoin" | "Maestro" | "Mastercard" | "Payoneer" | "PayPal" | "Paysafe" | "Qiwi" | "SEPA" | "ShopPay" | "Skrill" | "Sofort" | "Stripe" | "UnionPay" | "Verifone" | "Visa" | "Webmoney" | "WeChat" | "Yandex";
declare enum ePaymentMethod {
    AFFIRM = "Affirm",
    ALIPAY = "Alipay",
    AMAZON = "Amazon",
    AMEX = "AMEX",
    APPLE_PAY = "ApplePay",
    BANCONTACT = "Bancontact",
    BITCOIN = "Bitcoin",
    BITCOIN_CASH = "BitcoinCash",
    BITPAY = "Bitpay",
    CITADELE = "Citadele",
    DINERS_CLUB = "DinersClub",
    DISCOVER = "Discover",
    ELO = "Elo",
    ETHERIUM = "Etherium",
    FORBRUGSFORENINGEN = "Forbrugsforeningen",
    GIROPAY = "giropay",
    GOOGLE_PAY = "GooglePay",
    IDEAL = "Ideal",
    INTERAC = "Interac",
    JCB = "JCB",
    KLARNA = "Klarna",
    LIGHTCOIN = "Lightcoin",
    MAESTRO = "Maestro",
    MASTERCARD = "Mastercard",
    PAYONEER = "Payoneer",
    PAYPAL = "PayPal",
    PAYSAFE = "Paysafe",
    QIWI = "Qiwi",
    SEPA = "SEPA",
    SHOP_PAY = "ShopPay",
    SKRILL = "Skrill",
    SOFORT = "Sofort",
    STRIPE = "Stripe",
    UNION_PAY = "UnionPay",
    VERIFONE = "Verifone",
    VISA = "Visa",
    WEBMONEY = "Webmoney",
    WECHAT = "WeChat",
    YANDEX = "Yandex"
}
declare class UntitledPaymentMethodIconSize {
    /**
    * Small size (34x34)
    * @static
    */
    static get SM(): ImageSizeType;
    /**
    * Medium size (46x32)
    * @static
    */
    static get MD(): ImageSizeType;
    /**
    * Large size (58x40)
    * @static
    */
    static get LG(): ImageSizeType;
}

declare const UntitledPaymentMethodIcon: React.FC<UntitledPaymentMethodIconProps>;

interface UntitledSocialIconProps extends IconBaseType {
    social: SocialNetworkOptions;
    variant?: eSocialNetworkIconVariants;
}
type SocialNetworkOptions = "angellist" | "apple" | "clubhouse" | "discord" | "dribble" | "facebook" | "figma" | "github" | "google" | "instagram" | "layers" | "linkedin" | "pinterest" | "reddit" | "signal" | "snapchat" | "telegram" | "tiktok" | "tumblr" | "x-twitter" | "x-twitter" | "youtube";
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
declare enum eSocialNetworkIconVariants {
    DEFAULT = "default",
    GRAY = "gray-default",
    GRAY_HOVER = "gray-hover",
    WHITE = "white-default",
    WHITE_HOVER = "white-hover"
}

declare const UntitledSocialIcon: React.FC<UntitledSocialIconProps>;

/**
 * Type for UntitledSvgRenderer component
 * @interface
 * @extends ImageBaseType
 */
interface UntitledSvgRendererProps extends ImageBaseType {
    /**
     * [OPTIONAL] - If undefined, image size will not be altered
     */
    width?: number;
    /**
     * [OPTIONAL] - If undefined, image size will not be altered
     */
    height?: number;
}

/**
 * Renders SVG files from path url or from image module
 * @param props
 * @prop width
 * @prop height
 * @prop altText
 * @prop ariaHidden
 * @prop imgPath
 * @prop img
 */
declare const UntitledSvgRenderer: React.FC<UntitledSvgRendererProps>;

export { type AllIntegrations, FixedIconSize, HeaderLevelsByFontSize, type IconBaseType, type ImageBaseType, type ImageSizeType, type ModuleExport, type UntitleIconVariant, type UntitledColorShades, type UntitledColors, UntitledColorsList, UntitledCountryIcon, type UntitledCountryIconProps, type UntitledFontWeights, UntitledHeader, type UntitledHeaderFontSizes, type UntitledHeaderLevels, type UntitledHeaderProps, UntitledIcon, type UntitledIconProps, type UntitledIconStyles, type UntitledIconType, UntitledIntegrationIcon, type UntitledIntegrationIconProps, UntitledPaymentMethodIcon, type UntitledPaymentMethodIconProps, UntitledPaymentMethodIconSize, UntitledSocialIcon, type UntitledSocialIconProps, UntitledSvgRenderer, type UntitledSvgRendererProps, eBrowserNames, eCodingPlatforms, type eCountryAbbr, eCountryIconAssetByAbbreviation, eDesignPlatforms, eFinance, eMessengers, eMusic, eOSNames, eOtherIntegrations, ePaymentMethod, eProductivity, eSocialIntegrations, eSocialNetworkIconVariants, eSocialNetworksNames as eSocialNetworks, eVideoIntegrations, iconNamesFromFeatherIcons, isUntitledColor, isUntitledColorShades };
