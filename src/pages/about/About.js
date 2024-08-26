import React, { Component } from "react";
import "../../App.css";
import AppNavbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Profile from "../../components/Profile";
// import { Link } from 'react-router-dom';
import { Container } from "reactstrap";

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
                    The University of Toronto Seismic Design Team (UTSD) is
                    comprised of both engineering and architectural
                    undergraduates who collaborate on designing, building, and
                    analyzing a scaled balsa wood model of a high rise
                    structure.
                    <br />
                    <br />
                    In the annual EERI Undergraduate Seismic Design Competition
                    (SDC), the team will be judged on the structural model’s
                    seismic performance, delivery of an oral presentation,
                    poster design, architectural design and general workmanship.
                    Collectively, all of these criteria are captured in a final
                    score called the Final Annual Building Income (FABI) which
                    is used to determine the winner.
                    <br />
                    <br />
                    By designing a robust yet cost effective structure, UTSD
                    team members are given an excellent hands-on opportunity to
                    learn the basic principles of structural and seismic
                    engineering in an out of classroom environment. Scroll down
                    to learn more about the team this year!
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
                {/* <Profile
                  image="leads-2022-2023/kaison.jpeg"
                  memberName="Siu Kai (Kaison) Cheung"
                  role="Team Co-Captain"
                  discipline="Civil Engineering, 4th year + PEY"
                  linkedin="https://www.linkedin.com/in/siu-kai-cheung/"
                  github="https://github.com/kaison428"
                  portfolio="kaisoncheung.me"
                  blurb="Kaison joined the team in his first year, and he has taken on multiple roles since then, including Design and Analysis, Construction, and Webmaster. He enjoys working with people from different disciplines and building something impressive together. He is excited to see what the team can accomplish this year and hopes everyone will benefit from the team experience."
                /> */}
                <Profile
                  image="leads-2023-2024/sacha.jpg"
                  memberName="Sacha Morin"
                  role="Team Co-Captain"
                  discipline="CIV2T5"
                  linkedin="www.linkedin.com/in/sachamorinn"
                  blurb="Joining the team for a second year, I'm interested to find out about the responsibilities and abilities needed to lead such a large team. I expect for the team to find the best way to organize and construct the tower. Fun fact, I am from Canada's capital city!"
                />

                <Profile
                  image="leads-2023-2024/yuqi.jpg"
                  memberName="Yuqi (Grace) Hu"
                  role="Team Co-Captain"
                  discipline="CIV2T3+PEY"
                  linkedin="https://www.linkedin.com/in/yuqi-grace-hu-a32065194/"
                  blurb="Grace is interested in structural design and earthquake engineering and has joined the UTSD in her first-year university. With her five years of experience in UTSD, she wants to apply her knowledge in design and construction to enhance the technical aspect of the team while fostering a positive team culture. As a team co-captain, she hopes everyone can benefit from this team experience and have fun this year."
                />
              </div>
            </div>

            {/* <div className="row mb-5 mr-2 ml-2">
              <h2 className="big-font text-dark mb-5"> Team Directors </h2>
              <div className="row">
                <Profile
                  image="leads-2022-2023/michael metallo.jpeg"
                  memberName="Michael Metallo"
                  role="Executive Director"
                  discipline="Civil Engineering, 4th year + PEY"
                  linkedin="https://www.linkedin.com/in/michael-metallo-4a4323185/"
                  blurb="Michael joined UTSD in order to gain a better understanding of structural engineering and learn more about optimizing construction. He thinks that UTSD provides a great opportunity for anyone to learn about both building design and construction in a fun team environment."
                />
              </div>
            </div> */}

            <div className="row mb-5 mr-2 ml-2">
              <h2 className="big-font text-dark mb-5"> Architecture </h2>
              <div className="row">
                <Profile
                  image="leads-2023-2024/geng.jpg"
                  memberName="Anna Geng"
                  role="Architecture Design Specialist"
                  discipline="ARC2T6"
                  linkedin="linkedin.com/in/anna-geng"
                  blurb="This is Anna's second year in architecture and first year at UTSD. She joined the team to learn about the engineering and construction side of built projects. She is knowledgeable in architectural programming, design, and visualization in stills and videos. In her free time, Anna loves to explore different forms of art."
                />
              </div>
            </div>

            <div className="row mb-5 mr-2 ml-2">
              <h2 className="big-font text-dark mb-5">
                {" "}
                Design and Analysis Specialists{" "}
              </h2>
              <div className="row">
                <Profile
                  image="leads-2023-2024/joyce.jpg"
                  memberName="Joyce Zhong"
                  role="Senior Design and Analysis Specialists"
                  discipline="CIV2T5 + PEY"
                  linkedin="https://www.linkedin.com/in/joyce-zhong-736480230"
                  blurb="Joyce joined the seismic design team with an interest in building analysis and architectural design. She wants to learn and improve with the team together to enrich her knowledge and skills in this specific area. She is super excited about this new experience and look forward to build a great year with the team."
                />

                <Profile
                  image="leads-2023-2024/awale.jpg"
                  memberName="Awale Omar"
                  role="Senior Design and Analysis Specialists"
                  discipline="CIV2T3 + PEY"
                  linkedin="https://www.linkedin.com/in/awale-omar-64785a145"
                  blurb="Awale is passionate about structural engineering and is eager to find ways to develop his skills in the field such as being on UTSD. He plans to work on shear wall and damper design. The end goal is to continue to develop his skills in seismic design and help the team attain success in the upcoming competition. On the weekends he loves to unwind by watching soccer."
                />

                <Profile
                  image="leads-2023-2024/prapti.jpg"
                  memberName="Prapti Syeda Rana"
                  role="Senior Design and Analysis Specialists"
                  discipline="CIV2T3+PEY"
                  linkedin="https://www.linkedin.com/in/syeda-rana-prapti"
                  blurb="Syeda Rana Prapti is finishing her PEY CO-OP this summer and starting her 4th year in the fall of 2023. This is her second year on the team, and she is excited to utilize her cultivated knowledge and skills. As part of the club, she expects to hone her practical skills while learning new elements of the seismic design of the tower. A fun little fact about her: she was a black belt in Taekwondo."
                />

                <Profile
                  image="leads-2023-2024/bright.jpg"
                  memberName="Bright Lin"
                  role="Senior Design and Analysis Specialists"
                  discipline="CIV 2T3 + PEY"
                  blurb="Bright is a CIV 2T3 + PEY student interested in structural design. He wishes to win the Seismic Design Competition with an innovative design. He has years of experience with modelling structures and hopes he can be of help to the team. His expectations are that everyone also strives to do their best for the sake of wining the competition. Fun fact, he loves photography."
                />

                <Profile
                  image="leads-2023-2024/james.jpg"
                  memberName="James Bannister"
                  role="Junior Design and Analysis Specialists"
                  discipline="CIV2T3 + PEY"
                  linkedin="https://www.linkedin.com/in/james-bannister-531159207"
                  blurb="James has a strong interest in structural engineering and a fascination with seismic design. In this position, he hopes to design structures to withstand seismic forces and collaborate with fellow members to create innovative solutions. He looks forward to gaining practical experience, expanding his network, and making a positive impact within the seismic design community. James enjoys hiking, rock climbing, and playing the piano and trumpet in his spare time."
                />
                <Profile
                  image="leads-2023-2024/ivan.jpg"
                  memberName="Ivan Ngai"
                  role="Junior Design and Analysis Specialists"
                  discipline="CIV2T5 + PEY"
                  linkedin="https://www.linkedin.com/in/ivan-ngai-a821951a7"
                  blurb="Ivan has always been curious about how structures are built the way they are, he thinks that joining UTSD might be the best way to find out. He is eager to learn SAP2000 as he wants to pursue a career in structural related field. FUN FACT: It's physically impossible for pigs to look up into the sky"
                />
                <Profile
                  image="leads-2023-2024/amina.jpg"
                  memberName="Amina Al Maleh"
                  role="Junior Design and Analysis Specialists"
                  discipline="CIV2T3 + PEY"
                  blurb="Amina is a soon to be fourth year civil engineering student studying at the University of Toronto (CIV2T3+PEY). Seismic/structural engineering sparked her interest throughout her PEY Co-op term as she work with engineers to complete studies on Canadian embassies around the world, to ensure they are suitable to withstand design seismic events. Amina is looking to get more experience in structural design and is looking forward to working with her peers."
                />
                <Profile
                  image="leads-2023-2024/yijing.jpg"
                  memberName="YiJing (Grace) Zhang"
                  role="Junior Design and Analysis Specialists"
                  discipline="CIV2T3 + PEY"
                  linkedin="https://www.linkedin.com/in/grace-yijing-zhang-333b261b4"
                  blurb="Grace is very excited to join UTSD this year! She is eager to explore more about structural engineering and gain experience in structural design. She looks forward to learning new skills and collaborating with people who share the same passion. During her spare time, she enjoys playing sports and music instruments."
                />
                <Profile
                  image="leads-2023-2024/kelly.jpg"
                  memberName="Kelly Wu"
                  role="Junior Design and Analysis Specialists"
                  discipline="CIV2T7 + PEY"
                  linkedin="http://www.linkedin.com/in/kelly-wu-25a8621b6"
                  blurb="Kelly is in her first year of civil engineering. She joined UTSD hoping to make new friends, learn from her mentors and peers, and get a feel of what it's like getting involved in seismic engineering. She looks forward to gaining valuable learning experience from her team and from their upcoming competitions. Kelly loves to play American football, go to the gym, and spend quality time with friends!"
                />
                <Profile
                  image="leads-2023-2024/leila.jpg"
                  memberName="Leila Rashidian"
                  role="Junior Design and Analysis Specialists"
                  discipline="ARC2T5"
                  linkedin="https://ca.linkedin.com/in/leila-rashidian-042312230"
                  portfolio="https://issuu.com/leila.rashidian/docs/rashidian_leila_portfolio"
                  blurb="Leila joined UTSD to engage in a collaborative project with fellow students from both disciplines. Using her prior knowledge in architectural design and fabrication, she is excited to immerse herself in the team's activities while utilizing this opportunity to become proficient in advanced structural analysis software. A fun fact about Leila would be that she was born in England, grew up in Iran and Egypt, until finally coming to Toronto."
                />
                <Profile
                  image="leads-2023-2024/jerome.jpg"
                  memberName="Jerome Moo Lew"
                  role="Junior Design and Analysis Specialists"
                  discipline="CIV2T5"
                  linkedin="http://linkedin.com/in/jerome-moo-lew-7846a6230"
                  blurb="Leila joined UTSD to engage in a collaborative project with fellow students from both disciplines. Using her prior knowledge in architectural design and fabrication, she is excited to immerse herself in the team's activities while utilizing this opportunity to become proficient in advanced structural analysis software. A fun fact about Leila would be that she was born in England, grew up in Iran and Egypt, until finally coming to Toronto."
                />
                <Profile
                  image="leads-2023-2024/rayan.jpg"
                  memberName="Rayan Sibai"
                  role="Junior Design and Analysis Specialists"
                  discipline="CIV2T5 + PEY"
                  linkedin="https://www.linkedin.com/in/rayan-sibai/"
                  blurb="Rayan is a motivated and aspiring third-year civil engineering student with a keen interest in structural engineering. Rayan aims to contribute expertise, creativity, and a strong work ethic to advance the team's pursuit of excellence. He is eager to work on challenging projects, , collaborate with a dedicated team, and gain practical experience. Rayan expects this experience to provide valuable insights into real-world engineering practices, foster personal and professional growth, and make a meaningful impact within the team."
                />
                <Profile
                  image="leads-2023-2024/jaidyn.jpg"
                  memberName="Jaidyn Duan"
                  role="Junior Design and Analysis Specialists"
                  discipline="ENGSCI2T7+PEY"
                  blurb="Jaidyn joined the seismic design team to explore what it means to design and test buildings that are safe for everyone. She wants to contribute to structural design and analysis within the team and learn from motivated, like-minded peers.  In her free time, Jaidyn enjoys jogging and participating in sports. She is super excited about this new experience and looks forward to meeting everyone!"
                />
              </div>
            </div>

            <div className="row mb-5 mr-2 ml-2">
              <h2 className="big-font text-dark mb-5"> Construction Leads </h2>
              <div className="row">
                <Profile
                  image="leads-2023-2024/fabio.jpg"
                  memberName="Fabio Karanja"
                  role="Construction - Project Manager"
                  discipline="CIV2T5 + PEY"
                  linkedin="http://linkedin.com/in/fabio-karanja"
                  blurb="Fabio joined the seismic design team during his second year. He enjoys designing, buildings, and management which is why he became a Construction project manager for the team for the 2023-2024 team. He is exited to gain new skills in 3D modelling software and CAD software which will aid him in pursuing his career, which will take the form of a mix of structural engineering and construction management. He expects the experience to be fun, challenging, and interesting. A fun fact about Fabio is that he can play the guitar and piano and speak 3 languages."
                />

                <Profile
                  image="leads-2023-2024/freddy.jpg"
                  memberName="Freddy Fisher"
                  role="Construction - Project Manager"
                  discipline="CIV2T5 + PEY"
                  linkedin="https://www.linkedin.com/in/frederic-cannon-fisher-b34484256/"
                  blurb="Freddy joined UTSD because of his fascination for buildings and his eagerness for solving problems. He is looking forward to helping manage the construction of this year's tower alongside a group of motivated individuals. Born and raised in New York City, Freddy gained much of his passion for construction and architecture growing up in the concrete jungle."
                />

                <Profile
                  image="leads-2023-2024/jung.jpg"
                  memberName="Anna Jung"
                  role="Construction Specialist"
                  discipline="EngSci 2T5"
                  github="https://github.com/anna-jung"
                  blurb="Anna has a strong passion towards structural engineering after taking CIV102 in Year 1. She joined the Seismic Design Team to enhance her understanding of the structural engineering and design as well as gaining hands-on experience. She is eager to be part of the team and explore different techniques to shorten the overall construction time of a tower made of balsa wood."
                />
              </div>
            </div>

            <div className="row mb-5 mr-2 ml-2">
              <h2 className="big-font text-dark mb-5">
                {" "}
                Digital Solution Specialists{" "}
              </h2>
              <div className="row">
                <Profile
                  image="leads-2023-2024/ajinkya.jpg"
                  memberName="Ajinkya Bhosale"
                  role="Digital Solution Specialist"
                  discipline="Computer Science, 3rd year"
                  linkedin="https://www.linkedin.com/in/ajinkyabhosale-"
                  github="https://github.com/Ajinkya-B"
                  blurb="Ajinkya joined the Seismic Design Team to learn the basics of structural design and the computer science practices used in seismic engineering. He looks forward to collaborating with people from various disciplines in a fun and energetic environment. In his free time, Ajinkya enjoys playing Cricket, Badminton, and watching anime."
                />
                <Profile
                  image="leads-2023-2024/michael.jpg"
                  memberName="Michael (Viet Minh) Nguyen"
                  role="Digital Solution Specialist"
                  discipline="ECE2T5 + PEY"
                  linkedin="https://www.linkedin.com/in/nvmichael/"
                  blurb="Michael was looking to gain experience in web & software development. Knowing that UTSD members are very supportive and are willing to help him learn new programming skills, Michael was very interested and applied to join the team. He’s looking forward to learn and apply 3D modelling to the team’s websites and projects. He likes pineapple pizza."
                />
              </div>
            </div>
            {/* 
            <div className="row mb-5 mr-2 ml-2">
              <h2 className="big-font text-dark mb-5"> Multimedia </h2>
              <div className="row">
                
              </div>
            </div> */}

            <div className="row mb-5 mr-2 ml-2">
              <h2 className="big-font text-dark mb-5"> Finance </h2>
              <div className="row">
                <Profile
                  image="leads-2023-2024/sodaba.jpg"
                  memberName="Sodaba Nooristani"
                  role="Finance & Sponsorship Manager"
                  discipline="CIV2T5+PEY"
                  linkedin="https://www.linkedin.com/in/sodaba-nooristani-6453611b5/"
                  blurb="As a CIV2T5 student pursuing a business minor, the Finance position at UTSD is perfect for Sodaba. She looks forward to working with the team to contribute reaching the teams goals, as well as learn from her teammates. In her free time, Sodaba likes to read, bike and find new parts of her ears to pierce."
                />
                <Profile
                  image="leads-2023-2024/arman.jpg"
                  memberName="Arman Bains"
                  role="Finance & Sponsorship Manager"
                  discipline="Civil Engineering, 3rd year + PEY"
                  linkedin="https://www.linkedin.com/in/arman-singh-bains"
                  blurb="Arman has been a part of the design team since the last three years and have enjoyed being  a member each year. Last year he was one of the Junior DN&A in the team and the year before that the Finance Executive. This year he has the opportunity to be the Sponsorship Executive for the team and looks forward to networking and bringing in new sponsors and funding. A fun fact about him is that he enjoys biking on the Humber trail when the weather permits."
                />
              </div>
            </div>
          </div>
        </Container>
        <Footer />
      </div>
    );
  }
}
