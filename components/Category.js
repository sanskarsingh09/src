import { useState } from "react";
import Widget from "./Widget";
import AddWidgetForm from "./AddWidgetForm";

export default function Category({ category }) {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="bg-gray-50 p-4 rounded-xl shadow mb-6">
      <h2 className="text-lg font-bold mb-3">{category.name}</h2>
      <div className="grid grid-cols-3 gap-4">
        {category.widgets.map((w) => (
          <Widget key={w.id} categoryId={category.id} widget={w} />
        ))}
      </div>
      {showForm ? (
        <AddWidgetForm categoryId={category.id} onClose={() => setShowForm(false)} />
      ) : (
        <button
          onClick={() => setShowForm(true)}
          className="mt-3 bg-green-500 text-white px-4 py-2 rounded"
        >
          + Add Widget
        </button>
      )}
    </div>
  );
}