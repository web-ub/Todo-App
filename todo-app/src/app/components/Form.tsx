"use client";

import { ChangeEvent, FormEvent, useState } from "react";

interface Props {
  fetchAllTasks: () => Promise<void>;
}

const addTask = async (title: string | undefined) => {
  const res = await fetch("/api/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title }),
  });

  return res.json();
};

export const Form = (props: Props) => {
  const { fetchAllTasks } = props;

  const [title, setTitle] = useState<string>("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    await addTask(title);
    await fetchAllTasks();

    setTitle("");
  };

  return (
    <form
      className="flex flex-col items-center justify-center space-y-2"
      onSubmit={handleSubmit}
    >
      <input
        className="border focus:outline-none focus:border-blue-200 rounded p-0.5"
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setTitle(e.target.value)
        }
      />
      <button
        type="submit"
        className="bg-blue-300 rounded-md shadow-md w-30 text-gray-200 p-1"
      >
        Add Task
      </button>
    </form>
  );
};
