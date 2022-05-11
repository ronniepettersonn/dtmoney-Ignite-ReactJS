import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: -4.5rem;
`

interface CardSummaryTotalProps {
    isPositive?: boolean;
}

export const CardSummary = styled.div<CardSummaryTotalProps>`
    background: var(--shape);
        padding: 1.5rem 2rem;
        border-radius: 0.25rem;
        color: var(--text-title);

        header {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        strong {
            display: block;
            margin-top: 1rem;
            font-size: 2rem;
            font-weight: 500;
            line-height: 3rem;
        }

        &.heighlight-background {
            background: ${(props) => props.isPositive ? 'var(--green)' : 'var(--red)'};
            color: var(--shape);
        }
`