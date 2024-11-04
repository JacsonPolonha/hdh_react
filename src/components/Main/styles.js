import styled from "styled-components";

export const MainStyles = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 10px;

    @media (min-width: 768px) {
       width: 70%;
       margin: auto;
    }

    @media (min-width: 1024px) {
        width: 60%;
    }
`