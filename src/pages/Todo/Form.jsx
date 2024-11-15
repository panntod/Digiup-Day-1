import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Layout from "../../components/Layout";
import { BASIC_URL_TODOS } from "../../constan/utils/constant";

const TodoForm = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [completed, setCompleted] = useState("");
  const [userId] = useState(1);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${BASIC_URL_TODOS}/${id}`)
      .then((response) => {
        const { title, completed } = response.data;
        setTitle(title);
        setCompleted(completed);
      })
      .catch((error) => console.error("Error fetching todo:", error))
      .finally(() => setLoading(false));
  }, [id]);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!title) {
      setMessage("Please fill in both title and body.");
      return;
    }

    setLoading(true);

    try {
      const url = `${BASIC_URL_TODOS}/${id || ""}`;
      const method = id ? "put" : "post";
      const data = { id, title, completed, userId };

      const response = await axios({
        method,
        url,
        data,
        headers: { "Content-Type": "application/json; charset=UTF-8" },
      });

      console.log(response.data);

      setMessage(
        id ? "Todo updated successfully!" : "Todo added successfully!"
      );

      setTimeout(() => {
        window.location.href = "/todo";
      }, 1000);
    } catch (error) {
      console.error("Error:", error);
      setMessage(id ? "Failed to update todo." : "Failed to add todo.");
    } finally {
      setLoading(false);
    }
  }

  function handleInputChange() {
    setMessage("");
  }

  return (
    <Layout>
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg space-y-4"
      >
        {message && (
          <div
            className={`text-center mt-4 p-2 rounded-lg ${
              message.includes("successfully")
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {message}
          </div>
        )}

        {loading && <div className="text-blue-500 text-center">Loading...</div>}

        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Todo Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              handleInputChange();
            }}
            placeholder="Enter your todo title"
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="flex items-center space-x-3">
          <input
            id="completed"
            type="checkbox"
            checked={completed}
            onChange={(e) => {
              setCompleted(e.target.checked);
              handleInputChange();
            }}
            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-400"
          />
          <label
            htmlFor="completed"
            className="text-sm font-medium text-gray-700"
          >
            Completed
          </label>
        </div>

        <button
          type="submit"
          className="w-full px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          {id ? "Update" : "Add"} Todo
        </button>
      </form>
    </Layout>
  );
};

export default TodoForm;
