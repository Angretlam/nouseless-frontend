import './App.css';
import UselessHeader from './Framing/Header.js';
import UselessFooter from './Framing/Footer.js';
import WebSites from './Interface/Websites.js';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <>
      <UselessHeader />
      <Container>
        <WebSites />
      </Container>
      <UselessFooter />
    </>
  );
}

export default App;
