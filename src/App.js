import Container from './components/Container/Container';
import InputField from './components/InputField/InputField';
import Label from './components/Label/Label';
import Logo from './components/Logo/Logo';
import Outcome from './components/Outcome/Outcome';
import StartEndLine from './components/StartEndLine/StartEndLine';
import Title from './components/Title/Title';
import styles from './GlobalStyles.module.css';
import string from './assets/strings.js';

function App() {
  return (
    <div className={styles}>
      <Container main>
        <Container blockSide>
          <Outcome description={string.catToEnd} result={undefined} />
          <StartEndLine />
          <Container catalogs>
            <Container input>
              <Label text={string.startingCat} />
              <InputField placeholder={string.catalog} />
              <InputField placeholder={string.point} />
            </Container>
            <Container input>
              <Label text={string.endingCat} />
              <InputField placeholder={string.catalog} />
              <InputField placeholder={string.point} />
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
            <InputField placeholder={string.point} />
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
