import React from "react";
import { MainContainer, Form, Input } from "./styles";
import { useForm } from "../../hooks/useForm";

function MainPage() {
  const { form, onChangeForm, resetForm } = useForm({
    nome: "",
    modulos: "",
    tecnologias: "",
    responsavel: "",
  });

  const submitForm = (e) => {
    e.preventDefault();
    console.log(form);
    resetForm();
  };

  return (
    <MainContainer>
      <h2>Cadastro de novo curso</h2>

      <Form onSubmit={submitForm}>
        <label htmlFor="nome">Nome do Curso:</label>
        <Input
          id="nome"
          name="nome"
          value={form.nome}
          onChange={onChangeForm}
          required
        />

        <label htmlFor="modulos">Número de Módulos: </label>
        <Input
          id="modulos"
          name="modulos"
          // type="number"
          // min="2"
          pattern="^(0*[2-9]|[1-9][0-9]+)$"
          title="O número de módulos não pode ser menor que 2"
          value={form.modulos}
          onChange={onChangeForm}
          required
        />

        <label htmlFor="tecnologias">Tecnologias abordadas: </label>
        <Input
          id="tecnologias"
          name="tecnologias"
          value={form.tecnologias}
          onChange={onChangeForm}
          required
        />

        <label htmlFor="responsavel">Responsável: </label>
        <Input
          id="responsavel"
          name="responsavel"
          pattern="^[\p{L}\s]{5,}$"
          // pattern="^.[^0-9][^!@#$%&]{5,}$"
          // pattern="^.\p{L}[^0-9][^!@#$%&?]{5,}$"
          title="O nome do responsável não pode ter menos de 5 caracteres"
          value={form.responsavel}
          onChange={onChangeForm}
          required
        />
        <button type="submit">Criar curso</button>
      </Form>
    </MainContainer>
  );
}

export default MainPage;
