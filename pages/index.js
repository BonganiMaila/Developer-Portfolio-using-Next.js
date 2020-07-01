//Import the Link API to support client-side navigation
import Link from 'next/link'
import Layout from '../components/MyLayout'
//import Image from 'react-bootstrap/Image'
import { FaGithub, FaPhoneAlt, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


/* Notice in the example below how we render static images with Next.js:
Create a folder called static in your project root directory. From your code you can then reference those files with /static/ URLs (see<img src={`/static/art/${props.data.image}.jpg`} alt=""/>) 
Note: Don't name the static directory anything else. The name is required and is the only directory that Next.js uses for serving static assets.*/
export default () => ( 
    <Layout>

<div className="welcome-section">


<div className="row">
  <div className="column1" >
    <img src="/static/images/bongani.png/" alt="" className="profile-picture"/>
  </div>
  <div class="column2">
        <h2>Hi, I am Bongani</h2>
        <h4>I'm a Web Developer</h4>
      </div>
</div>


<div className="contact-section">
      <div className="contact-section-header">
      <h2>Let's work together...</h2>
      <h3>How do you take your coffee?</h3>
      </div>

      {/*Phone number*/}
      <div className="contact-links" >
      
        
        <a  href="" className="contact-details">
        <FaPhoneAlt className="icon"/> 072 303 7071
            
        </a>
      
      {/*email*/}
      <a  href="josemaila789@gmail.com" className="contact-details" >
        <MdEmail className="icon" />
            email
        </a>
      
      {/*LinkedIn*/}
        <a  href="https://www.linkedin.com/in/bongani-maila/" className="contact-details">
            <FaLinkedin className="linkedIn"/> LinkedIn
            
        </a>
      </div>
</div>
      


<div className="foot">
<p>
    This is Bongani Maila's portfolio. All contact information is in the contact tab 
    
  </p>
</div>


      


    
       

<style jsx>
    {`
  p, h1,h4 {
    padding-left:50px
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    text-align: center;
    font-size: 1rem;
    color:white;
  }
  .profile-picture{
    width:250px;
    height:250px;
    border-radius: 50%;
  }
  h1 {
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    text-align: center;
    font-size: 4rem;
  }
  h2 {
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    text-align: center;
    font-size: 4rem;
    color:white;
  }
  h3 {
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    text-align: center;
    font-size: 2rem;
    color:white;
  }
  .column1 {
    float: left;
    width: 35%;
    padding-right: 50px;
    padding-bottom: 0;
    height: 300px; /* Should be removed. Only for demonstration */
  }
  .column2 {
    float: left;
    width: 35%;
    padding-left: 50px;
    padding-bottom: 0;
    height: 300px; /* Should be removed. Only for demonstration */
  }
  
  
 
  .row:after {
    content: "";
    display: table;
    clear: both;
  }

  .welcome-section{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: #DFDFE6;
    background-repeat:no-repeat;
    background-size: 100%;
    background-image: url("/static/images/back2.jpg/");
    padding-top: 50px;
  }
  .welcome{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: white;
    background-image: linear-gradient(62deg, #3a3d40 0%, #181719 100%);
    padding-top: 50px;
  }

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


.contact-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 80vh;
  padding: 0 2rem;
  background: var(--main-gray);
}

.contact-section-header>h2 {
  font-size: 6rem;
}

@media (max-width: 28.75em) {
  .contact-section-header>h2 {
      font-size: 4rem;
  }
}

.contact-section-header>p {
  font-style: italic;
}

.contact-links {
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 980px;
  margin-top: 4rem;
  flex-wrap: wrap;
}

.contact-details {
  font-size: 2.4rem;
  text-shadow: 2px 2px 1px #1f1f1f;
  transition: transform 0.3s ease-out;
  padding: 1rem 2rem;

}

.contact-details:hover {
  transform: translateY(8px);
}

.btn {
  display: inline-block;
  padding: 1rem 2rem;
  border-radius: 2px;
}

.btn-show-all {
  font-size: 2rem;
  background: var(--main-gray);
  transition: background 0.3s ease-out;
}

.btn-show-all:hover {
  background: var(--main-red);
}

.btn-show-all:hover>i {
  transform: translateX(2px);
}

.btn-show-all>i {
  margin-left: 10px;
  transform: translateX(0);
  transition: transform 0.3s ease-out;
}
  
  
  
  
`}
</style> 
</div>
    
    </Layout>
)