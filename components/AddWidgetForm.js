import { useState } from "react";
import { useDispatch } from "react-redux";
import { addWidget } from "../store/dashboardSlice";
import { v4 as uuidv4 } from "uuid";

export default function AddWidgetForm({ categoryId, onClose }) {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addWidget({
        categoryId,
        widget: { id: uuidv4(), name, text }
      })
    );
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-gray-100 rounded-lg space-y-2">
      <input
        type="text"
        placeholder="Widget Name"
        className="w-full p-2 border rounded"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <textarea
        placeholder="Widget Text"
        className="w-full p-2 border rounded"
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Add Widget
      </button>
    </form>
  );
}