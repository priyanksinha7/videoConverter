import { Container,Row,Button} from "react-bootstrap";
import './myForm.css';
import {useState} from "react"
import axios from "axios";
function Myform(props)
{

  const [myVideo ,setmyVideo] = useState();
  const [myVideoName,setmyVideoName] = useState("");
  const [myQuality,setmyQuality] = useState("VMAF");

   const uploadFile=async(e)=>
   {
      setmyVideo(e.target.files[0]);
      setmyVideoName(e.target.files[0].name);
   }

  let handleSubmit = async (e) => {
    e.preventDefault();
    const bodyForm=new FormData();
    bodyForm.append("myVideo",myVideo);
    bodyForm.append("myVideoName",myVideoName);
    bodyForm.append("myQuality",myQuality);
     
      axios(
        {
          method : "post",
           url : "http://localhost:5000/api/v1/videos/new",
          data: bodyForm
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
       <form  encType="multipart/form-data" onSubmit={handleSubmit}>
       <div id="upload">
        <input id="file"
        type="file" 
        name="myVideo" 
        accept=" video/*" 
        onChange={uploadFile} required />
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

<Button variant="secondary" type="submit" onClick={()=>{ props.setMean("0.00");
    props.setMax("0.00");
    props.setMin("0.00");}}>Submit</Button>
</form>
       </Container>
   )
}
export default Myform;