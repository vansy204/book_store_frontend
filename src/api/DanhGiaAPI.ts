// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from "react";


import { my_request } from "./Request";
import DanhGiaModel from "../models/DanhGiaModel";


export async function getRatingsofBook(endpoint: string): Promise<DanhGiaModel[]> {
    const result: DanhGiaModel[] = [];
    const response = await my_request(endpoint);
    const responseData = response._embedded.reviews;
    for(const key in responseData){
        result.push({
            reviewId: responseData[key].reviewId,
            ratePoint: responseData[key].ratePoint,
            comment: responseData[key].comment
        
        });
    }
    return result
}

export async function getAllRatings(bookId: number): Promise<DanhGiaModel[]> {
   // xac dinh endpoint
   const endpoint: string = `http://localhost:8080/book/${bookId}/reviewLists`;
   return getRatingsofBook(endpoint);
}
export async function getFirtRatingsOfBook(bookId: number): Promise<DanhGiaModel[]> {
    // xac dinh endpoint
    const endpoint: string = `http://localhost:8080/book/${bookId}/reviewLists?sort=RatingsId,asc&page=0&size=1`;
    return getRatingsofBook(endpoint);
 }

