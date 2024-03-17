export interface PaymentRequestItem {
    name: string;
    quantity: number;
    price: number;
}

export interface CreatePaymentLinkRequest {
    orderCode: number;
    amount: number;
    description: string;
    buyerName?: string;
    buyerEmail?: string;
    buyerPhone?: string;
    buyerAddress?: string;
    items?: PaymentRequestItem[];
    cancelUrl: string;
    returnUrl: string;
    expiredAt?: number;
    signature: string;
}

export interface PaymentResponseData {
    bin: string;
    accountNumber: string;
    accountName: string;
    amount: number;
    description: string;
    orderCode: number;
    currency: string;
    paymentLinkId: string;
    status: string;
    checkoutUrl: string;
    qrCode: string;
}

export interface CreatePaymentLinkResponse {
    code: string;
    desc: string;
    data: PaymentResponseData;
    signature: string;
}