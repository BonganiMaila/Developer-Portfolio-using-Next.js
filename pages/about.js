
import Link from 'next/link'
import Layout from '../components/MyLayout'


export default () => (
<Layout>
  <div className="about-grid">
  
        <br/>
        {/*About Me list*/}
        <div className="about-intro">
          <h2 className="about-heading">About Me</h2>
          <ul>
            <p>Hi, I'm Bongani. I am a creative, determined, and productive web developer with a passion for building web applications. 
              My core strength is Javascript. I also like working with other frameworks and technologies that contribute to full-stack web development which include Node.js, Express, MongoDB, and React.</p>

            <p>After spending almost 3 years in the construction sector, I have developed strong organizational and communication skills, attention to detail, and being able to be a team player who is solutions-oriented.
              I am interested in combining all these skills to contributing to the development of dynamic web sites, applications, and services. </p>
          </ul>

          {/*About me styling*/}
          <style jsx>
            {`
              p {
                color: black;
              }
              .about-intro {
                font-size: 17px;
                margin: 3rem;
                text-align: left;
              }
              .about-heading {
                margin-left: 2rem;
                font-size: 70px;
                font-weight: lighter;
                color: black;
                font-family: 'Courier New', Courier, monospace;
               
              }
              
            `}
          </style>
        </div>

        
        
        
        <br/>

        {/*Educational History list*/}
        <div className="about-intro">
          <h2>Educational history</h2>
                <ul>
                  <h4>Full-Stack Web Development certificate</h4>
                  <p>Hyperion Development</p>
                  <p>Year: February - July 2020</p>

                  <h4>Information Technology Diploma</h4>
                  <p>University of South Africa</p>
                  <p>Year: 2015-2020</p>

                  <h4>National Senior certificate(Matric)</h4>
                  <p>Pretoria Technical High School</p>
                  <p>Year: 2005-2009</p>
                </ul>

                <style jsx>
            {`
              p {
                color: black;
              }
              .about-intro {
                font-size: 17px;
                margin: 3rem;
                text-align: left;
              }
              h2{
                  font-family: 'Courier New', Courier, monospace;
                  font-weight: 300;
              }
            `}
          </style>
        </div>
        <br/>
      

        {/*Work History list*/}
        <div className="about-intro">
          <h2>Work History</h2>
          <ul>
            <h4>GTP Holding</h4>
            <p>Duration: November 2018 - Present</p>
          </ul>

          <style jsx>
            {`
              p {
                color: black;
              }
              .about-intro {
                font-size: 17px;
                margin: 3rem;
                text-align: left;
                
              }
              h2{
                font-family: 'Courier New', Courier, monospace;
                font-weight: 300;
              }
            `}
          </style>
        </div>
        
  </div>
        
</Layout>
)


{/*

.about-grid {
  border-radius: 10px;
  width: 94%;
  background-color:#DFDFE6;
  font-size: 80px;
  font-weight: bold;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}

*/}