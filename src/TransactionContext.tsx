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
    createTransaction: (transaction: NewTransactionProps) => Promise<void>;
}

export const TransactionContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData)

export function TransactionProvider({ children }: TransactionProviderProps) {

    const [transactions, setTransactions] = useState<Transaction[]>([])

    useEffect(() => {
        api.get('/transactions')
            .then(response => setTransactions(response.data.transactions))
    }, [])

    async function createTransaction(transactionInput: NewTransactionProps) {
        const response = await api.post('/transactions', {
            ...transactionInput, 
            createdAt: new Date()
        })
        const { transaction } = response.data

        setTransactions([
            ...transactions,
            transaction
        ])
    }

    return (
        <TransactionContext.Provider value={{ transactions, createTransaction }}>
            {children}
        </TransactionContext.Provider>
    )
}
