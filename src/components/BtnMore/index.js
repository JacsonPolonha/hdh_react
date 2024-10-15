// import { BtnMoreStyles } from "./styles";

import { StyledLink } from "./styles";

const BtnMore = ({to}) => {
    return (
        <StyledLink to={to}>
            Saiba mais
        </StyledLink>
    )
}

export default BtnMore;