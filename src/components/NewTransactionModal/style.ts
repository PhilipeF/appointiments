import styled from "styled-components";

export const Container = styled.form`
    h2 {
        margin-bottom: 2rem;
        font-size: 1rem;
        color: var(--text-title)
    }

    input {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        border-radius: 0.25rem;

        border: 1px solid #d7d7d7;
        background: #e7e9ee;

        font-weight: 400;
        font-size: 1rem;

        &::placeholder {
            color: var(--text-title)
        }

        &+input {
            margin-top: 1rem;
        }
    }

    button[type="submit"] {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        border-radius: 0.25rem;
        border: 1px solid #d7d7d7;
        background: var(--green);
        color: var(--shape);
        font-weight: 600;
        font-size: 1rem;
        margin-top: 1rem;

        transition: 0.2s;

        &:hover {
            filter: brightness(0.9);
        }
    } 
`