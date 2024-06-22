'use client';

import { useEffect, useState } from 'react';
import styles from './expenses.module.scss';

export default function Expenses() {
  const [expenses, setExpenses] = useState([]);

  const phrases = {
    header: 'Expenses',
  };

  const loadExpenses: () => Promise<void> = async () => {
    try {
      const response = await fetch('http://localhost:8080/expenses');
      const responseJson = await response.json();
      setExpenses(responseJson);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    loadExpenses();
  }, []);

  return (
    <div className={styles['container']}>
      <h1 className={styles['header']}>{phrases.header}</h1>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>{expense}</li>
        ))}
      </ul>
    </div>
  );
}
