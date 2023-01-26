import Modal from "react-modal";
import { Container, TransactionModalBtn } from "./style";

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

interface NewTransactionsProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionsProps) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName='react-modal-overlay'
            className='react-modal-content'
        >
            <button
                type="button"
                onClick={onRequestClose}
                className='react-modal-close'
            >
                <img src={closeImg} alt="Fechar Modal" />
            </button>

            <Container>
                <h2>Cadastrar transação</h2>
                <input type="text" placeholder="Título" />
                <input type="text" placeholder="Preço" />

                <TransactionModalBtn>
                    <button type="button">
                        <img src={incomeImg} alt="btnEntrada" />
                        <span>Entrada</span>
                    </button>

                    <button type="button">
                        <img src={outcomeImg} alt="btnSaida" />
                        <span>Saída</span>
                    </button>
                </TransactionModalBtn>

                <input type="text" placeholder="Categoria" />
                <button type="submit">Cadastrar</button>
            </Container>

        </Modal >
    )
}