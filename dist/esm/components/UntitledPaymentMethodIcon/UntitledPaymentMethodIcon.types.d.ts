import { ImageBaseType, ImageSizeType } from "../../types";
export interface UntitledPaymentMethodIconProps extends ImageBaseType {
    paymentMethod: ePaymentMethod;
    size?: ImageSizeType;
}
export declare enum ePaymentMethod {
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
export declare class UntitledPaymentMethodIconSize {
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
