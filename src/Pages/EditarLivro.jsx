import { useEffect, useState } from 'react'

import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

import { useListaUsuario } from "../hooks/UseUsuario";

import { useBuscarLivroPorId, useAtualizaLivro } from "../hooks/UseLivro";

const EditarLivro = () => {
     const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();
    
      const navigate = useNavigate();
    
      const usuarios = useListaUsuario();
    
      const { buscarLivro } = useBuscarLivroPorId();
      const { atualizaLivro } = useAtualizaLivro();

      const {id} = useParams()

      const onSubmit = (data) => {
    console.log(data);
    atualizaLivro(data, id);
    alert("Livro atualizado");
    navigate("/home");
  };
  const onError = (errors) => {
    console.log(errors);
  };

  const [carregado, setCarregado] = useState(false)

  useEffect(()=>{
    async function fectchLivro() {
        try{
            if(usuarios.length == 0) return
            const livro = await buscarLivro(id)

            if(livro && !carregado){
                reset({
                    titulo: livro.titulo,
                    autor: livro.autor,
                    generos: livro.generos,
                    status: livro.status,
                    usuario: livro.usuario,
                })
                setCarregado(true)
            }
        }
       
            catch(erro){
                if(erro.message.includes("Unexpected")){
                    alert("Livro não encontrado")
                    navigate("/home")
                }
            } 
    }
    fectchLivro()
  },[usuarios])


  return (
    <div>
        Editar Livro
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
          <Form.Select  value="Quero ler" {...register("status")}>
            <option value=" Quero ler "> Quero Ler</option>
            <option value=" Lendo "> Lendo  </option>
            <option value=" Lido "> Lido  </option>
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
         Editar
        </Button>
      </Form>
        
    </div>
  )
}

export default EditarLivro