import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";

import Modal from 'react-modal';


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
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <GlobalStyle />


      <Modal
        isOpen={isNewTransaction}
        onRequestClose={handleCloseNewTransactionModal}
      >
        <h1>Testando</h1>
      </Modal >

    </>
  )
}
