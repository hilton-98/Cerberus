"use client";

import { useEffect, useState } from 'react';

export default function Expenses() {
    const [expenses, setExpenses] = useState([]);

   const loadExpenses: () => Promise<void> = async () => {
      try {
         const response = await fetch('http://localhost:8080/api/expenses');
         const responseJson = await response.json();
         setExpenses(responseJson);
      } catch (e) {
         console.log(e);
      }
   }

    useEffect(() => {
      loadExpenses();
    }, []);

    return (
        <div>
            <h1>Expenses</h1>
            <ul>
                {expenses.map((expense, index) => (
                    <li key={index}>{expense}</li>
                ))}
            </ul>
        </div>
    );
}