import React, { useEffect, useState } from "react";
import { TabView, TabPanel } from "primereact/tabview";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import ShopCard from "./ShopCard";
import { Dna } from "react-loader-spinner";

const Shop = () => {
  const [toy, setToy] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://toyland-treasures-server.vercel.app/toys"
        );
        const data = await response.json();
        setToy(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[90vh] z-50">
        <Dna
          visible={true}
          height="120"
          width="120"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      </div>
    ); // Show a loading state or spinner
  }

  const toyCategory = toy.map((category) => category.category);
  const uniqueCategory = [...new Set(toyCategory)];

  return (
    <div className="px-4 md:px-40 w-full py-20 mb-44">
      <TabView className="shadow-lg">
        {uniqueCategory.map((category) => {
          const matchToy = toy.filter((match) => match.category === category);
          return (
            <TabPanel header={category} key={category}>
              <div className="grid md:grid-cols-3 gap-10">
                {matchToy.map((toyCard) => (
                  <ShopCard key={toyCard._id} toy={toyCard} />
                ))}
              </div>
            </TabPanel>
          );
        })}
      </TabView>
    </div>
  );
};

export default Shop;
