import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Images from "../../components/Images";
import Main from "../../components/Main";

const HondaTuruna = () => {
    return (
        <>
            <Header />
            <Container>
                <Main>
                    <h1>Honda Turuna</h1>
                    <Images src="/imagens/HondaTuruna/foto1.jpeg" />
                    <p>
                        Em 1979, chegou ao mercado nacional aquela que pode ser considerada a 1ª moto esportiva fabricada no Brasil, a Honda Turuna 125.
                        A Honda 125 Turuna impressionava em vários aspectos. No design, o tanque de formas retas, com a palavra “Super Sport” logo abaixo do logotipo Honda, e o banco de estilo esportivo, eram elementos calcados na cobiçada Honda CB 400 Four importada.
                    </p>
                    IMAGEM
                    <p>
                        O motor monocilíndrico de 125cc, com potência máxima de 14 cv e torque de 1,0 kgm.f trazia algumas características que a diferenciava da CG, como o comando de válvulas no cabeçote acionado por corrente por exemplo.
                        Testes realizados pelas revistas especializadas da época revelaram o desempenho da novidade, capaz de alcançar os 120 km/h de velocidade máxima e acelerar de 0 a 80 km/h em cerca de 10 segundos.
                    </p>
                    IMAGEM
                    <p>
                        Possuia suspensão dianteira telescópica do tipo Ceriani, com maior curso em relação à CG 125, freio a disco na dianteira era por acionamento mecânico, como na Honda ML 125 lançada em 1978.
                        Tinha um acabamento caprichado, com detalhes antes só vistos em motos de maior cilindrada, como a portinhola retangular que protegia a tampa do tanque, o banco cuja abertura permitia acesso ao compartimento da bateria, ferramentas e travas de capacete. Seu painel, possuia conta-giros, velocímetro e hodômetros total e parcial, este último item inédito em uma 125.
                    </p>
                    IMAGEM
                    <p>
                        Em 1982 a Turuna recebeu um carburador dotado do sistema ECCO, que favorecia maior economia sem perda de performance. Já em 1983, houve algumas atualizações como guidão mais alto, maior distância entre-eixos, acionamento hidráulico do freio a disco e regulagem na carga da mola nos amortecedores traseiros. O platinado foi substituído pelo CDI e sistema elétrico 12 volts, e o motor ganhou uma pintura preta. O farol, antes redondo, deu lugar a um retangular, idem a lanterna traseira, e os instrumentos de painel foram englobados em um único conjunto, incluindo marcador de gasolina.
                    </p>
                    IMAGEM
                    <p>
                        Em 1985 foi lançada a última geração da Turuna e se caracterizou pela carenagem de farol, guidão ainda mais elevado e tanque igual ao da ML 125. Essa versão permaneceu em produção até 1986, recebendo apenas mudanças nas cores.
                    </p>
                    IMAGEM
                </Main>
            </Container>
            <Footer>
                <p>Desenvolvido por Jacson</p>
            </Footer>
        </>
    )
}

export default HondaTuruna;