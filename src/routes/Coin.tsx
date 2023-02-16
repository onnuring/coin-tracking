import { useParams } from "react-router-dom";
//2. interface에서 타입 지정
interface RouteParams {
  coinId: string;
}

const Coin = () => {
  //1. const { coinId } = useParams<{ coinId: string }>();
  const { coinId } = useParams<RouteParams>();
  return <h1>Coin : {coinId}</h1>;
};

export default Coin;
