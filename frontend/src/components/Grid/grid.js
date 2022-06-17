import { useState } from "react";
import { Container, Row,Col } from "react-bootstrap";
import Myform from "../Form/myForm";
import Result from "../Result/result";
import './grid.css';

function Grid(){
    const [mean,setMean]=useState("");
    const [min,setMin]=useState("");
    const [max,setMax]=useState("");
    let score=
    {
       mean,
       min,
       max,
    };
    let setScore=
    {
        setMax,
        setMean,
        setMin,
    };
    return(
        <div id="grid">
         <Container>
             <Row>
             <Col sm={6} id="formcol">
                  <Myform {...setScore}/>
              </Col>
              <Col sm={4} id="resultcol"> 
               <h2 id="scoreHeader"><u>SCORES</u></h2>
             <Result {...score}/>
              </Col> 
             </Row>
         </Container>
        </div>
    )
}
export default Grid;