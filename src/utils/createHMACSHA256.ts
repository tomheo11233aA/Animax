import { HmacSHA256 } from "crypto-js";

export interface HMAC256Data {
    [key: string]: string;
}

export const generateHMACSHA256 = (data: HMAC256Data, key: string): string => {
    const sortedKeys = Object.keys(data).sort();
    const sortedData = sortedKeys.map(key => `${key}=${data[key]}`).join('&');
    const hmac = HmacSHA256(sortedData, key).toString();
    return hmac;
};