import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionContext } from "./contexto";
import { GlobalStyle } from "./styles/global";

export function App() {

  const [isNewTransaction, setIsNewTransaction] = useState(false)

  function handleOpenNewTransactionModal() {
    setIsNewTransaction(true)
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransaction(false)
  }

  return (
    <>
      <TransactionContext.Provider value={'Testando'}>

        <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
        <Dashboard />
        <NewTransactionModal
          isOpen={isNewTransaction}
          onRequestClose={handleCloseNewTransactionModal}
        />

      </TransactionContext.Provider>

      <GlobalStyle />

    </>
  )
}
