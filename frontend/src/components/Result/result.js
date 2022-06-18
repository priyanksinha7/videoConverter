import { Container } from "react-bootstrap";
import './result.css';
function Result(props){
    return(
        <Container id="result">
        <div id="h21">
            <h2>
            &#160;&#128073; MIN:- &#160;&#160;{props.min}
            </h2>
            </div>
            <div id="h22">
            <h2>
            &#160;&#128073; MEAN:- &#160;{props.mean}
            </h2>
            </div>
            <div id="h23">
            <h2>
            &#160;&#128073;  MAX:- &#160;&#160;{props.max}
            </h2>
            </div>
            
        </Container>
    )
}
 
export default Result;