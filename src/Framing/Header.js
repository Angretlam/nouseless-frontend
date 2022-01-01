import { Navbar, Container, Nav } from 'react-bootstrap';
import { Auth } from 'aws-amplify';

function UselessHeader() {

  async function signOut() {
    try {
        await Auth.signOut();
        window.location.reload();
    } catch (error) {
        console.log('error signing out: ', error);
    }
  }

  return (
    <>
        <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
            crossOrigin="anonymous"
        />
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">NoUseless.Tech</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Item>
                <Nav.Link onClick={signOut}>Sign Out</Nav.Link>
              </Nav.Item>
            </Nav>
            </Container>
        </Navbar>
    </>
  );
}

export default UselessHeader;
