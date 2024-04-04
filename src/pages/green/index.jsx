import { GreenContainer } from "./styles.js";
import { GreenImages } from "../../styles/images.js";
import { useState } from "react";
import { Icons } from "../../styles/icons.js";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  return (
    <GreenContainer>
      <img src={GreenImages[`step${step}`]} alt="" />
      <div className="buttons">
        {step === 1 ? (
          <div className={"buttons__home button"} onClick={() => navigate("/")}>
            <span className={Icons.home.className}>{Icons.home.name}</span>
          </div>
        ) : (
          <div
            className="buttons__left button"
            onClick={() => setStep((prevState) => prevState - 1)}
          >
            <span className={Icons.arrow_back.className}>
              {Icons.arrow_back.name}
            </span>
          </div>
        )}

        {step === 17 ? (
          <div className={"buttons__home button"} onClick={() => navigate("/")}>
            <span className={Icons.home.className}>{Icons.home.name}</span>
          </div>
        ) : (
          <div
            className="buttons__right button"
            onClick={() => setStep((prevState) => prevState + 1)}
          >
            <span className={Icons.arrow_forward.className}>
              {Icons.arrow_forward.name}
            </span>
          </div>
        )}
      </div>
    </GreenContainer>
  );
};

export default Index;
