import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from "react-bootstrap/Card"

import { useDeletaLivro } from '../hooks/UseLivro'
import CardBody from 'react-bootstrap/esm/CardBody'


const CardLivro = (props) => {
    const {deletarLivro} = useDeletaLivro()
    
    const handleDlete = async () =>{
        const deletado = await deletarLivro(props.id)
        alert("Livro deletado com sucesso")
        window.location.reload()
    }
    return (
         <div>
            <Card border="primary" style={{width:"18rem"}}>
                <Card.Body>
                    <Card.Text>
                        <b>Titulo:</b> <br /> {props.titulo}
                    </Card.Text>
                    <Card.Text>
                        <b>Titulo:</b> <br /> {props.autor}
                    </Card.Text>
                    <Card.Text>
                        <b>Titulo:</b> <br /> {props.genero}
                    </Card.Text>
                    <Card.Text>
                        <b>Titulo:</b> <br /> {props.usuario}
                    </Card.Text>

                    <Button
                    size=""
                    variant='warning'
                    type='button'
                    href={`/editalivro/${props.id}`}
                    className="me-3">
                        Editar
                    </Button>

                      <Button
                    size=""
                    variant='danger'
                    type='button'
                   onClick={handleDlete}>
                        Deletar
                    </Button>
                </Card.Body>
            </Card>
        </div>
  )
}

export default CardLivro