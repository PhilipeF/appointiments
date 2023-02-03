import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from './services/api'


interface Transaction {
    id: number;
    title: string;
    type: string;
    amount: number;
    category: string;
    createdAt: string;

}

interface TransactionProviderProps {
    children: ReactNode;
}

type NewTransactionProps = Omit<Transaction, 'id' | 'createdAt'>

interface TransactionsContextData {
    transactions: Transaction[];
    createTransaction: (transaction: NewTransactionProps) => void;
}

export const TransactionContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData)

export function TransactionProvider({ children }: TransactionProviderProps) {

    const [transactions, setTransactions] = useState<Transaction[]>([])

    useEffect(() => {
        api.get('/transactions')
            .then(response => setTransactions(response.data.transactions))
    }, [])

    function createTransaction(transaction: NewTransactionProps) {
        api.post('/transactions', transaction)
    }

    return (
        <TransactionContext.Provider value={{ transactions, createTransaction }}>
            {children}
        </TransactionContext.Provider>
    )
}
