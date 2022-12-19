import Estilo from "../../components/Estilo";

export default function usandoEstilo() {
  return (
    <div>
      <Estilo numero={3} color="white"/>
      <Estilo numero={-5} color="black" direita/>
    </div>
  )
}