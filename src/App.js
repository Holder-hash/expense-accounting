import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header.jsx';
import ExpensePanel from './components/Expense-panel/ExpensePanel.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
      <ExpensePanel />
      </main>
    </div>
  );
}

export default App;
