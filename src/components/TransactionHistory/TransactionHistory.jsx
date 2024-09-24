import React from "react";
import styles from "./TransactionHistory.module.css";

const TransactionHistory = ({ transactions }) => {
  return (
    <table className={styles.table}>
      <thead className={styles.head}>
        <tr>
          <th className={styles.title}>Type</th>
          <th className={styles.title}>Amount</th>
          <th className={styles.title}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map((transactions) => (
          <tr key={transactions.id}>
            <td className={styles.body}>{transactions.type}</td>
            <td className={styles.body}>{transactions.amount}</td>
            <td className={styles.body}>{transactions.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
