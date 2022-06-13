import { Container } from "react-bootstrap";
import './result.css';
function Result(props){
    return(
        <Container id="result">
            <h2 id="h2">
               SCORE: {props.score}
            </h2>
        </Container>
    )
}
 
export default Result;