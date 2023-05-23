import { useMyContext } from "../../context/GlobalState";

export default function Balance() {
  const { value, deleteTransaction } = useMyContext();

  const transactions = value.transactions;

  const incomeTransactions = transactions.filter((t) => t.amount > 0);
  const incomeTransactionsBalance = incomeTransactions.reduce(
    (acc, cur) => acc + Number(cur.amount),
    0
  );

  const expenseTransactions = transactions.filter((t) => t.amount < 0);
  const expenseTransactionsBalance = expenseTransactions.reduce(
    (acc, cur) => acc + Number(cur.amount),
    0
  );

  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 py-5">
      <div>
        <h1 className="my-3 text-lg font-bold">All Transactions</h1>
        {transactions.map((transaction) => (
          <div
            className="flex hover:bg-stone-100 border-stone-700 border-2 p-3 my-2 rounded-lg items-center justify-between"
            key={transaction.id}
          >
            <div className="flex items-center">
              <h1 className="">{transaction.description}</h1>
            </div>

            <div className="mx-1 flex items-center">
              <h1
                className={`:mr-3 mr-1 font-mono text-gray-900 rounded-lg p-2 ${
                  transaction.amount < 0 ? "bg-red-400" : "bg-green-500"
                }`}
              >
                ${transaction.amount}
              </h1>
              <button
                className="p-2 rounded-full text-xl text-stone-900"
                onClick={() => deleteTransaction(transaction.id)}
              >
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
      <div>
        <h1 className="my-3 text-lg font-bold">
          Income{" "}
          <span className="ml-3 font-mono text-gray-900 rounded-lg p-1 text-sm">
            ${incomeTransactionsBalance}
          </span>
        </h1>
        {incomeTransactions.map((transaction) => (
          <div
            className="flex hover:bg-stone-100 border-stone-700 border-2 p-3 my-2 rounded-lg items-center justify-between"
            key={transaction.id}
          >
            <div className="flex items-center">
              <h1 className="">{transaction.description}</h1>
            </div>

            <div className="mx-1 flex items-center">
              <h1
                className={`:mr-3 mr-1 font-mono text-gray-900 rounded-lg p-2 ${
                  transaction.amount < 0 ? "bg-red-400" : "bg-green-500"
                }`}
              >
                ${transaction.amount}
              </h1>
            </div>
          </div>
        ))}
      </div>
      <div>
        <h1 className="my-3 text-lg font-bold">
          Expenses{" "}
          <span className="ml-3 font-mono text-gray-900 rounded-lg p-1 text-sm">
            ${expenseTransactionsBalance}
          </span>
        </h1>
        {expenseTransactions.map((transaction) => (
          <div
            className="flex hover:bg-stone-100 border-stone-700 border-2 p-3 my-2 rounded-lg items-center justify-between"
            key={transaction.id}
          >
            <div className="flex items-center">
              <h1 className="">{transaction.description}</h1>
            </div>

            <div className="mx-1 flex items-center">
              <h1
                className={`:mr-3 mr-1 font-mono text-gray-900 rounded-lg p-2 ${
                  transaction.amount < 0 ? "bg-red-400" : "bg-green-500"
                }`}
              >
                ${transaction.amount}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
