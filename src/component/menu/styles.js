import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Colors, Generators } from "../../styles";

export const MenuContainer = styled.div`
  width: 30rem;
  height: 30rem;
  background-color: orange;
  cursor: pointer;

  & > div.menu__title {
    width: 100%;
    height: 100%;
    ${Generators.flexGenerator()};
    font-size: 4rem;
  }
`;
