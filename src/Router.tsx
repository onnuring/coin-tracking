import { BrowserRouter, Route, Switch } from "react-router-dom";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/:coinId">
          <Coin />
        </Route>
        <Route path="/">
          <Coins />
        </Route>
        {/* 홈화면 라우트의 순서가 마지막이어야한다 */}
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
