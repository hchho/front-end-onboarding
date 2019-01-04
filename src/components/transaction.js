import React from 'react';
import PropTypes from 'prop-types';

const Transaction = ({ info }) => (
    <div id={info.transactionId}>
        <p>
            Account ID: { info.accountId }
        </p>
        <p>
            Transaction date: { info.transactionDate }
        </p>
        <p>
            Description: { info.desc }
        </p>
        <p>
            Amount: { info.amount }
        </p>
        <p>
            Withdrawal: { info.withdrawal }
        </p>
        <p>
            Deposit: { info.deposit }
        </p>
        <p>
            Running balance: { info.runningBalance }
        </p>
        <p>
            Category: { info.category }
        </p>
        <p>
            Transaction ID: { info.transactionId }
        </p>
    </div>
)

Transaction.propTypes = {
    info: PropTypes.shape({
        accountId: PropTypes.string.isRequired,
        transactionDate: PropTypes.string.isRequired,
        desc: PropTypes.string,
        amount: PropTypes.number.isRequired,
        withdrawal: PropTypes.number,
        deposit: PropTypes.number,
        runningBalance: PropTypes.number.isRequired,
        category: PropTypes.string,
        transactionId: PropTypes.string.isRequired
    })
}

export default Transaction