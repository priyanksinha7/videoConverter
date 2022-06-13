import { Container,Row,Button} from "react-bootstrap";
import './myForm.css';
import {useState} from "react"
function Myform()
{

  const [myVideo] = useState();
  const [quality] = useState();



  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:5000/api/v1/videos/new", {
        method: "POST",
        body: JSON.stringify({
          myVideo: myVideo,
          quality: quality
        }),
      });
    } catch (err) {
      console.log(err);
    }
  };

   return(
       <Container id="card">
       <h2 id="myh2">
         Submit Your File here
       </h2>
       <form onSubmit={handleSubmit}>
       <div id="upload">
       <input id="file" type="file" name="myVideo" accept=" video/*" />
        </div>
        <Row id="form">
    <label id="myh2">SELECT THE QUALITY EVALUATION STANDARD</label>
    <select className="mb-3" id="dropdown" name="quality">
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