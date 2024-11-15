import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout";
import { BASIC_URL_TODOS } from "../../constan/utils/constant";

function Home() {
  const [todos, setTodos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(BASIC_URL_TODOS)
      .then((response) => {
        setTodos(response.data.slice(0, 10));
      })
      .catch((error) => console.error(error));
  }, []);

  function handleDelete(id) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this item?"
    );

    if (!confirmed) return;

    axios
      .delete(`${BASIC_URL_TODOS}/${id}`)
      .then(() => {
        setTodos(todos.filter((todo) => todo.id !== id));
        alert("Todo deleted successfully!");
      })
      .catch((error) => console.error("Failed to delete todo:", error));
  }

  function handleEdit(id) {
    navigate(`/todo/edit/${id}`);
  }

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-center mb-6">List Of Todos</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">Title</th>
                <th className="py-3 px-6 text-center">Completed</th>
                <th className="py-3 px-6 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 text-sm font-light">
              {todos.map((todo) => (
                <tr
                  key={todo.id}
                  className="border-b border-gray-200 hover:bg-gray-100"
                >
                  <td className="py-3 px-6 text-left whitespace-nowrap">
                    {todo.title}
                  </td>
                  <td className="py-3 px-6 text-center">
                    {todo.completed ? "Completed" : "Not Completed"}
                  </td>
                  <td className="py-3 px-6 text-center flex justify-center gap-2">
                    <button
                      onClick={() => handleEdit(todo.id)}
                      className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-150"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(todo.id)}
                      className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75 transition duration-150"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
