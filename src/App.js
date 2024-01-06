import './App.css';
import Header from './components/Header/Header.jsx';
import ExpensePanel from './components/Expense-panel/ExpensePanel.jsx';

function App() {
  
  if (!localStorage.getItem('userExpenseStorage')) {
    localStorage.setItem('userExpenseStorage', JSON.stringify({
      labels: [],
      data: [],
      background: []
    }))
  }

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
