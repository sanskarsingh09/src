import { X } from "lucide-react";
import { useDispatch } from "react-redux";
import { removeWidget } from "../store/dashboardSlice";

export default function Widget({ categoryId, widget }) {
  const dispatch = useDispatch();

  return (
    <div className="p-4 bg-white rounded-2xl shadow-md relative">
      <h3 className="font-bold">{widget.name}</h3>
      <p className="text-sm">{widget.text}</p>
      <button
        onClick={() => dispatch(removeWidget({ categoryId, widgetId: widget.id }))}
        className="absolute top-2 right-2 text-red-500"
      >
        <X size={18} />
      </button>
    </div>
  );
}