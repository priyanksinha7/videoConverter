import { Container, Row,Col } from "react-bootstrap";
import Myform from "../Form/myForm";
import Result from "../Result/result";
import './grid.css';
function Grid(){
    return(
        <div id="grid">
         <Container>
             <Row>
             <Col sm={6} id="formcol">
                  <Myform/>
              </Col>
              <Col sm={4} id="resultcol"> 
             <Result score="70"/>
              </Col> 
             </Row>
         </Container>
        </div>
    )
}
export default Grid;