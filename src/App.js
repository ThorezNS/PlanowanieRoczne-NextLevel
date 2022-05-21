import Container from './components/Container/Container';
import InputField from './components/InputField/InputField';
import Label from './components/Label/Label';
import Logo from './components/Logo/Logo';
import Outcome from './components/Outcome/Outcome';
import StartEndLine from './components/StartEndLine/StartEndLine';
import Title from './components/Title/Title';
import styles from './GlobalStyles.module.css';
import string from './assets/strings.js';
import { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState({});

  const handleChange = (e) => {
    setInputValue((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  console.log(inputValue);

  return (
    <div className={styles}>
      <Container main>
        <Container blockSide>
          <Outcome description={string.catToEnd} result={undefined} />
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
            result={undefined}
            point={string.unit}
          />
          <Outcome
            description={string.increaseCat}
            result={undefined}
            point={string.unit}
          />
          <Outcome description={string.persons} result={undefined} />
        </Container>
      </Container>
    </div>
  );
}

export default App;
