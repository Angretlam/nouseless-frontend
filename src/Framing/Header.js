import { Navbar, Container, Nav } from 'react-bootstrap';

function UselessHeader() {
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
            </Nav>
            </Container>
        </Navbar>
    </>
  );
}

export default UselessHeader;
