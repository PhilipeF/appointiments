import inCome from '../../assets/income.svg';
import outCome from '../../assets/outcome.svg';
import total from '../../assets/total.svg';

import { Container } from "./style";

export function Summary() {
    return (
        <Container>
            <div>
                <header>
                    <p>Entrada</p>
                    <img src={inCome} alt="iconEntrada" />
                </header>
                <strong>R$2.500,00</strong>
            </div>

            <div>
                <header>
                    <p>Saída</p>
                    <img src={outCome} alt="iconSaida" />
                </header>
                <strong>-R$800,00</strong>
            </div>

            <div className='highlight-background'>
                <header>
                    <p>Total</p>
                    <img src={total} alt="Total" />
                </header>
                <strong>R$2.500,00</strong>
            </div>
        </Container>
    )
}