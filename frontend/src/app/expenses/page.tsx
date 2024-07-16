'use client';

import { useEffect, useState } from 'react';
import styles from './expenses.module.scss';
import { Container } from '@/ts/lib/typedi/container';
import { ExpenseService } from '@/ts/lib/server/expenseService';

const phrases = {
  header: 'Expenses',
} as const;

export default function Expenses() {
  const [expenses, setExpenses] = useState([]);

  const loadExpenses: () => Promise<void> = async () => {
    try {
      const expenseService = Container.get(ExpenseService);
      setExpenses(await expenseService.getExpenses());
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    console.log('Loading expenses');
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
