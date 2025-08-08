"use client";

import { task } from "@prisma/client";

import { Task } from "./Task";
import { TaskType } from "@/types/type";

interface Props {
  tasks: TaskType[];
  fetchAllTasks: () => Promise<void>;
}

export const Tasks = (props: Props) => {
  const { tasks, fetchAllTasks } = props;

  return (
    <div className="flex flex-col space-y-2">
      {tasks.map((task: task) => (
        <Task key={task.id} id={task.id} title={task.title} fetchAllTasks={fetchAllTasks} />
      ))}
    </div>
  );
};
