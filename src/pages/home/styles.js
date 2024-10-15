import styled from "styled-components";

export const HomeStyle = styled.section`
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 15px;

    @media (min-width: 768px) {
       width: 70%;
    }

    @media (min-width: 1024px) {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 30px;
    }
`