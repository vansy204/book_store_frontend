import React from "react";
import { Banner } from "./components/Banner";
import Carousel from "./components/Carousel";
import List from "../product/List";
import { useParams } from "react-router-dom";
import { error } from "console";


interface HomePageProps{
    searchKey: string;
}
export function HomePage({searchKey}: HomePageProps){

    const {categoryId} = useParams();
    let categoryIdNumber = 0;
    try{
        categoryIdNumber = parseInt(categoryId+"")
    }catch{
        categoryIdNumber = 0;
    }
    if(Number.isNaN(categoryId)){
        categoryIdNumber = 0;
    }
    return(
        <div>
            <Banner/>
            <Carousel/>
            <List searchKey={searchKey} categoryId={categoryIdNumber} />
        </div>
    );
}