import  Container  from 'react-bootstrap/Container';
import  Row  from 'react-bootstrap/Row';
import  Col  from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import StoreItem from './StoreItem';

function Store(){

    return(
        <Container>
            <Row><p>Store</p></Row>
            <Row><StoreItem/></Row>
        </Container>
    );
}

export default Store;