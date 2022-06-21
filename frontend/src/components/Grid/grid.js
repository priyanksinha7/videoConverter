import { useState } from "react";
import { Container, Row,Col } from "react-bootstrap";
import Myform from "../Form/myForm";
import Result from "../Result/result";
import './grid.css';
import {SpinnerDiamond} from "spinners-react"
function Grid(){
    const [mean,setMean]=useState("0.00");
    const [min,setMin]=useState("0.00");
    const [max,setMax]=useState("0.00");
    const [type,setmyType]=useState("VMAF");
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
        setmyType
    };
    return(
        <div id="grid">
         <Container>
             <Row>
             <Col sm={6} id="formcol">
                  <Myform {...setScore}/>
              </Col>
              <Col sm={4} id="resultcol"> 
               <h2 id="scoreHeader"><u>SCORES@{type}</u></h2>
             <Result {...score}/>
              </Col> 
             </Row>
         </Container>
        </div>
    )
    
        
}
export default Grid;