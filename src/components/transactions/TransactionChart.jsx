import { VictoryLabel, VictoryPie } from "victory";
import { useMyContext } from "../../context/GlobalState";

export default function TransactionChart() {
  const { value } = useMyContext();
  const total = value.transactions.reduce(
    (acc, transaction) => (acc += Math.abs(Number(transaction.amount))),
    0
  );

  const totalIncome = value.transactions
    .filter((el) => Number(el.amount) > 0)
    .reduce(
      (acc, transaction) => (acc += Math.abs(Number(transaction.amount))),
      0
    );

  const totalExpenses = value.transactions
    .filter((el) => Number(el.amount) < 0)
    .reduce(
      (acc, transaction) => (acc += Math.abs(Number(transaction.amount))),
      0
    );

  return (
    <div className="py-8 px-10 md:col-span-2 col-span-1">
      <h1 className="my-3 text-lg font-bold">Chart</h1>
      <div style={{ maxWidth: "500px", margin: "0 auto" }}>
        <VictoryPie
          colorScale={["#F87171", "#22C55E"]}
          animate={{ duration: 1500 }}
          data={[
            { x: "Expenses", y: (totalExpenses * 100) / total },
            { x: "Income", y: (totalIncome * 100) / total },
          ]}
          labelComponent={
            <VictoryLabel
              labelRadius={({ innerRadius }) => innerRadius / 1}
              angle={1}
              style={{
                fill: "black",
                fontSize: "24px",
                fontWeight: "bold",
                fontFamily: "Inter",
              }}
            />
          }
          width={700}
          padAngle={5}
          innerRadius={100}
          height={600}
          padding={{ top: 40, bottom: 40, left: 60, right: 60 }}
        />
      </div>
    </div>
  );
}
