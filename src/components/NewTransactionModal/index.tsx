import Modal from "react-modal";
import { Container } from "./style";

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
            <Container>
                <h1>Cadastrar transação</h1>
                <input type="text" placeholder="Título" />
                <input type="text" placeholder="Preço" />
                <input type="text" placeholder="Categoria" />
            </Container>

        </Modal >
    )
}