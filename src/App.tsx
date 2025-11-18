import { useEffect, useState } from "react";
import TodoItem from "./components/todoItem";
import { Construction } from "lucide-react";

type Priority = "urgente" | "moyenne" | "basse";

type Todo = {
  id: number;
  text: string;
  priority: Priority;
};

function App() {
  const [input, setInput] = useState("");
  const [priority, setPriority] = useState<Priority>("moyenne");
  const savedTodos = localStorage.getItem("todos");
  const initialTodos = savedTodos ? JSON.parse(savedTodos) : [];
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const [filter, setFilter] = useState<Priority | "Tous">("Tous");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function addTodo() {
    try {
      if (input.trim() == "") {
        return;
      }
      const newTodo: Todo = {
        id: Date.now(),
        text: input.trim(),
        priority: priority,
      };

      const newTodos = [newTodo, ...todos];
      setTodos(newTodos);
      setInput("");
      setPriority("moyenne");
      console.log(newTodo);
    } catch (error) {
      console.error("error lors de l'ajout d'une tache", error);
    }
  }

  let filteredTodos: Todo[] = [];
  if (filter === "Tous") {
    filteredTodos = todos;
  } else {
    filteredTodos = todos.filter((todo) => todo.priority === filter);
  }

  const urgentCount = todos.filter((t) => t.priority === "urgente").length;
  const mediumCount = todos.filter((t) => t.priority === "moyenne").length;
  const lowCount = todos.filter((t) => t.priority === "basse").length;
  const totaCount = todos.length;

  function deleteTodo(id: number) {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  }

  const [selectedTodos, setSelectedTodos] = useState<Set<number>>(new Set());

  function toggleSelectTodo(id: number) {
    const newSelected = new Set(selectedTodos);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedTodos(newSelected);
  }

  return (
    <div className="flex justify-center">
      <div className="w-2/3 flex flex-col gap-4 my-15 bg-base-300 p-5 rounded-2xl">
        <div className="flex gap-4">
          <input
            className="input w-full"
            placeholder="ajouter une tache"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <select
            className="select w-full  "
            value={priority}
            onChange={(e) => setPriority(e.target.value as Priority)}
          >
            <option value="urgente">Urgente</option>
            <option value="moyenne">Moyenne</option>
            <option value="basse">Basse</option>
          </select>
          <button onClick={addTodo} className="btn btn-primary">
            Ajouter
          </button>
        </div>
        <div className="space-y-2 flex-1 h-fit">
          <div className="flex flex-wrap gap-4">
            <button
              className={`btn btn-soft ${
                filter === "Tous" ? "btn-primary" : ""
              }`}
              onClick={() => setFilter("Tous")}
            >
              Tous ({totaCount})
            </button>
            <button
              className={`btn btn-soft ${
                filter === "urgente" ? "btn-primary" : ""
              }`}
              onClick={() => setFilter("urgente")}
            >
              urgente ({urgentCount})
            </button>
            <button
              className={`btn btn-soft ${
                filter === "moyenne" ? "btn-primary" : ""
              }`}
              onClick={() => setFilter("moyenne")}
            >
              moyenne ({mediumCount})
            </button>
            <button
              className={`btn btn-soft ${
                filter === "basse" ? "btn-primary" : ""
              }`}
              onClick={() => setFilter("basse")}
            >
              basse ({lowCount})
            </button>
          </div>
          {filteredTodos.length > 0 ? (
            <ul className="divide-y divide-primary/20">
              {filteredTodos.map((todo) => (
                <li key={todo.id}>
                  <TodoItem
                    todo={todo}
                    isSelected={selectedTodos.has(todo.id)}
                    onDelete={() => deleteTodo(todo.id)}
                    onToggleSelect={toggleSelectTodo}
                  />
                </li>
              ))}
            </ul>
          ) : (
            <div className="flex justify-center items-center flex-col p-5">
              <div>
                <Construction
                  strokeWidth={1}
                  className="w-40 h-40 text-primary"
                />
                <p className="text-sm">Aucune tache pour ce filtre</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
