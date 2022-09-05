import React, { Component } from 'react';
import '../../App.css';
import AppNavbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Profile from '../../components/Profile';
// import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';

export default class About extends Component {
  render() {
    return (
      <div>
        <AppNavbar />
        <div className="parallax team">
          <div className="big-font bottom-quote" id="team">
            The Team
          </div>
        </div>
        <Container fluid>
          <div className="col-lg-10 body-content">
            
            <div className="row mt-5 mb-5 mr-2 ml-2">
              <div className="col-lg card">
                <div className="card-body">
                  <p>
                    The University of Toronto Seismic Design Team (UTSD) is comprised of both engineering and architectural undergraduates who collaborate on designing, building, and analyzing a scaled balsa wood model of a high rise structure.
                  <br /><br />
                  In the annual EERI Undergraduate Seismic Design Competition (SDC), the team will be judged on the structural model’s seismic performance, delivery of an oral presentation, poster design, architectural design and general workmanship.
                  Collectively, all of these criteria are captured in a final score called the Final Annual Building Income (FABI) which is used to determine the winner.
                  <br /><br />
                  By designing a robust yet cost effective structure, UTSD team members are given an excellent hands-on opportunity to learn the basic principles of structural and seismic engineering in an out of classroom environment.
                  Scroll down to learn more about the team this year!
                  </p>
                </div>
              </div>
            </div>

            <div className="row mb-5">
              <div className="col-lg text-center">
                <h1> Meet the Team! </h1>
              </div>
            </div>

            <div className="row mb-5 mr-2 ml-2">
              <div className="row">
                <Profile 
                  image="leads-2022-2023/kaison.jpeg" 
                  memberName="Siu Kai (Kaison) Cheung" 
                  role="Team Co-Captain"
                  discipline="Civil Engineering, 4th year + PEY"
                  linkedin="https://www.linkedin.com/in/siu-kai-cheung/"
                  github="https://github.com/kaison428"
                  // Portfolio kaisoncheung.me
                  blurb="Kaison joined the team in his first year, and he has taken on multiple roles since then, including Design and Analysis, Construction, and Webmaster. He enjoys working with people from different disciplines and building something impressive together. He is excited to see what the team can accomplish this year and hopes everyone will benefit from the team experience." />
                
                <Profile 
                  image="leads-2022-2023/grace.jpg" 
                  memberName="Yuqi (Grace) Hu"
                  role="Team Co-Captain"
                  discipline="Civil Engineering, 3rd year + PEY"
                  linkedin="https://www.linkedin.com/in/yuqi-grace-hu-a32065194/"
                  blurb="Grace is excited about her fourth year on the team and looks forward to learning more about structural/earthquake engineering. She enjoys discussing seismic design and construction challenges with her teammates. As a team co-captain this year, she would like to introduce earthquake engineering to more people and build a team that everyone can be proud of." />
              </div>
            </div>
            
            <div className="row mb-5 mr-2 ml-2">
              <h2 className="big-font text-dark mb-5"> Team Directors </h2>
              <div className="row">                   
                <Profile 
                  image="leads-2022-2023/michael metallo.png" 
                  memberName="Michael Metallo" 
                  role="Executive Director" 
                  discipline="Civil Engineering, 4th year + PEY"
                  linkedin="https://www.linkedin.com/in/michael-metallo-4a4323185/"
                  blurb="Michael joined UTSD in order to gain a better understanding of structural engineering and learn more about optimizing construction. He thinks that UTSD provides a great opportunity for anyone to learn about both building design and construction in a fun team environment." />

                <Profile 
                  image="leads-2022-2023/dana.jpg" 
                  memberName="Dana Aladallal" 
                  role="Social Manager" 
                  discipline="Civil Engineering, 3rd year + PEY"
                  linkedin="https://www.linkedin.com/in/dana-aladallal-59406b225"
                  blurb="Dana has always been fascinated by the science behind earthquake engineering and has always wanted to explore the technology and design around it. As a social manager, she aims to connect and motivate the team in order to achieve outstanding results. A personal fun fact would be her love for the colour green!" />                  
              </div>
            </div>

            <div className="row mb-5 mr-2 ml-2">
              <h2 className="big-font text-dark mb-5"> Design and Analysis Specialists </h2>
              <div className="row">
                <Profile 
                    image="leads-2022-2023/ishaan.jpg" 
                    memberName="Ishaan Singh Chandok" 
                    role="Senior Design and Analysis Specialists"
                    discipline="Mathematics and Physics Specialist, 4th year"
                    blurb="Ishaan is working on finding methods to aid in the design of the competition tower. Some projects he is interested in include using an iterative procedure to find redundant sections and to use topology optimization to inspire initial designs for the tower. " />
                
                <Profile 
                  image="leads-2022-2023/mihir.jpeg" 
                  memberName="Mihir Agarwal" 
                  role="Junior Design and Analysis Specialists"
                  discipline="Civil Engineering, 2nd year"
                  linkedin="https://www.linkedin.com/in/mihir-agarwal-423b6520a/"
                  blurb="Mihir is a Second Year Civil Engineering student at the University of Toronto. He is very excited to be in UTSD as it gives him the exposure to practical projects. He intends to major in structural engineering which is why he finds UTSD to be crucial and expects his role and experience with the team to be incredibly fruitful. He is really excited to understand the impacts of Programming and Artificial Intelligence into the design aspects of Structural and Civil Engineering. He loves to travel and sings a lot. He follows and plays a lot of sports such as Cricket and Football. " />

                <Profile 
                  image="leads-2022-2023/arman.jpeg" 
                  memberName="Arman Bains" 
                  role="Junior Design and Analysis Specialists"
                  discipline="Civil Engineering, 3rd year + PEY"
                  linkedin="https://www.linkedin.com/in/arman-singh-bains"
                  blurb="Arman is a returning executive member, previously the Finance Executive for the team. What interested him to join was the ability to gain experience in various engineering software used in the industry and gain technical knowledge. In the role of Junior Design and Analysis Specialist, he would like to work on developing the code for Auto Builder in the design. Arman hopes to gain more technical experience and to develop relationships with the team members. During time off, Arman enjoys to go biking on the Humber Trail. " />

                <Profile 
                  image="leads-2022-2023/queena.jpeg" 
                  memberName="Yuyin (Queena) Zheng" 
                  role="Junior Design and Analysis Specialists"
                  discipline="Civil Engineering, 3rd year + PEY"
                  linkedin="https://linkedin.com/in/yuyinqueenazheng-uoft"
                  blurb="Yuyin Queena Zheng is a CIV2T3 + PEY. She is currently in her PEY term this year. She is interested in joining UTSD because she would love to explore a bit more about structural engineering as a big fan of skyscrapers! She hopes to contribute to the structural design and material testing in the design and analysis team. Her goal for this experience on the team would be to collaborate with teammates to achieve good results in the competition, and also to meet more amazing people sharing the common passion for structural engineering. A fun fact about her is that she loves trying different sports." />

                <Profile 
                  image="leads-2022-2023/prapti.jpeg" 
                  memberName="Syeda Rana Prapti" 
                  role="Junior Design and Analysis Specialists"
                  discipline="Civil Engineering, 3rd year + PEY"
                  linkedin="https://www.linkedin.com/in/syeda-rana-prapti"
                  blurb="Prapti has a strong passion towards pursuing structural engineering after graduation. She joined the seismic design team to enhance her understanding of the structural concepts and utilize a team learning environment to further cultivate her design and analysis skills. " />
                
                <Profile 
                  image="leads-2022-2023/awale.jpg" 
                  memberName="Awale Omar" 
                  role="Junior Design and Analysis Specialists" 
                  discipline="Civil Engineering, 3rd year + PEY"
                  blurb="Awale is passionate about structural engineering and is eager to find ways to develop his skills in the field such as being on UTSD. He plans to work on shear wall and damper design. The end goal is to improve his skills in structural software and help the team attain success in the upcoming competition. On the weekends he loves to unwind by watching soccer." />

                <Profile 
                  image="leads-2022-2023/isha.jpg" 
                  memberName="Isha Miftahul" 
                  role="Junior Design and Analysis Specialists" 
                  discipline="Civil Engineering, 3rd year"
                  linkedin="https://www.linkedin.com/in/ishamiftahul/"
                  blurb="Isha is returning from her summer work term, where she discovered her love for hands-on projects. She joined seismic to further apply her theoretical learning and explore her interest in structural design and analysis. She is also looking forward to collaborating with like-minded peers and acquiring technical skills. During her free time, Isha enjoys reading and kickboxing!" />

                <Profile 
                  image="leads-2022-2023/luana.jpeg" 
                  memberName="Luana Zang" 
                  role="Junior Design and Analysis Specialists" 
                  discipline="Civil Engineering, 2nd year"
                  linkedin="https://www.linkedin.com/in/luana-zang-914a55218"
                  blurb="Luana took architecture courses in high school and gained interests in civil engineering, furthermore, UTSD. She looks forward in utilizing her passion in infrastructures to enhance the influence of UTSD. Luana hopes to gain great experience to aid her in becoming a reliable engineer. (She was in a marching band too 😝)" />

                <Profile 
                  image="leads-2022-2023/joyce.jpeg" 
                  memberName="Joyce Zhong" 
                  role="Junior Design and Analysis Specialists" 
                  discipline="Civil Engineering, 2nd year"
                  linkedin="https://www.linkedin.com/in/joyce-zhong-736480230"
                  blurb="Joyce joined the seismic design team with an interest in building analysis and architectural design. She wants to learn and improve with the team together to enrich her knowledge and skills in this specific area. She is super excited about this new experience and look forward to build a great year with the team." />
              </div>
            </div>

            <div className="row mb-5 mr-2 ml-2">
              <h2 className="big-font text-dark mb-5"> Construction Leads </h2>
              <div className="row">
                <Profile 
                  image="leads-2022-2023/rusafa.jpg" 
                  memberName="Rusafa Rahman"
                  role="Construction - Project Management Specialist" 
                  discipline="Civil Engineering, 3rd year"
                  linkedin="https://www.linkedin.com/in/rusafa-rahman-6161b2225/"
                  blurb="Passionate for project management and finds structural analysis challenging, therefore UTSD is the perfect opportunity to gain experience in these core civil engineering fields. Intends to contribute to the overall organization and management of construction. Excited to meet new faces and form connections and LIVES for Italian food." />

                <Profile 
                  image="leads-2022-2023/sacha.jpg" 
                  memberName="Sacha Morin" 
                  role="Construction - Project Management Specialist" 
                  discipline="Civil Engineering, 2nd year"
                  linkedin="https://www.linkedin.com/in/sachamorinn"
                  blurb="Sacha is looking forward to joining UTSD for his first year as a team member! He is looking forward to expanding his knowledge from small residential homes in the world of tall buildings. He is eager to take on the challenge of building as quickly as possible a tower consisting of small wooden pieces." />                
              
              <Profile 
                  image="leads-2022-2023/ananya.jpeg" 
                  memberName="Ananya Saigal" 
                  role="Construction - BIM & Manufacture Specialist" 
                  discipline="Industrial Engineering, 2nd year"
                  linkedin="https://www.linkedin.com/in/ananya-saigal"
                  github="https://github.com/ananya-saigal"
                  blurb="Ananya joined the seismic team to learn and experiment with new construction and fabrication technologies. She is excited to work with this innovative team; she want to contribute in creating an amazing tower together. She enjoys working with others and looks forward to learning from her team mates." />

              <Profile 
                  image="leads-2022-2023/michelle.jpg" 
                  memberName="Meixi (Michelle) Zhou" 
                  role="Construction - BIM & Manufacture Specialist" 
                  discipline="Civil Engineering, 3rd year + PEY"
                  linkedin="https://www.linkedin.com/in/meixi-zhou-1637401b7"
                  blurb="Meixi (Michelle) is currently on PEY as Structural Designer Intern. She finds that UTSD provides her a great opportunity to learn both technical and soft skills and connect with experienced Alumni that will be helpful to my future career. She is excited to be a part of the team and solve challenges we might face in the future." />
              </div>
            </div>

            <div className="row mb-5 mr-2 ml-2">
              <h2 className="big-font text-dark mb-5"> Multimedia </h2>
              <div className="row">
                <Profile 
                  image="leads-2022-2023/abubukker.jpeg" 
                  memberName="Abubukker Chaudhary" 
                  role="Digital Solution Specialist"
                  discipline="Electrical & Computer Engineering, 2nd year" 
                  linkedin="https://www.linkedin.com/in/abubukker-chaudhary-b111591b7/"
                  github="https://github.com/LunarFang416"
                  blurb="Abubukker joined the seismic team as wanted to connect with people from different fields of study and help them in their line of work with his expertise. In his free time he likes to watch anime and code." />
                
                <Profile 
                  image="leads-2022-2023/michael nguyen.jpg" 
                  memberName="Michael (Viet Minh) Nguyen" 
                  role="Digital Solution Specialist" 
                  discipline="Computer Engineering, 2nd year"
                  linkedin="https://www.linkedin.com/in/nvmichael/"
                  blurb="Michael was looking to gain experience in web & software development. Knowing that UTSD members are very supportive and are willing to help him learn new programming skills, Michael was very interested and applied to join the team. He’s looking forward to learn and apply 3D modelling to the team’s websites and projects. He likes pineapple pizza." />
                 
                <Profile 
                  image="leads-2022-2023/ajinkya.jpg" 
                  memberName="Ajinkya Bhosale" 
                  role="Digital Solution Specialist" 
                  discipline="Computer Science, 2nd year"
                  github="https://github.com/Ajinkya-B"
                  blurb="Ajinkya joined the Seismic Design Team to learn the basics of structural design and the computer science practices used in seismic engineering. He looks forward to collaborating with people from various disciplines in a fun and energetic environment. In his free time, Ajinkya enjoys playing Cricket, Badminton, and watching anime." />

                <Profile 
                  image="leads-2022-2023/meg sarah.jpeg" 
                  memberName="Meg Sarah Melendres" 
                  role="Media and Graphic Designer" 
                  discipline="Engineering Science (Infrastructure Option), 3rd year + PEY"
                  linkedin="https://www.linkedin.com/in/meg-sarah-melendres-2578541b1"
                  blurb="Meg was interested in joining as the concept of building a tower using woods appealed to her. It was similar to when she made an Eiffel Tower using matchsticks. Through her position as a Media and Graphic Designer, she would want to promote the amazing work the team is doing to encourage more people to join the team. Aside from her role, she also expects to learn the technicalities of designing buildings and pick up some technical skills if an opportunity comes. Meg is currently in her PEY in Alberta and has been hiking. Every time she gets home, she learns she always rips her pants on hikes.  " />
              </div>
            </div>

            <div className="row mb-5 mr-2 ml-2">
              <h2 className="big-font text-dark mb-5"> Architecture </h2>
              <div className="row">
                <Profile 
                  image="leads-2022-2023/adela.jpg" 
                  memberName="Adela Hua" 
                  role="Architecture Manager"
                  discipline="Architecture Studies, 4th year" 
                  linkedin="https://www.linkedin.com/in/abubukker-chaudhary-b111591b7/"
                  // Portfolio https://makurophage.wixsite.com/portfolio
                  blurb="Adela is a fourth-year Architectural Studies Design Specialist student with a particular interest in visualization and graphic representation. This will be her third year working with the team, and she is currently most excited about the expanded architecture roles and architecture mini-projects as well as new construction methods to be tested before the competition. She designs and draws characters in her free time." />
                
                <Profile 
                  image="leads-2022-2023/adrian.jpg" 
                  memberName="Adrian Yu"
                  role="Architecture Design Specialist" 
                  discipline="Architecture Studies, 3rd year"
                  linkedin="https://www.linkedin.com/in/adrian-y-549b7818a"
                  // instagram www.instagram.com/visuals.trance
                  instagram="https://www.instagram.com/artofadrn"
                  blurb="Adrian joined the Seismic Design Team because of the learning opportunities a collaboration between engineers and architects provides. With a background in architectural design, photography, and 3D visualization, he hopes to assist the team in the design process and help produce compelling visuals. Adrian also enjoys playing ice hockey and badminton in his free time." />
                 
                 <Profile 
                  image="leads-2022-2023/rahat.jpeg" 
                  memberName="Rahat Mirza"
                  role="Architecture Design Specialist" 
                  discipline="Architecture Studies, 2nd year"
                  blurb="Rahat is a current second-year architecture student who joined the seismic team to enrich her knowledge of the integration between design and structure. She wishes to gain valuable experience and looks forward to learning from her peers. During her free time, she can be found either catching up on lost sleep or re-watching the office." />
              </div>
            </div>

            <div className="row mb-5 mr-2 ml-2">
              <h2 className="big-font text-dark mb-5"> Finance </h2>
              <div className="row">                   
                <Profile 
                  image="leads-2022-2023/bo.jpg" 
                  memberName="Bo Zhao" 
                  role="Finance & Sponsorship Manager" 
                  discipline="Civil Engineering, 4th year + PEY"
                  linkedin="https://www.linkedin.com/in/bo-zhao-70bb36175/"
                  blurb="Bo Zhao is a student interested in architecture, construction and building science engineering. This is his fourth year as a member of the UTSD and has helped out in different functions such as graphics/media, design & analysis, construction and architecture. He continues to be involved with the UTSD as the community within the club is what keeps bringing him back. As he is away on PEY, he will take a more limited role in supporting the club as a finance/sponsorship lead. " />
                
                <Profile 
                  image="leads-2022-2023/adam.jpeg" 
                  memberName="Yikai (Adam) Liu" 
                  role="Finance & Sponsorship Manager" 
                  discipline="Civil Engineering, 4th year"
                  linkedin="https://www.linkedin.com/in/yikai-liu-418825198"
                  blurb="Adam joined seismic team in second year as a general member, and has been involved in both Design and Analysis and Construction team. This year He hopes to make the team successful through funding initiatives and sponsorships, and he is excited to work with this innovative team this year." />

                <Profile 
                  image="leads-2022-2023/sunny.jpg" 
                  memberName="Yuyang (Sunny) Liu" 
                  role="Finance & Sponsorship Manager" 
                  discipline="Rotman Commerce, 3rd year"
                  blurb="Sunny joined UTSD to help sponsors team to facilitate sponsorships and to communicate with potential and signed sponsors. His will and expectation is that UTSD gathers enough funds to support their project on the competition. Fun fact: He likes playing all kinds of sports, particularly badminton, Ping-Pong, tennis, and basketball." />                  
              </div>
            </div>

          </div>
        </Container>
        <Footer />
      </div>
    );
  }
}
