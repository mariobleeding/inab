import { useMyContext } from "../context/GlobalState";

export default function Header() {
  const { value } = useMyContext();

  const myBalance = value.transactions.reduce(
    (acc, cur) => acc + Number(cur.amount),
    0
  );

  return (
    <div className="flex justify-between items-center">
      <h1 className="text-center text-3xl font-roboto underline">INABudget</h1>
      <div className="flex items-center">
        <div className="px-5">
          <h1 className="text-sm font-bold">My balance</h1>
          <h1 className="text-sm">
            Your balance is
            <span
              className={`ml-3 font-mono text-gray-900 rounded-lg p-1 text-sm ${
                myBalance > 0
                  ? "bg-green-400"
                  : myBalance < 0
                  ? "bg-red-400"
                  : "bg-gray-50"
              }`}
            >
              ${myBalance}
            </span>
          </h1>
        </div>
        <div>
          <h1 className="text-sm font-bold">My transactions</h1>
          <span className="mr-2 text-sm">{value.transactions.length}</span>
          <i className="fa-solid fa-money-bill-transfer text-sm text-stone-800"></i>
        </div>
      </div>
    </div>
  );
}
