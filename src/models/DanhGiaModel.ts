class DanhGiaModel{
    reviewId: number;
    ratePoint: number;
    comment ?: string;
    constructor(reviewId: number,
        ratePoint: number,
        comment : string,
        ){
            this.ratePoint = ratePoint;
            this.reviewId = reviewId;
            this.comment = comment;
            
        }
}
export default  DanhGiaModel;