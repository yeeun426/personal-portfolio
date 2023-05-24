import { MainStyled } from "../styles/MainStyled";

export default function Main() {
  return (
    <MainStyled>
        <div className = "main-container">
            <div className = "main-txt-left">
                <div>안녕하세요👋</div>
                <div>웹 개발자</div>
                <div>frontend</div>
            </div>

            <div className = "main-txt-right">
              <div>developer</div>
              <div>이예은입니다.</div>
            </div>
            <div className = "main-menu main-project">
                <div>프로젝트</div>
            </div>

            <div className = "main-menu main-certificate">
                <div>자격증</div>
            </div>

            <div className = "main-menu main-experience">
                <div>외부 경험</div>
            </div>

            <div className = "main-myimg">
              <img src = "images/myimg.png" alt="me"/>
            </div>
        </div>
    </MainStyled>
  );
}