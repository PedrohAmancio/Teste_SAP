import React from 'react'

import Container from 'react-bootstrap/esm/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const BarraNavegacao = () => {
  return (
    <div> 
        
        <Navbar expand="lg" bg="sucess" data-bs-theme="dark">
        <Container>
        {/* Logomarca biblioteca */}
        <Navbar.Brand href="/home">
            C&G Biblioteca
         </Navbar.Brand>
        <Nav className = "me-auto">
            {/* Paginas */}
            <Nav.Link href="/cadastrausuario">
            cadastrar usuario 
            </Nav.Link>
            <Nav.Link href="/cadastralivro">
            Cadastrar Livro
            </Nav.Link>
       </Nav>
        </Container>
     </Navbar>
        
    </div>
  )
}

export default BarraNavegacao