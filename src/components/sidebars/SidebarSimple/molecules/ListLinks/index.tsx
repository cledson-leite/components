import NavLinks from "../../atoms/NavLinks";

export default function ListLinks() {
  return (
    <ul>
      <NavLinks icon="Home" label="Inicio" href="/" />
      <NavLinks icon="Bar" label="Receitas" href="/" />
      <NavLinks icon="Message" label="Mensagens" href="/" />
      <NavLinks icon="Pie" label="Analises" href="/" />
      <NavLinks icon="Heart" label="Likes" href="/" />
      <NavLinks icon="Folder" label="Arquivos" href="/" />
    </ul>
  );
}