// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from "react";

export async function my_request(enpoint: string) {
    // truy van den duong dan
    const response = await fetch(enpoint);
    // neu co loi
    if(!response.ok){
        throw new Error(`can not access ${enpoint}`)
    }
    // neu khong loi
    return response.json();
}