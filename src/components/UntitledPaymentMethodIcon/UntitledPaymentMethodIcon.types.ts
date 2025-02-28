import { IconBaseType, ImageSizeType } from "../../types";

export interface UntitledPaymentMethodIconProps extends IconBaseType {
    paymentMethod: PaymentMethodOption;
    size?: ImageSizeType;
}

export type PaymentMethodOption = 
    "Affirm" |
    "Alipay" |
    "Amazon" |
    "AMEX" |
    "ApplePay" |
    "Bancontact" |
    "Bitcoin" |
    "BitcoinCash" |
    "Bitpay" |
    "Citadele" |
    "DinersClub" |
    "Discover" |
    "Elo" |
    "Etherium" |
    "Forbrugsforeningen" |
    "giropay" |
    "GooglePay" |
    "Ideal" |
    "Interac" |
    "JCB" |
    "Klarna" |
    "Lightcoin" |
    "Maestro" |
    "Mastercard" |
    "Payoneer" |
    "PayPal" |
    "Paysafe" |
    "Qiwi" |
    "SEPA" |
    "ShopPay" |
    "Skrill" |
    "Sofort" |
    "Stripe" |
    "UnionPay" |
    "Verifone" |
    "Visa" |
    "Webmoney" |
    "WeChat" |
    "Yandex"
 ;

export enum ePaymentMethod {
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

export class UntitledPaymentMethodIconSize {
     /**
     * Small size (34x34)
     * @static
     */
    static get SM () : ImageSizeType {
        return { width: 34, height: 24 };
    }

     /**
     * Medium size (46x32)
     * @static
     */
    static get MD () : ImageSizeType {
        return { width: 46, height: 32 };
    }

     /**
     * Large size (58x40)
     * @static
     */
    static get LG () : ImageSizeType {
        return { width: 58, height: 40 };
    }
}
