import { Container,Row,Button} from "react-bootstrap";
import './myForm.css';
import {useState} from "react"
import axios from "axios";
const querystring = require('querystring');
function Myform()
{

  const [myVideo,setmyVideo] = useState("");
  const [myQuality,setmyQuality] = useState("");



  let handleSubmit = async (e) => {
    e.preventDefault();
    const bodyForm=querystring.stringify(
      {
          myVideo
      }
    )
          axios(
        {
          method : "post",
          url : "http://localhost:5000/api/v1/videos/new",
          data: bodyForm
        }
      )
      
  };

   return(
       <Container id="card">
       <h2 id="myh2">
         Submit Your File here
       </h2>
       <form onSubmit={handleSubmit}>
       <div id="upload">
        <input id="file"
        type="file" 
        name="myVideo" 
        accept=" video/*" 
        onChange={(e)=>setmyVideo(e.target.value)} />
        </div>
        <Row id="form">
    <label id="myh2">SELECT THE QUALITY EVALUATION STANDARD</label>
     <select
     className="mb-3"
      id="dropdown"
      type="text"
       name="quality"
       onSelect={(e)=>setmyQuality(e.target.value)}>
      <option>PSNR</option>
      <option>VMAF</option>
      <option>SSIM</option>
    </select>
     </Row> 

<Button variant="secondary" type="submit">Submit</Button>
</form>
       </Container>
   )
}
export default Myform;