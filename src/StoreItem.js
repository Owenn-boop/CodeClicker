import  Container  from 'react-bootstrap/Container';
import  Row  from 'react-bootstrap/Row';
import  Col  from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './StoreItem.css';
import Image from 'react-bootstrap/Image';
import Mario from './Assets/Mario.jpg';


function StoreItem(){

    return(
    <Container >
            <Row><p className='Tools'>Tools</p></Row>
            <Row><p><Button className='Store-Item'variant="secondary"><Image src={Mario}/>Item 1</Button>{''}</p></Row>
            <Row><p><Button className='Store-Item'variant="secondary">Item 2</Button>{''}</p></Row>
            <Row><p><Button className='Store-Item'variant="secondary">Item 3</Button>{''}</p></Row>
            <Row><p><Button className='Store-Item'variant="secondary">Item 4</Button>{''}</p></Row>
            <Row><p><Button className='Store-Item'variant="secondary">Item 5</Button>{''}</p></Row>
        </Container>
    );
}

export default StoreItem;