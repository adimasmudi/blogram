import React from "react";
import Card from "../components/Card";
import Navigation from "../components/Navigation";

export default function Home() {
  return (
    <div>
      <Navigation />
      <div className="card-group mt-20 flex flex-col flex-wrap ml-8 mr-8">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
