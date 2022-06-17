import { Container } from "react-bootstrap";
import './result.css';
function Result(props){
    return(
        <Container id="result">
            <h2 id="h21">
            &#160;&#128073; MIN:- &#160;&#160;&#160;&#160;{props.min}
            </h2>
            <h2 id="h22">
            &#160;&#128073; MEAN:- &#160;{props.mean}
            </h2>
            <h2 id="h23">
            &#160;&#128073;  MAX:- &#160;&#160;{props.max}
            </h2>
            
        </Container>
    )
}
 
export default Result;