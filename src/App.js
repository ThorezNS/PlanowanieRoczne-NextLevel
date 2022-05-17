import Block from './components/Block/Block';
import Container from './components/Container/Container';
import styles from './GlobalStyles.module.css';

function App() {
  return (
    <div className={styles}>
      <Container>
        <Block>
          <p>left</p>
        </Block>
        <Block middle>
          <p>middle</p>
        </Block>
        <Block>
          <p>right</p>
        </Block>
      </Container>
    </div>
  );
}

export default App;
