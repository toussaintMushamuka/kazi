import { Trash } from "lucide-react";

type Priority = "urgente" | "moyenne" | "basse";

type Todo = {
  id: number;
  text: string;
  priority: Priority;
};

type Props = {
  todo: Todo;
  onDelete: () => void;
  isSelected: boolean;
  onToggleSelect: (id: number) => void;
};

export default function TodoItem({
  todo,
  onDelete,
  isSelected,
  onToggleSelect,
}: Props) {
  return (
    <li className="p-3 ">
      <div className="flex justify-between items-center">
        <div className="flex item-center gap-2">
          <input
            type="checkbox"
            className="checkbox checkbox-primary checkbox-sm"
            checked={isSelected}
            onChange={() => onToggleSelect(todo.id)}
          />
          <span className="text-md font-bold">
            <span>{todo.text}</span>
          </span>
          <span
            className={`badge badge-sm badge-soft ${
              todo.priority == "urgente"
                ? "badge-error"
                : todo.priority === "moyenne"
                ? "badge-warning"
                : "badge-success"
            }`}
          >
            {todo.priority}
          </span>
        </div>
        <button className="btn btn-sm btn-error btn-soft" onClick={onDelete}>
          <Trash className="w-4 h-4" />
        </button>
      </div>
    </li>
  );
}
