import  Container  from 'react-bootstrap/Container';
import  Row  from 'react-bootstrap/Row';
import  Col  from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function Store(){

    return(
        <Container>
            <Row><p>Store</p></Row>
            <Row><p><Button variant="secondary">Item 1</Button>{''}</p></Row>
            <Row><p><Button variant="secondary">Item 2</Button>{''}</p></Row>
            <Row><p><Button variant="secondary">Item 3</Button>{''}</p></Row>
            <Row><p><Button variant="secondary">Item 4</Button>{''}</p></Row>
            <Row><p><Button variant="secondary">Item 5</Button>{''}</p></Row>
        </Container>
    );
}

export default Store;