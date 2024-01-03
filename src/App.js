import './App.css';
import Header from './components/Header/Header.jsx';
import ExpensePanel from './components/Expense-panel/ExpensePanel.jsx';
import {useState, useEffect} from 'react';

function App() {
  
  const [userExpenseState, setUserExpenseState] = useState({
    labels: [],
    data: []
  })
  

  
  if (!localStorage.getItem('userExpenseStorage')) {
    localStorage.setItem('userExpenseStorage', JSON.stringify(userExpenseState))
  }

  return (
    <div className="App">
      <Header />
      <main>
        <ExpensePanel setUserExpenseState={setUserExpenseState} userExpenseState={userExpenseState}/>
      </main>
    </div>
  );
}

export default App;
