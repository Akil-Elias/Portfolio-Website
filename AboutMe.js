import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import art from '../web dev clipart.png';

function AboutMe(){    
    return( 
        <Container fluid="md">
        <h1>ABout Me</h1>
  <Row>
    <Col>11 Now faith is confidence in what we hope for and assurance about what we do not see. 2 This is what the ancients were commended for.

3 By faith we understand that the universe was formed at God’s command, so that what is seen was not made out of what was visible.

4 By faith Abel brought God a better offering than Cain did. By faith he was commended as righteous, when God spoke well of his offerings. And by faith Abel still speaks, even though he is dead.

5 By faith Enoch was taken from this life, so that he did not experience death: “He could not be found, because God had taken him away.”[a] For before he was taken, he was commended as one who pleased God. 6 And without faith it is impossible to please God, because anyone who comes to him must believe that he exists and that he rewards those who earnestly seek him.
    </Col>
    <Col><img src={art} alt='no im' />
    </Col>
  </Row>
</Container>
    )
}

export default AboutMe;