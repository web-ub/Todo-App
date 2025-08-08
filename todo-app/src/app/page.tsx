"use client";

import { useEffect, useState } from 'react';

import { Form } from './components/Form';
import { Tasks } from './components/Tasks';
import { TaskType } from '@/types/type';

export default function Home() {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  const fetchAllTasks = async () => {
    const res = await fetch("api/tasks", { cache: "no-store" });
    const data = await res.json();

    setTasks(data);
  };

  useEffect(() => {
    fetchAllTasks();
  }, []);

  return (
    <main className="flex flex-col h-screen items-center justify-center bg-gray-200 space-y-3 text-gray-700">
      <div className="text-4xl font-bold">Todo App</div>
      <div className="flex flex-col items-center justify-center bg-white rounded shadow-md p-2 space-y-3">
        <Form fetchAllTasks={fetchAllTasks} />
        <Tasks tasks={tasks} fetchAllTasks={fetchAllTasks} />
      </div>
    </main>
  );
}
