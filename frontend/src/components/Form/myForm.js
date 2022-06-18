import { Container,Row,Button} from "react-bootstrap";
import './myForm.css';
import {useState} from "react"
import axios from "axios";
const querystring = require('querystring');
function Myform(props)
{

  const [myVideo,setmyVideo] = useState("");
  const [myQuality,setmyQuality] = useState("VMAF");



  let handleSubmit = async (e) => {
    e.preventDefault();
    const bodyForm=querystring.stringify(
      {
          myVideo,
          myQuality
      }
    )
      axios(
        {
          method : "post",
           url : "http://localhost:5000/api/v1/videos/new",
          data: bodyForm,
        }
      ).then(res=>
        {
          console.log(res.data.payload);
          props.setMean(res.data.payload.mean);
          props.setMin(res.data.payload.min);
          props.setMax(res.data.payload.max);
        })
        .catch((e)=>
        {
          console.log(e);
        })
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
        onChange={(e)=>setmyVideo(e.target.value)} required />
        </div>
        <Row id="form">
    <label id="myh2">SELECT THE QUALITY EVALUATION STANDARD</label>
     <select
     className="mb-3"
      id="dropdown"
      type="text"
       name="quality"
       onChange={(e)=>{setmyQuality(e.target.value);props.setmyType(e.target.value)}} >
       <option value="VMAF">VMAF</option>
      <option value="PSNR">PSNR</option>
      <option value="SSIM">SSIM</option>
    </select>
     </Row> 

<Button variant="secondary" type="submit">Submit</Button>
</form>
       </Container>
   )
}
export default Myform;