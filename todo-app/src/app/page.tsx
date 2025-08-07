import { Form } from "./components/Form";
import { Tasks } from "./components/Tasks";

export default function Home() {
  return (
    <main className="flex flex-col h-screen items-center justify-center bg-gray-200 space-y-3 text-gray-700">
      <div className="text-4xl font-bold">Todo App</div>
      <div className="flex flex-col items-center justify-center bg-white rounded shadow-md p-2 space-y-3">
        <Form />
        <Tasks />
      </div>
    </main>
  );
}
