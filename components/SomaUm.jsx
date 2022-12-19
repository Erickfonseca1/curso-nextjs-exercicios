export default function SomaUm(props) {
  // props.numero ++
  // props são somente leitura, é possível utilizar das props para manipular o que
  // é exibido na página, como no exemplo abaixo, porém não é possível alterá-los
  // diretamente, como no exemplo acima. 
  return (
    <div>
      <h1>{props.numero + 1}</h1>
    </div>
  )
}