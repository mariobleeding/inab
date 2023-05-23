import { useMyContext } from "../../context/GlobalState";
import { useState } from "react";

export default function TransactionForm() {
  const { addTransaction } = useMyContext();

  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();
    addTransaction({ id: window.crypto.randomUUID(), description, amount });
  };

  return (
    <div className="py-5 md:col-span-1">
      <h1 className="my-3 text-lg font-bold">Add transaction</h1>
      <form onSubmit={onSubmit} className="flex flex-col">
        <input
          type="text"
          placeholder="Enter a description"
          onChange={(e) => setDescription(e.target.value)}
          className="bg-stone-100 p-2 rounded-md m-1 text-sm w-full"
        />
        <input
          type="number"
          placeholder="$00.00"
          onChange={(e) => setAmount(e.target.value)}
          className="bg-stone-100 p-2 rounded-md m-1 text-sm w-full"
        />
        <button className="p-2 my-3 text-sm bg-blue-500 text-white rounded-sm h-8 mx-1 items-center text-center w-full">
          <i className="fa-solid fa-plus"></i>
        </button>
      </form>
    </div>
  );
}
