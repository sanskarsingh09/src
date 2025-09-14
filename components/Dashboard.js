import { useSelector } from "react-redux";
import Category from "./Category";
import SearchBar from "./SearchBar";
import { useState } from "react";

export default function Dashboard() {
  const categories = useSelector((state) => state.dashboard.categories);
  const [query, setQuery] = useState("");

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <SearchBar query={query} setQuery={setQuery} />
      {categories.map((cat) => {
        const filteredWidgets = cat.widgets.filter((w) =>
          w.name.toLowerCase().includes(query.toLowerCase())
        );
        return (
          <Category key={cat.id} category={{ ...cat, widgets: filteredWidgets }} />
        );
      })}
    </div>
  );
}