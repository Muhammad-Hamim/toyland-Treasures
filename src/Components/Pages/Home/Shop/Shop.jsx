import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ShopCard from "./ShopCard";

const Shop = () => {
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
    <div className="px-4 md:px-40 w-full py-20">
      <Tabs>
        <TabList>
          {uniqueCategory.map((category) => {
            return <Tab>{category}</Tab>;
          })}
        </TabList>
        {uniqueCategory.map((uCategory) => {
          const matchToy = toy.filter((match) => match.category == uCategory);
          return (
            <TabPanel >
              <div className='grid md:grid-cols-3 gap-10'>
              {matchToy.map((toyCard) => {
                return <ShopCard key={toyCard._id} toy={toyCard}></ShopCard>;
              })}
              </div>
            </TabPanel>
          );
        })}
      </Tabs>
    </div>
  );
};

export default Shop;
