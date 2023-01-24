import React from 'react'
import { MainContainer, Form, Input } from './styles'
import useForm from '../../hooks/useForm'

function MainPage() {

  const [formulario, onChangeInput, clear] = useForm({nome: "", modulos: "", tecnologias: "", responsavel: ""})

  const handleClick = (e) => {
    e.preventDefault()
    clear()

    console.log(`Nome: ${formulario.nome} Modulos: ${formulario.modulos} Tecnologias: ${formulario.tecnologias} Responsável: ${formulario.responsavel} `)
  }
 
  return (
    <MainContainer>
      <h2>Cadastro de novo curso</h2>

      <Form onSubmit={handleClick} >
        <label for="nome">Nome do Curso:</label>
        <Input 
          id="nome"
          name="nome"
          value={formulario.nome}
          onChange={onChangeInput}
        />

        <label for="modulos">Número de Módulos: </label>
        <Input 
          id="modulos"
          name="modulos"
          value={formulario.modulos}
          onChange={onChangeInput}

        />

        <label for="tecnologias">Tecnologias abordadas: </label>
        <Input 
          id="tecnologias"
          name="tecnologias"
          value={formulario.tecnologias}
          onChange={onChangeInput}
        />
        
        <label for="responsavel">Responsável: </label>
        <Input 
          id="responsavel"
          name="responsavel"
          value={formulario.responsavel}
          onChange={onChangeInput}
        />
      <button type="submit">Criar curso</button>
      </Form>
    </MainContainer>
  )
}

export default MainPage