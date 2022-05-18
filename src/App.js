import Block from './components/Block/Block';
import Container from './components/Container/Container';
import InnerInputsContainer from './components/InnerInputsContainer/InnerInputsContainer';
import InputField from './components/InputField/InputField';
import InputsContainer from './components/InputsContainer/InputsContainer';
import Label from './components/Label/Label';
import styles from './GlobalStyles.module.css';

function App() {
  return (
    <div className={styles}>
      <Container>
        <Block>
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
          <p>middle</p>
        </Block>
        <Block>
          <Label text="Średnie zamówienie:" />
          <InputField placeholder="punkty" />
        </Block>
      </Container>
    </div>
  );
}

export default App;
