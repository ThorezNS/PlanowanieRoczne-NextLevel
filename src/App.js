import Container from './components/Container/Container';
import InputField from './components/InputField/InputField';
import Label from './components/Label/Label';
import Logo from './components/Logo/Logo';
import Outcome from './components/Outcome/Outcome';
import StartEndLine from './components/StartEndLine/StartEndLine';
import Title from './components/Title/Title';
import styles from './GlobalStyles.module.css';

function App() {
  return (
    <div className={styles}>
      <Container main>
        <Container block>
          <Outcome description="Katalogów do końca celu:" result={undefined} />
          <StartEndLine />
          <Container catalogs>
            <Container input>
              <Label text="Katalog początkowy:" />
              <InputField placeholder="katalog" />
              <InputField placeholder="punkty" />
            </Container>
            <Container input>
              <Label text="Katalog końcowy:" />
              <InputField placeholder="katalog" />
              <InputField placeholder="punkty" />
            </Container>
          </Container>
        </Container>
        <Container block middle>
          <Title text="Planowanie Roczne" />
          <Logo alt="Next Level" />
        </Container>
        <Container block>
          <Container input>
            <Label text="Średnie zamówienie:" />
            <InputField placeholder="punkty" />
          </Container>
          <Outcome
            description="Potrzebny przyrost punktowy:"
            result={undefined}
            point="p"
          />
          <Outcome
            description="Przyrost punktowy co katalog:"
            result={undefined}
            point="p"
          />
          <Outcome
            description="Potrzebne osoby co katalog:"
            result={undefined}
          />
        </Container>
      </Container>
    </div>
  );
}

export default App;
