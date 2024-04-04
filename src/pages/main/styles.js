import styled from "@emotion/styled";
import { Colors, Generators } from "../../styles";

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  ${Generators.flexGenerator()};
  gap: 2rem;
`;
