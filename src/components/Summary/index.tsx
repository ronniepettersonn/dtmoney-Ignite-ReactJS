import { Container, CardSummary } from "./styles";

import incomingImg from '../../assets/income.svg'
import outcomegImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { useTransactions } from "../../hooks/useTransactions";
import { useEffect, useState } from "react";

export function Summary() {
    const { transactions } = useTransactions();
    const [colorCardTotal, setColorCardTotal] = useState('positive');

    const summary = transactions.reduce((acc, transaction) => {
        if (transaction.type === 'deposit') {
            acc.deposits += transaction.amount
            acc.total += transaction.amount
        } else {
            acc.withdraw += transaction.amount
            acc.total -= transaction.amount
        }

        return acc;
    }, {
        deposits: 0,
        withdraw: 0,
        total: 0
    })

    useEffect(() => {
        if (summary.total >= 0) {
            setColorCardTotal('positive')
        } else {
            setColorCardTotal('negative')
        }

        console.log(summary.total)
    }, [summary])


    return (
        <Container>
            <CardSummary>

                <header>
                    <p>Entradas</p>
                    <img src={incomingImg} alt="Entradas" />
                </header>
                <strong>{new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                }).format(summary.deposits)}</strong>
            </CardSummary>


            <CardSummary>
                <header>
                    <p>Saidas</p>
                    <img src={outcomegImg} alt="Saidas" />
                </header>
                <strong>- {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                }).format(summary.withdraw)}</strong>
            </CardSummary>

            <CardSummary className="heighlight-background" isPositive={colorCardTotal === 'positive'}>
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total" />
                </header>
                <strong>{new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                }).format(summary.total)}</strong>
            </CardSummary>
        </Container>
    )
}