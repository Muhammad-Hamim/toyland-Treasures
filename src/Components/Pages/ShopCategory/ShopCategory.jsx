import React, { useEffect, useState } from "react";
import { TabView, TabPanel } from "primereact/tabview";
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";

//core
import "primereact/resources/primereact.min.css";
import ShopCard from "../Home/Shop/ShopCard";

const ShopCategory = () => {
  const [toy, setToy] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/toys")
      .then((res) => res.json())
      .then((data) => {
        setToy(data);
      });
  }, []);
  const toyCategory = toy.map((category) => category.category);
  const uniqueCategory = [...new Set(toyCategory)];
  return (
    <div className="px-4 md:px-40 w-full py-20 mb-44">
      <TabView>
        {uniqueCategory.map((category) => {
          const matchToy = toy.filter((match) => match.category == category);
          return (
            <TabPanel header={category}>
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

export default ShopCategory;
