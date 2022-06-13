import { Container, Row } from 'react-bootstrap';
import './App.css';
import MyComments from './components/Comments/comments';
import Grid from './components/Grid/grid';
import MyNavbar from './components/Navbar/navbar';
import Title from './components/Title/title';

function App() {
  return (
     <div  id="cnt">
       <Container>
         <MyNavbar/>
         </Container>
         <Container>
       <Row id="title-row">
         <Title/>
        </Row>
       </Container>
       <Grid/>
       <MyComments/>
     </div>
  );
}

export default App;
