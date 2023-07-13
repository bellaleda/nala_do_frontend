// React usa o js para organizar o html
// os componentes funcionais no React devem começar com maiusculo, SEMPRE
// mover a linha: alt + baixo
import Componente from "./components/Componente";

export default function App() {
  return (
    <div>
      <h1>Nala do React</h1>
      <Componente />
      {/* propriedade (prop) do conteúdo, no caso uma string, mas poderia ser função, valor etc etc */}
      <Button content="bumbum" />

      <Button content="nenem" />

      <Button content="chatinha" />
    </div>
  );
}

function Button(props) {
  return <button>{props.content}</button>;
}
