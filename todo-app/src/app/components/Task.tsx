import { ChangeEvent, useState } from "react";

interface Props {
  id: string;
  title: string;
  fetchAllTasks: () => Promise<void>;
}

const updateTask = async (id: string, newTitle: string | undefined) => {
  const res = await fetch(`/api/tasks${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ newTitle }),
  });

  return res.json();
};

export const Task = (props: Props) => {
  const { id, title, fetchAllTasks } = props;

  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editedTitle, setEditedTitle] = useState<string | undefined>("");

  const handleEdit = () => {
    setIsEditing(true);
    setEditedTitle(title);
  };

  const handleSave = async () => {
    setIsEditing(false);

    await updateTask(id, editedTitle);
    await fetchAllTasks();
  };

  return (
    <div className="flex justify-between w-80 bg-blue-100 box-border border-l-5 border-l-blue-500 p-2 rounded shadow-md">
      {isEditing ? (
        <input
          className="w-52 border focus:outline-none focus:border-blue-200 rounded"
          type="text"
          value={editedTitle}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setEditedTitle(e.target.value)
          }
        />
      ) : (
        <div>{title}</div>
      )}
      <div className="space-x-2">
        {isEditing ? (
          <span className="text-blue-400" onClick={handleSave}>
            Save
          </span>
        ) : (
          <span className="text-green-400" onClick={handleEdit}>
            Edit
          </span>
        )}
        <span className="text-red-400">Delete</span>
      </div>
    </div>
  );
};
