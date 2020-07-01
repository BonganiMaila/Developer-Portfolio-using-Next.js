
import Link from 'next/link'
import Layout from '../components/MyLayout';
import { FaGithub, FaPhoneAlt, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
//import Beard from '../static/images/beard.png';
//import London from '../static/images/tech.png';
//import Weather from '../static/images/weather.png';



export default () => (
  <Layout>
      <div>
    
    <div>
        <img src="/static/images/contact.jpg/" className="picture"  alt=""/>
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
      <a  href="josemaila789@gmail.com" className=" contact-details" >
        <MdEmail className="icon" />
            email
        </a>
      
      {/*LinkedIn*/}
        <a  href="https://www.linkedin.com/in/bongani-maila/" className="contact-details">
            <FaLinkedin className="linkedIn"/> LinkedIn
            
        </a>

         {/*Github*/}
         <a  href="https://github.com/BonganiMaila" className=" contact-details">
         <FaGithub className="Github" /> Github     
        </a>

      </div>
      </div>

      <style jsx>
{`
    .picture{
                
        display: block;
        margin-left: auto;
        margin-right: auto;
        background-size: cover;
        background-repeat: no-repeat;
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