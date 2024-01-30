import './App.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h5>CodeClicker!</h5>
        </header>

      <Container>
        <Row>
          <Col md={4}>
            {/* Content for the first column */}
            <p>Column 1 Content</p>
          </Col>
          <Col md={4}>
            {/* Content for the second column */}
            <p>Column 2 Content</p>
          </Col>
          <Col md={4}>
            {/* Content for the third column */}
            <p>Column 3 Content</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;