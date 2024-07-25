import React from "react";
import { PictureModel } from "../models/PictureModel";
import { my_request } from "./Request";


export async function getPictureofBook(endpoint: string): Promise<PictureModel[]> {
    const result: PictureModel[] = [];
    

    // goi request
    const response = await my_request(endpoint);
    // lay ra json book
    const responseData = response._embedded.pictures;
    for (const key in responseData) {
        result.push({
            pictureId: responseData[key].pictureId,
            pictureName: responseData[key].pictureName,
            isIcon: responseData[key].isIcon,
            pictureLink: responseData[key].pictureLink,
            pictureData: responseData[key].pictureData
        })
    }
    return result;
}

export async function getAllPicture(bookId: number): Promise<PictureModel[]> {
   // xac dinh endpoint
   const endpoint: string = `http://localhost:8080/book/${bookId}/pictures`;
   return getPictureofBook(endpoint);
}
export async function getFirtPictureOfBook(bookId: number): Promise<PictureModel[]> {
    // xac dinh endpoint
    const endpoint: string = `http://localhost:8080/book/${bookId}/pictures?sort=pictureId,asc&page=0&size=1`;
    return getPictureofBook(endpoint);
 }

