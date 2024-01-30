import './App.css';
import  Container  from 'react-bootstrap/Container';
import  Row  from 'react-bootstrap/Row';
import  Col  from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Store from './Store';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h5>CodeClicker!</h5>
      </header>
      

      <Container>
        <Row>
          <Col>
            {/* Content for the first column */}
            <p>Column 1 Content</p>
          </Col>
          <Col>
            {/* Content for the second column */}
            <p>Column 2 Content</p>
          </Col>
          <Col>
            {/* Content for the third column */}
        
            <Store/>
          </Col>
        </Row>
      </Container>
    </div>
    );

  
}

export default App;