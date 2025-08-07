export const Form = () => {
  return (
    <form className="flex flex-col items-center justify-center space-y-2">
      <input
        type="text"
        className="border focus:outline-none focus:border-blue-200 rounded p-0.5"
      />
      <button type="submit" className="bg-blue-300 rounded-md shadow-md w-30 text-gray-200 p-1">
        Add Task
      </button>
    </form>
  );
};
