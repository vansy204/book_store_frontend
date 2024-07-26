import React from "react";
import { Banner } from "./components/Banner";
import Carousel from "./components/Carousel";
import List from "../product/List";


interface HomePageProps{
    searchKey: string;
}
export function HomePage({searchKey}: HomePageProps){
    return(
        <div>
            <Banner/>
            <Carousel/>
            <List searchKey={searchKey} />
        </div>
    );
}