import './CSS/App.css';
import  Container  from 'react-bootstrap/Container';
import  Row  from 'react-bootstrap/Row';
import  Col  from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Store from './Components/Store';
import './CSS/StoreItem.css';
import CodeButton from './Components/CodeButton';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h5>CodeClicker!</h5>
      </header>
      

      <Container fluid>
        <Row>
          <Col>
            {/* Content for the first column */}
            <p>Column 1 Content</p> 
          </Col>
          <Col id = 'CodeButtonCol'>
            {/* Content for the second column */}
            <p>Column 2 Content</p>
            <CodeButton/>
          </Col>
          <Col className ='StoreCol' >
            {/* Content for the third column */}
            <Store/>
          </Col>
        </Row>
      </Container>
    </div>
    );

  
}

export default App;