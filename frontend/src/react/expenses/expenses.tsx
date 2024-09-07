'use client';

import { useEffect, useState } from 'react';

import { Container } from '@/ts/lib/typedi/container';
import { ExpenseService } from '@/ts/server/expenseService';

import styles from './expenses.module.scss';

const css = {
  container: styles['container'],
  header: styles['header'],
} as const;

const phrases = {
  header: 'Expenses',
} as const;

export function ExpensesComponent() {
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
    loadExpenses();
  }, []);

  return (
    <div className={css.container}>
      <h1 className={css.header}>{phrases.header}</h1>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>{expense}</li>
        ))}
      </ul>
    </div>
  );
}
