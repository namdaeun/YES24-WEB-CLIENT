import { IcHamburger, IcLogo, IcMy, IcSearch } from "../../assets/icons";
import * as S from "./Header.styled.ts";

// interface HeaderPropTypes {
//   handleNavigate: () => void;
// }

const Header = () => {
  return (
    <S.HeaderWrapper>
      <S.Logo>
        <IcLogo />
      </S.Logo>
      <S.BtnLayout>
        <S.SearchBtn type="button">
          <IcSearch />
        </S.SearchBtn>
        <S.MyBtn>
          <IcMy />
        </S.MyBtn>
        <S.HamburgerBtn>
          <IcHamburger />
        </S.HamburgerBtn>
      </S.BtnLayout>
    </S.HeaderWrapper>
  );
};

export default Header;
