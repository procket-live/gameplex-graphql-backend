export class OrderInput {
    order_id?: string;
    status?: string;
    payment_source?: string;
    amount?: number;
    generate_response?: string;
    success_response?: string;
    error_response?: string;
}