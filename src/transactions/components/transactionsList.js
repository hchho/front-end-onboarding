import React from 'react';
import transactionsServices from './../httpServices/transactionsServices';

const TransactionsList = () => (
    <p>
        {transactionsServices.getTransactions()}
    </p>
)

export default TransactionsList