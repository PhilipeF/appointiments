import { Summary } from "../Summary";
import { Transaction } from "../Transactions";
import { Content } from "./style";

export function Dashboard () {
    return (
        <Content>
            <Summary/>
            <Transaction/>
        </Content>
    )
}