import { MainStyled } from "../styles/MainStyled";

export default function Main() {
  return (
    <MainStyled>
        <div className = "main-container">
            <div className = "main-intro">
                <div>"프론트엔드" 개발자</div>
                <div>이예은 입니다.</div>
            </div>
        </div>
    </MainStyled>
  );
}