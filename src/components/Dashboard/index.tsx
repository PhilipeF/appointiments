import { Summary } from "../Summary";
import { TransactionTable } from "../Transactions";
import { Content } from "./style";

export function Dashboard() {
    return (
        <Content>
            <Summary />
            <TransactionTable />
        </Content>
    )
}