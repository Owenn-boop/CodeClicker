import  Container  from 'react-bootstrap/Container';
import  Row  from 'react-bootstrap/Row';
import  Col  from 'react-bootstrap/Col';

function Store(){

    return(
        <Container>
            <Row><p>Store</p></Row>
            <Row><p>Item 1</p></Row>
            <Row><p>Item 2</p></Row>
            <Row><p>Item 3</p></Row>
            <Row><p>Item 4</p></Row>
        </Container>
    );
}

export default Store;