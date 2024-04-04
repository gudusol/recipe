import styled from "@emotion/styled";
import { Colors, Generators } from "../../styles";

export const GreenContainer = styled.div`
  //2560 x 1440

  & > div.home-button {
  }

  & > img {
    width: 100%;
    aspect-ratio: 2560 / 1440;
  }

  & > div.buttons {
    width: 100%;
    ${Generators.flexGenerator("row", "space-between")};
    padding: 0.5rem;

    & > div.button {
      width: 14rem;
      height: 14rem;
      ${Generators.flexGenerator()};
      background-color: white;
      cursor: pointer;

      & > span {
        font-size: 10rem;
        color: orange;
      }
    }
  }
`;
