import { ChangeEvent, FC, useState } from "react";
import Container from "./components/Container/Container";
import InputField from "./components/InputField/InputField";
import Label from "./components/Label/Label";
import Logo from "./components/Logo/Logo";
import Outcome from "./components/Outcome/Outcome";
import StartEndLine from "./components/StartEndLine/StartEndLine";
import Title from "./components/Title/Title";
import styles from "./GlobalStyles.module.css";
import string from "./assets/strings.js";
import Button from "./components/Button/Button";
import { InputObject } from "./types/interface";

const inputObj = {
  endingCatalog: 0,
  startingCatalog: 0,
  startingPoint: 0,
  endingPoint: 0,
  averagePoint: 0,
};

const App: FC = () => {
  const [inputValue, setInputValue] = useState<InputObject>(inputObj);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue((prevState) => ({
      ...prevState,
      [e.target.name]: parseInt(e.target.value),
    }));
  };

  const handleClick = () => setInputValue(inputObj);

  const catalogsLeft = inputValue.endingCatalog - inputValue.startingCatalog;
  const pointsNeeded = inputValue.endingPoint - inputValue.startingPoint;
  const pointsPerCatalogNeeded = Math.round(pointsNeeded / catalogsLeft);
  const personsNeededPerCatalog = (
    pointsPerCatalogNeeded / inputValue.averagePoint
  ).toFixed(1);

  return (
    <div className={styles}>
      <Container main>
        <Container blockSide>
          <Outcome description={string.catToEnd} result={catalogsLeft} />
          <StartEndLine />
          <Container catalogs>
            <Container input>
              <Label text={string.startingCat} />
              <InputField
                name={string.startingCatalog}
                placeholder={string.catalog}
                handleChange={handleChange}
                inputValue={inputValue}
              />
              <InputField
                name={string.startingPoint}
                placeholder={string.point}
                handleChange={handleChange}
                inputValue={inputValue}
              />
            </Container>
            <Container input>
              <Label text={string.endingCat} />
              <InputField
                name={string.endingCatalog}
                placeholder={string.catalog}
                handleChange={handleChange}
                inputValue={inputValue}
              />
              <InputField
                name={string.endingPoint}
                placeholder={string.point}
                handleChange={handleChange}
                inputValue={inputValue}
              />
            </Container>
          </Container>
        </Container>
        <Container blockMiddle>
          <Title text={string.title} />
          <Logo alt={string.brand} />
          <Button handleClick={handleClick} text={string.btn} />
        </Container>
        <Container blockSide>
          <Container input>
            <Label text={string.average} />
            <InputField
              name={string.averagePoint}
              placeholder={string.point}
              handleChange={handleChange}
              inputValue={inputValue}
            />
          </Container>
          <Outcome
            description={string.increasePoint}
            result={pointsNeeded}
            point={string.unit}
          />
          <Outcome
            description={string.increaseCat}
            result={pointsPerCatalogNeeded}
            point={string.unit}
          />
          <Outcome
            description={string.persons}
            result={personsNeededPerCatalog}
          />
        </Container>
      </Container>
    </div>
  );
};

export default App;
