import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const fetchTrendingData = async () => {
  const response = await axios.get("https://websim.ai/api/trending");
  return response.data;
};

const WebsimHub = () => {
  const { data, error, isLoading } = useQuery(["trendingData"], fetchTrendingData);

  if (isLoading) return <div className="flex justify-center items-center h-screen">Loading...</div>;
  if (error) return <div className="flex justify-center items-center h-screen">Error fetching data</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Trending Data</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((item: any, index: number) => (
          <div key={index} className="p-4 border rounded shadow">
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WebsimHub;