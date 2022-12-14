import Titulo from "../../components/Titulo"

export default function usandoTitulo() {
  return (
    <div>
      <Titulo 
        principal="Página de Cadastro"
        descricao="Incluir, alterar e excluir"
      />
      <Titulo 
        principal="Página de Login"
        descricao="Informe e-mail e senha"
        pequeno={true}
      />
      <Titulo 
        principal="Página de Login"
        descricao="Informe e-mail e senha"
        pequeno
      />
    </div>
  )
}