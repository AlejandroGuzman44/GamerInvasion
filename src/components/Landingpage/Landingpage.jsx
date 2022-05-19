import React from "react";
import { Category } from "./Category";
import { Feature } from "./Feature/Feature";
import { SiteInfo } from "./SiteInfo/SiteInfo";
import Slides from "./Slides/Slides";

export const Landingpage = () => {
  return (
    <div>
        <Slides/>
        <Feature/>
        <Category/>
    </div>
  );
};
