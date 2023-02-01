import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./style";


export function TransactionTable() {

    const [transactions, setTransactions] = useState([])

    useEffect(() => {
        api.get('/transactions')
            .then(response => setTransactions(response.data.transactions))
    }, [])

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Títulos</th>
                        <th>Preço</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Desenvolvimento de site</td>
                        <td className="deposit">R$ 12.000,00</td>
                        <td>Venda</td>
                        <td>17/02/2023</td>
                    </tr>
                    <tr>
                        <td>Academia</td>
                        <td className="withdrawn">- R$ 100,00</td>
                        <td>Saúde</td>
                        <td>15/02/2023</td>
                    </tr>
                    <tr>
                        <td>Aluguel de Apartamento</td>
                        <td className="withdrawn">- R$ 1.200,00</td>
                        <td>Moradia</td>
                        <td>10/02/2023</td>
                    </tr>
                    <tr>
                        <td>Venda do Monitor Antigo</td>
                        <td className="deposit">R$ 500,00</td>
                        <td>Venda</td>
                        <td>10/02/2023</td>
                    </tr>
                </tbody>
            </table>
        </Container>

    )
}