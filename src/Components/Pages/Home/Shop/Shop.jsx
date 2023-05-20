import React, { useEffect, useState } from "react";
import { TabView, TabPanel } from "primereact/tabview";
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";

//core
import "primereact/resources/primereact.min.css";
import ShopCard from "./ShopCard";

const Shop = () => {
  const [toy, setToy] = useState([]);
  useEffect(() => {
    fetch("https://toyland-treasures-server.vercel.app/toys")
      .then((res) => res.json())
      .then((data) => {
        setToy(data);
      });
  }, []);
  const toyCategory = toy.map((category) => category.category);
  const uniqueCategory = [...new Set(toyCategory)];
  return (
    <div className="px-4 md:px-40 w-full py-20 mb-44">
      <TabView className="shadow-lg">
        {uniqueCategory.map((category) => {
          const matchToy = toy.filter((match) => match.category == category);
          return (
            <TabPanel header={category} >
              <div className="grid md:grid-cols-3 gap-10">
                {matchToy.map((toyCard) => {
                  return <ShopCard key={toyCard._id} toy={toyCard}></ShopCard>;
                })}
              </div>
            </TabPanel>
          );
        })}
      </TabView>
    </div>
  );
};

export default Shop;
