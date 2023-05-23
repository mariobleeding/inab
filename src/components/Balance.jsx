import { useMyContext } from "../context/GlobalState";

export default function Balance() {
  const { value } = useMyContext();
  const myBalance = value.transactions.reduce(
    (acc, cur) => acc + Number(cur.amount),
    0
  );
  return (
    <div className="py-5">
      <h1 className="my-3 text-lg font-bold">My balance</h1>
      <h1>
        Your balance is
        <span
          className={
            myBalance > 0
              ? "text-green-500 pl-1"
              : myBalance < 0
              ? "text-red-500 pl-1"
              : "text-gray-500 pl-1"
          }
        >
          {myBalance}
        </span>
      </h1>
    </div>
  );
}
