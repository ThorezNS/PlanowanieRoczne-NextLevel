import Block from './components/Block/Block';
import Container from './components/Container/Container';
import InnerInputsContainer from './components/InnerInputsContainer/InnerInputsContainer';
import InputField from './components/InputField/InputField';
import InputsContainer from './components/InputsContainer/InputsContainer';
import Label from './components/Label/Label';
import Logo from './components/Logo/Logo';
import Outcome from './components/Outcome/Outcome';
import StartEndLine from './components/StartEndLine/StartEndLine';
import Title from './components/Title/Title';
import styles from './GlobalStyles.module.css';

function App() {
  return (
    <div className={styles}>
      <Container>
        <Block>
          <Outcome description="Katalogów do końca celu:" result={undefined} />
          <StartEndLine />
          <InputsContainer>
            <InnerInputsContainer>
              <Label text="Katalog początkowy:" />
              <InputField placeholder="katalog" />
              <InputField placeholder="punkty" />
            </InnerInputsContainer>
            <InnerInputsContainer>
              <Label text="Katalog końcowy:" />
              <InputField placeholder="katalog" />
              <InputField placeholder="punkty" />
            </InnerInputsContainer>
          </InputsContainer>
        </Block>
        <Block middle>
          <Title text="Planowanie Roczne" />
          <Logo alt="Next Level" />
        </Block>
        <Block>
          <InnerInputsContainer>
            <Label text="Średnie zamówienie:" />
            <InputField placeholder="punkty" />
          </InnerInputsContainer>
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
        </Block>
      </Container>
    </div>
  );
}

export default App;
