import  Container  from 'react-bootstrap/Container';
import  Row  from 'react-bootstrap/Row';
import  Col  from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './StoreItem.css';
import Image from 'react-bootstrap/Image';


function StoreItem({item_name}){
    let item_image = require(`./Assets/${item_name}.png`);

    return(
        <Button className='Store-Item'variant="secondary">
            <Row>
                <Col sm={2} >
                    <Image src={item_image}/>
                </Col>
                <Col sm={8}>
                    {item_name}
                </Col>
                <Col sm={2}>
                    Sample Text {/* Will be used for a count of items possibly? */}
                </Col>
            </Row>
        </Button>
    );
}

export default StoreItem;