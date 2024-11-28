"use client";
import React from "react";
import Banner from "./Banner";
import Homecontainer from "./Homecontainer";
import Room from "./Room";
import Facilities from "./Facilities";
import Gallery from "./Gallery";
import Amenities from "./Amenities";
import SwipeCards from "./SwipeCads";
import Services from "./Services";

function Homepage() {
  return (
    <div>
      <Banner />
      <Homecontainer />
      <Room />
      <Facilities />
      <Amenities />
      <Services />
      <Gallery />
    </div>
  );
}

export default Homepage;
