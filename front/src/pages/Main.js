import { MainStyled } from "../styles/MainStyled";
import Header from "../components/Header";

export default function Main() {
  return (
    <MainStyled>  
      <Header/>
      <div className = "main-myintro">
        <div>Hi,<br/>I'm Lee Ye-eun</div>
        <div>web developer</div>
        <div>Front End Developer</div>
      </div>

    </MainStyled>
  );
}