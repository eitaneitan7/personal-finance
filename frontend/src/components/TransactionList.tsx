// src/components/TransactionList.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

const TransactionList = () => {
  const [transactions, setTransactions] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const { data } = await axios.get(`http://localhost:4000/api/transactions`, {
          headers: { Authorization: `Bearer ${user?.token}` },
        });
        setTransactions(data);
      } catch (error) {
        console.error("Failed to fetch transactions", error);
      }
    };

    if (user) {
      fetchTransactions();
    }
  }, [user]);

  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Your Transactions:</h2>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>{transaction.description} - ${transaction.amount}</li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
