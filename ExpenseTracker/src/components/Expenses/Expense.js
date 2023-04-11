import React, {useState} from 'react';
import Card from "../UI/Card";
import './Expense.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpenseslIst';
import ExpensesChart from './ExpensesChart';

const Expense = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020')

    const filterChangeHandler = selectedYear => {
      setFilteredYear(selectedYear); return
    }

    const filteredExpenses = props.items.filter(expense => {
      return expense.date.getFullYear().toString() === filteredYear;
    });

   
    
    return (
      <div>
        <Card className="expenses">
          <ExpensesFilter
            selected={filteredYear}
            onChangeFilter={filterChangeHandler}
          />
          <ExpensesChart expenses={filteredExpenses} />
          <ExpensesList  items={filteredExpenses}/>
        </Card>
      </div>
    );
  }


export default Expense