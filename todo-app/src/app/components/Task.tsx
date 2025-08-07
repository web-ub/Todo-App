export const Task = () => {
  return (
    <div className="flex justify-between w-80 bg-blue-100 box-border border-l-5 border-l-blue-500 p-2 rounded shadow-md">
      <div>散歩</div>
      <div className="space-x-2">
        <span className="text-green-400">Edit</span>
        <span className="text-red-400">Delete</span>
      </div>
    </div>
  );
};
