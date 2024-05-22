import * as S from "./ReserveBtn.styled";
import { postBooking } from "../../../../apis/Detail/postBooking";
// import { useParams } from "react-router-dom";

const ReserveBtn = () => {
  // const runShowId = useParams();

  const postData = async () => {
    try {
      postBooking(Number(10));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <S.BtnWrapper>
      <S.Button onClick={postData}>예매하기</S.Button>
    </S.BtnWrapper>
  );
};

export default ReserveBtn;
