// Importação dos componentes do bootstrap
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

// Importação do Hook form pra validar e enviar o formulário
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { useListaUsuario } from "../hooks/UseUsuario";

import { useInserirLivro } from "../hooks/UseLivro";

const CadastroLivro = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const usuarios = useListaUsuario();

  const { inserirLivro } = useInserirLivro();

  const onSubmit = (data) => {
    console.log(data);
    inserirLivro(data);
    alert("Livro cadastrado");
    navigate("/home");
  };
  const onError = (errors) => {
    console.log(errors);
  };
  return (
    <div>
      <Form className="mt-3 w-full" onSubmit={handleSubmit(onSubmit, onError)}>
        {/* Caixinha de titulo */}
        <FloatingLabel
          controlId="floatingInputtitulo"
          label="titulo"
          className="mb-5"
        >
          <Form.Control
            type="text"
            placeholder="Digite o titulo do produto"
            {...register("titulo", {
              required: "O titulo é obrigatório",
              minLength: {
                value: 1,
                message: "O titulo deve ter pelo menos 1 caracteres",
              },
              maxLength: {
                value: 20,
                message: "O titulo deve ter ate 20 caracteres",
              },
            })}
          />
          {errors.titulo && <p className="error">{errors.titulo.message}</p>}
        </FloatingLabel>

        {/* Caixinha de autor */}
        <FloatingLabel
          controlId="floatingInputautor"
          label="autor"
          className="mb-5"
        >
          <Form.Control
            type="text"
            placeholder="Digite o autor do produto"
            {...register("autor", {
              required: "O autor é obrigatório",
              minLength: {
                value: 1,
                message: "O autor deve ter pelo menos 1 caracteres",
              },
              maxLength: {
                value: 20,
                message: "O autor deve ter ate 20 caracteres",
              },
            })}
          />
          {errors.autor && <p className="error">{errors.autor.message}</p>}
        </FloatingLabel>

        {/* Caixinha de generos */}
        <FloatingLabel
          controlId="floatingInputgeneros"
          label="generos"
          className="mb-5"
        >
          <Form.Control
            type="text"
            placeholder="Digite o generos do produto"
            {...register("generos", {
              required: "O generos é obrigatório",
              minLength: {
                value: 1,
                message: "O generos deve ter pelo menos 1 caracteres",
              },
              maxLength: {
                value: 20,
                message: "O generos deve ter ate 20 caracteres",
              },
            })}
          />
          {errors.generos && <p className="error">{errors.generos.message}</p>}
        </FloatingLabel>

        {/* Caixinha de status */}
        <FloatingLabel
          controlId="floatingInputstatus"
          label="status"
          className="mb-5"
        >
          <Form.Select disabled value="Quero ler" {...register("status")}>
            <option value="Quero ler"> Quero Ler</option>
          </Form.Select>
          {errors.status && <p className="error">{errors.status.message}</p>}
        </FloatingLabel>

        {/* Select de usuario */}
        <FloatingLabel
          controlId="floatingSelectTipo"
          label="usuario"
          className="mb-5"
        >
          <Form.Select
            {...register("usuario", {
              validate: (value) => value != "Nenhum" || "Escolha um usuario",
            })}
          >
            <option value="Nenhum"> Escolha um usuario </option>
            {usuarios.map((user) => (
              <option
                key={user.id}
                value={user.nome}
              >
                {user.nome}
              </option>
            ))}
          </Form.Select>
          {errors.usuario && (
            <p className="error">{errors.usuario.message}</p>
          )}
        </FloatingLabel>
        {/* Botão para enviar o formulário de cadastro de produto */}
        <Button variant="primary" size="lg" type="submit">
         Cadastrar
        </Button>
      </Form>
    </div>
  );
};

export default CadastroLivro;
