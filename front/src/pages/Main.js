import { MainStyled } from "../styles/MainStyled";
import Header from "../components/Header";
import MainIntro from "./MainIntro";

export default function Main() {
  return (
    <MainStyled>  
      <Header/>
      <div className = "main-wrapper">
        <MainIntro />
      </div>
    </MainStyled>
  );
}