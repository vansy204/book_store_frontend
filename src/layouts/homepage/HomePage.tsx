import React from "react";
import { Banner } from "./components/Banner";
import { Caousel } from "./components/Carousel";
import List from "../product/List";

export function HomePage(){
    return(
        <div>
            <Banner/>
            <Caousel/>
            <List />
        </div>
    );
}