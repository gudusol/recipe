import { MainContainer } from "./styles.js";
import { Menu } from "../../component";

const Index = () => {
  return (
    <MainContainer>
      <Menu name={"레몬청"} link={"lemon"} />
      <Menu name={"청귤청"} link={"green-tangerine"} />
      <Menu name={"한라봉청"} link={"hallabong"} />
    </MainContainer>
  );
};

export default Index;
