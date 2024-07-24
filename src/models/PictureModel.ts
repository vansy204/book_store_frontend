import React from "react";

export class PictureModel {
    pictureId: number;
    pictureName?: string;
    isIcon?: boolean;
    pictureLink?: string;
    pictureData?: string;

    constructor(
        pictureId: number,
        pictureName?: string,
        isIcon?: boolean,
        pictureLink?: string,
        pictureData?: string,
    ) {
        this.pictureId = pictureId;
        this.pictureName = pictureName;
        this.isIcon = isIcon;
        this.pictureLink = pictureLink;
        this.pictureData = pictureData;
    }
}