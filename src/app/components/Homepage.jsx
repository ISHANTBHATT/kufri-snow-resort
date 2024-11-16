"use client";
import React from "react";
import Banner from "./Banner";
import Homecontainer from "./Homecontainer";
import Room from "./Room";
import Facilities from "./Facilities";
import Gallery from "./Gallery";
import Amenities from "./Amenities";
import SwipeCards from "./SwipeCads";

function Homepage() {
  return (
    <div>
      <Banner />
      <Homecontainer />
      <Room />
      <Facilities />
      <Amenities />
      <Gallery />
      {/* <SwipeCards /> */}
    </div>
  );
}

export default Homepage;
