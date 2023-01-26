import Modal from "react-modal";
import { Container } from "./style";
import closeImg from '../../assets/close.svg';

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
                className='btnCloseModal'
            >
                <img src={closeImg} alt="Fechar Modal" />
            </button>

            <Container>
                <h2>Cadastrar transação</h2>
                <input type="text" placeholder="Título" />
                <input type="text" placeholder="Preço" />
                <input type="text" placeholder="Categoria" />
                <button type="submit">Cadastrar</button>
            </Container>

        </Modal >
    )
}