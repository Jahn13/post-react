import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import img from './img/img-nav.jpg'

const CustomNavBar = () => {
    return (
        <>
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt="post-personal"
                            src={img}
                            width="40"
                            height="40"
                            className="d-inline-block align-top rounded-circle"
                        />{' '}
                        Posts
                    </Navbar.Brand>
                </Container>
            </Navbar>    
        </>
    );
}

export { CustomNavBar };