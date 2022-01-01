import './App.css';
import UselessHeader from './Framing/Header.js';
import UselessFooter from './Framing/Footer.js';
import WebsitesTable from './Interface/Websites.js';
import { Container } from 'react-bootstrap';
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import awsExports from './aws-exports';
import '@aws-amplify/ui/dist/style.css';

Amplify.configure(awsExports);


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

export default withAuthenticator(App);
