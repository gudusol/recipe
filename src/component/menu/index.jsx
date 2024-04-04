import { MenuContainer } from "./styles";
import { useNavigate } from "react-router-dom";

const Menu = ({ name, link }) => {
  const navigate = useNavigate();
  return (
    <MenuContainer>
      <div className={"menu__title"} onClick={() => navigate(link)}>
        {name}
      </div>
    </MenuContainer>
  );
};

export default Menu;
