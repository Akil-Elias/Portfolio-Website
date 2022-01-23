import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Figure } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import js from '../images/javascript.png';
import html from '../images/html.png';
import css from '../images/css.png';
import typescript from '../images/typescript.png';
import reactJs from '../images/react js.png';
import bootstrap4 from '../images/bootstrap 4.png';



function Skills(){
    return(
    <Container>
    <h1>Skills</h1>
  <Row>
    <Col>
        <Figure>
            <Figure.Image width={171} height={180} alt="171x180" src={js} />
        </Figure>
    </Col>
    <Col>
        <Figure>
            <Figure.Image width={171} height={180} alt="171x180" src={html} />
        </Figure>
    </Col>
    <Col>
        <Figure>
            <Figure.Image width={171} height={180} alt="171x180" src={css} />
        </Figure>
    </Col>
  </Row>
  <Row>
    <Col>
        <Figure>
            <Figure.Image width={171} height={180} alt="171x180" src={typescript} />
        </Figure>
    </Col>
        <Col>
            <Figure>
                <Figure.Image width={171} height={180} alt="171x180" src={reactJs} />
            </Figure>
        </Col>
    <Col>
        <Figure>
            <Figure.Image width={171} height={180} alt="171x180" src={bootstrap4} />
        </Figure>
    </Col>
  </Row>
    </Container>
    )
}

export default Skills;