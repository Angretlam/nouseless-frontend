import './App.css';
import UselessHeader from './Framing/Header.js';
import UselessFooter from './Framing/Footer.js';
import WebsitesTable from './Interface/Websites.js';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <>
      <UselessHeader />
      <Container>
        <WebsitesTable />
      </Container>
      <UselessFooter />
    </>
  );
}

export default App;
