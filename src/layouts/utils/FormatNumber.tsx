import { isUndefined } from "util";

function formatNumber(x: number | undefined){
    if(x === undefined){
        return 0;
    }
    if(isNaN(x)){
        return 0;
    }
    // su dung ham toLocalString de dinh dang so
    return x.toLocaleString("vi-VN");
}
export default formatNumber;