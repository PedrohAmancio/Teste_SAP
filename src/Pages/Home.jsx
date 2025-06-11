import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import CardLivro from "../Components/CardLivro";

import { useListaLivros } from "../hooks/UseLivro";

const Home = () => {
  const livros = useListaLivros();
  return (
    <>
      <Row>
        <Col xs={4}>
          <h1>Quero Ler</h1>
          {livros.map(
            (livro) =>
              livro.status == "Quero ler" && (
                <CardLivro
                  key={livro.id}
                  id={livro.id}
                  titulo={livro.titulo}
                  autor={livro.autor}
                  genero={livro.generos}
                  status={livro.status}
                  usuario={livro.usuario}
                />
              )
          )}
        </Col>

        <Col xs={4}>
          <h1>Lendo</h1>
          {livros.map(
            (livro) =>
              livro.status == "Lendo" && (
                <CardLivro
                  key={livro.id}
                  id={livro.id}
                  titulo={livro.titulo}
                  autor={livro.autor}
                  genero={livro.generos}
                  status={livro.status}
                  usuario={livro.usuario}
                />
              )
          )}
        </Col>

        <Col xs={4}>
          <h1>Lido</h1>
          {livros.map(
            (livro) =>
              livro.status == "Lido" && (
                <CardLivro
                  key={livro.id}
                  id={livro.id}
                  titulo={livro.titulo}
                  autor={livro.autor}
                  genero={livro.generos}
                  status={livro.status}
                  usuario={livro.usuario}
                />
              )
          )}
        </Col>
      </Row>
    </>
  );
};

export default Home;
