import { useContext } from 'react';
import { TransactionContext } from '../../TransactionContext';

import inCome from '../../assets/income.svg';
import outCome from '../../assets/outcome.svg';
import total from '../../assets/total.svg';

import { Container } from "./style";

export function Summary() {

    const { transactions } = useContext(TransactionContext)

    const summary = transactions.reduce((acc, transaction) => {

        if (transaction.type === 'deposit') {
            acc.deposit += transaction.amount
            acc.total += transaction.amount
        } else {
            acc.withdraws -= transaction.amount
            acc.total -= transaction.amount
        }

        return acc
    },
        {
            deposit: 0,
            withdraws: 0,
            total: 0
        })

    return (
        <Container>
            <div>
                <header>
                    <p>Entrada</p>
                    <img src={inCome} alt="iconEntrada" />
                </header>
                <strong>{summary.deposit}</strong>
            </div>

            <div>
                <header>
                    <p>Saída</p>
                    <img src={outCome} alt="iconSaida" />
                </header>
                <strong>{summary.withdraws}</strong>
            </div>

            <div className='highlight-background'>
                <header>
                    <p>Total</p>
                    <img src={total} alt="Total" />
                </header>
                <strong>{summary.total}</strong>
            </div>
        </Container>
    )
}