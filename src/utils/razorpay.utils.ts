import { Order } from "../module/order/order.entity";

const Razorpay = require('razorpay');
const HmacSHA256 = require('crypto-js');

export interface RazorpayResponse {
    razorpay_payment_id: string;
    razorpay_order_id: string;
    razorpay_signature: string;
    code: number;
}

export function GetRazorpayOrder(amount: number, orderRecord: Order): Promise<{ success: boolean; razorpayOrder?: any }> {
    return new Promise((resolve) => {
        const options = {
            amount: amount * 100,
            currency: "INR",
            receipt: String(orderRecord.id),
            payment_capture: '0'
        };

        const instance = GetRazorpayInstance();
        instance.order.create(options, (err, razorpayOrder) => {
            if (err) {
                resolve({ success: false })
            }

            resolve({ success: true, razorpayOrder })
        })
    })
}

function GetRazorpayInstance() {
    return new Razorpay({
        key_id: process.env.RAZORPAY_ID,
        key_secret: process.env.RAZORPAY_SECRET
    })
}

export function GenerateRazorpaySignature(razorpayOrderId: string, razorpayPaymentId: string) {
    return HmacSHA256(razorpayOrderId + "|" + razorpayPaymentId, process.env.RAZORPAY_SECRET);
}
