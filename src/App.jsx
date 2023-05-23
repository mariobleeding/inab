import CalendarGrid from "./components/Calendar";
import Header from "./components/Header";
import TransactionChart from "./components/transactions/TransactionChart";
import TransactionForm from "./components/transactions/TransactionForm";
import TransactionList from "./components/transactions/TransactionList";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <div className="py-8 font-inter md:px-5 px-5">
      <GlobalProvider>
        <Header />
        <div className="grid grid-cols-1 md:grid-cols-4">
          <TransactionForm />
          <TransactionChart />
          <CalendarGrid />
        </div>
        <TransactionList />
      </GlobalProvider>
    </div>
  );
}

export default App;
