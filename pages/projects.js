
import Link from 'next/link'
import Layout from '../components/MyLayout'
import { FaGithub} from "react-icons/fa";


export default () => (
  <Layout>
    <div className="container">
      <div>
        <div>
        <h2>My Projects</h2>
        <h5>Link to my Github</h5>
           {/*Github*/}
            <a  href="https://github.com/BonganiMaila" className="contact-details">
         <FaGithub className="Github" /> Github     
        </a>
        </div>
        <br/>
            <style jsx>
            {`
              .about-intro {
                font-size: 17px;
                margin-left: 2rem;
                text-align: left;
              }
              .about-heading {
                margin-left: 2rem;
                font-size: 70px;
                font-weight: lighter;
                color: black;
                font-family: 'Raleway', sans-serif;
              
              }
              h2 {
                
                font-weight: 700;
                text-align: center;
                font-size: 4rem;
                color:#5f7fea;
                padding-top:100px;
                font-family: 'Courier New', Courier, monospace;
              }
              
            `}
            </style>
      </div>
    

    <div className="about-intro">
    <h4 className="heading">London Tech Store</h4>
    <img src="/static/images/tech.png/" className="image" alt="tech"/> <br/>
    <style jsx>
{`
  p {
    color: black;
  }
  .heading {
    color: #5f7fea;
    text-align:center;
    font-size:40px;
    font-family: 'Courier New', Courier, monospace;
  }
  .about-intro {
    font-size: 17px;
    margin: 3rem;
    text-align: left;

  border-radius: 10px;
  width: 90%;
  height:600px;
  color: white;
  background-color:#ffefcf;
  font-size: 80px;
  font-weight: bold;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
  .image{
    padding-left:150px;
    width:800px;
    height:500px;
  }
  .about-heading {
    margin-left: 2rem;
    font-size: 70px;
    font-weight: lighter;
    color: black;
    font-family: 'Raleway', sans-serif;
   
  }
  h2 {
    font-family: 'Courier New', Courier, monospace;
    font-weight: 700;
    text-align: center;
    font-size: 4rem;
    color:white;
  }
  .contact-details {
    font-size: 2.4rem;
    text-shadow: 2px 2px 1px #1f1f1f;
    transition: transform 0.3s ease-out;
  }
  
  
`}
</style>
    </div>

    <div className="about-intro">
    <h4 className="heading">Bearded Gent</h4>
    <img src="/static/images/beard.png/" className="image" alt="beard"/> <br/>   
    <style jsx>
    {`
  p {
    color: black;
  }
  .heading {
    color: #5f7fea;
    text-align:center;
    font-size:40px;
    font-family: 'Courier New', Courier, monospace;
  }
  .about-intro {
    font-size: 17px;
    margin: 3rem;
    text-align: left;

  border-radius: 10px;
  width: 90%;
  height:600px;
  color: white;
  background-color:#ffefcf;
  font-size: 80px;
  font-weight: bold;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
  .image{
    padding-left:150px;
    width:800px;
    height:500px;
  }
  .about-heading {
    margin-left: 2rem;
    font-size: 70px;
    font-weight: lighter;
    color: black;
    font-family: 'Raleway', sans-serif;
   
  }
  
  
`}
</style>
    </div>
    

    <div className="about-intro">
    <h4 className="heading">Weather App</h4>
    <img src="/static/images/weather.png/" className="image" alt="beard"/> 
    <style jsx>
    {`
  p {
    color: black;
  }
  .heading {
    color: #5f7fea;
    text-align:center;
    font-size:40px;
    font-family: 'Courier New', Courier, monospace;
  }
  .about-intro {
    font-size: 17px;
    margin: 3rem;
    text-align: left;

  border-radius: 10px;
  width: 90%;
  height:600px;
  color: white;
  background-color:#ffefcf;
  font-size: 80px;
  font-weight: bold;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
  .image{
    padding-left:150px;
    width:800px;
    height:500px;
  }
  .about-heading {
    margin-left: 2rem;
    font-size: 70px;
    font-weight: lighter;
    color: black;
    font-family: 'Raleway', sans-serif;
   
  }
  
  
`}
</style>   
    </div>
    
    <div className="foot">
<p>
    This is Bongani Maila's portfolio. All contact information is in the contact tab 
    
  </p>
  
  <style jsx>
            {`
              
  .foot {
    font-weight: 300;
    display: flex;
    justify-content: space-evenly;
    padding: 2rem;
    background: var(--main-gray);
    border-top: 4px solid var(--main-red);
}

foot>p {
    margin: 2rem;
}

foot i {
    vertical-align: middle;
}

@media (max-width: 28.75em) {
    foot {
        flex-direction: column;
        text-align: center;
    }
}
            `}
          </style>
</div>
    </div>
    
  </Layout>
)
