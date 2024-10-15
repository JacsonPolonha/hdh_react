import { ImagesStyles } from "./styles";

const Images = ({src, alt}) => {
    return (
        <ImagesStyles>
            <img src={src} alt={alt} />
        </ImagesStyles>
        
    )
}

export default Images;