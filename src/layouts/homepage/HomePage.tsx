import React from "react";
import { Banner } from "./components/Banner";
import Carousel from "./components/Carousel";
import List from "../product/List";

export function HomePage(){
    return(
        <div>
            <Banner/>
            <Carousel/>
            <List />
        </div>
    );
}