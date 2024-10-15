import Article from "../../components/Article";
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import BtnMore from "../../components/BtnMore";
import Images from "../../components/Images";
import Container from "../../components/Container";
import { HomeStyle } from "./styles";

const Home = () => {
    return (
        <>
            <Header />
            <Container>
                <HomeStyle>
                    <Article>
                        <Images src="/imagens/HondaTuruna/foto1.jpeg" />
                        <h1>Honda Turuna</h1>
                        <p>Pequeno texto com uma descrição sobre o artigo</p>
                        <BtnMore to="/turuna" />
                    </Article>
                    <Article>
                        <Images src="/imagens/HondaTuruna/foto1.jpeg" />
                        <h1>Honda Turuna</h1>
                        <p>Pequeno texto com uma descrição sobre o artigo</p>
                        <BtnMore to="/turuna" />
                    </Article>
                    <Article>
                        <Images src="/imagens/HondaTuruna/foto1.jpeg" />
                        <h1>Honda Turuna</h1>
                        <p>Pequeno texto com uma descrição sobre o artigo</p>
                        <BtnMore to="/turuna" />
                    </Article>
                    <Article>
                        <Images src="/imagens/HondaTuruna/foto1.jpeg" />
                        <h1>Honda Turuna</h1>
                        <p>Pequeno texto com uma descrição sobre o artigo</p>
                        <BtnMore to="/turuna" />
                    </Article>
                    <Article>
                        <Images src="/imagens/HondaTuruna/foto1.jpeg" />
                        <h1>Honda Turuna</h1>
                        <p>Pequeno texto com uma descrição sobre o artigo</p>
                        <BtnMore to="/turuna" />
                    </Article>
                </HomeStyle>
            </Container>
            <Footer />
        </>
    )
}

export default Home;