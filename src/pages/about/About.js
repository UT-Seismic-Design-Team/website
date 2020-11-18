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
                  image="leads/shirley.jpg" 
                  memberName="Shuocheng (Shirley) Zhang" 
                  role="Team Co-Captain"
                  discipline="Civil Engineering, 3rd year + PEY"
                  linkedin="https://www.linkedin.com/in/shirley-shuocheng-zhang/"
                  blurb="Shirley is currently on PEY as a structural intern. She is interested in buildings/bridge design and structural dynamics. The U of T Seismic Design Team allowed her to meet like-minded individuals and put theoretical knowledge into practice." />
                
                <Profile 
                  image="leads/kota.jpg" 
                  memberName="Kota Abe" 
                  role="Team Co-Captain"
                  discipline="Civil Engineering, 4th year + PEY"
                  linkedin="https://www.linkedin.com/in/kota-abe-b3427a105/"
                  blurb="Kota joined seismic in second year as a general member. Since then, he's enjoyed learning more about earthquake engineering and applying theoretical knowledge on a hands-on project. This year, he's looking forward to further developing the team's side projects and attending the competition in Seattle." />
              </div>
            </div>
            <div className="row mb-5 mr-2 ml-2">
              <h2 className="big-font text-dark mb-5"> Senior Design and Analysis Leads </h2>
              <div className="row">
                <Profile 
                    image="leads/maher.jpg" 
                    memberName="Maher Absar" 
                    role=""
                    discipline="Civil Engineering, 3rd year + PEY"
                    linkedin="https://www.linkedin.com/in/maherabsar/"
                    blurb="Maher joined the Seismic Design Team because of the experiential learning opportunities the tower design process provides. After completing three years of undergraduate civil engineering, he has developed a strong interest in structural engineering. He is excited to be back for his second year on the team and looks forward to tackling new challenges." />

                <Profile 
                  image="leads/daniel.jpg" 
                  memberName="Daniel Pekar" 
                  role=""
                  discipline="Civil Engineering, 4th year + PEY"
                  linkedin="https://www.linkedin.com/in/daniel-pekar/"
                  blurb="Daniel is excited for his fifth year on the team and is looking forward to being part of a growing, highly innovative group. His biggest fears are overlooked rule violations, torsional modes, and forgetting his extra roof plate at home." />
                                
                <Profile 
                  image="leads/alex.jpg" 
                  memberName="Alex Vespa" 
                  role="" 
                  discipline="Civil Engineering, 3rd year + PEY"
                  blurb="Alex is currently on PEY as a structural engineering intern. He joined seismic as an opportunity to learn more about the field of structural engineering and experience the fun of competing with the team. In his free time Alex enjoys playing guitar and soccer." />
                                
                <Profile 
                  image="leads/liam.jpg" 
                  memberName="Liam Ma"
                  role="" 
                  discipline="Civil Engineering, 4th year + PEY"
                  linkedin="https://www.linkedin.com/in/hongyu-liam-ma-206023158/"
                  blurb="This year will mark Liam's fourth consecutive year as a member of this team. Some of his interests include structural engineering, learning mathematics, playing badminton, playing Minecraft, and eating food. His interest in mathematics and engineering compelled him to join the seismic design team, where he learned to apply knowledge learned in the classroom to address a design problem. As a senior lead, he will be handling the new topology optimization project and providing occasional support for the rest of the team." />

              </div>
            </div>
            <div className="row mb-5 mr-2 ml-2">
              <h2 className="big-font text-dark mb-5"> Junior Structural Designer </h2>
              <div className="row">
                <Profile 
                  image="leads/grace.jpg" 
                  memberName="Grace Hu" 
                  role="" 
                  discipline="Civil Engineering, 2nd year"
                  blurb="Grace wants to be a structural engineer, and since building safety under seismic effects is an important design consideration, she wants to learn more about this both theoretically and practically. She is also looking forward to seeing more innovative ideas appear on the tower design this year and learning from other teammates." />
                
                <Profile 
                  image="no_head_shot.jpg" 
                  memberName="Adneen Mir" 
                  role="" 
                  discipline="Civil Engineering, 2nd year"
                  blurb="Adneen joined the Seismic Design Team to learn about the practical applications of engineering. She is looking forward to learn more about structural design and analysis while working among peers who share common interests." />

                <Profile 
                  image="leads/michael.jpg" 
                  memberName="Michael Metallo" 
                  role="" 
                  discipline="Civil Engineering, 3rd year"
                  blurb="Michael joined seismic in order to gain a better understanding of structural engineering and learn more about optimizing construction. He thinks that seismic provides a great opportunity for anyone to learn about both building design and construction in a fun team environment." />

                <Profile 
                  image="leads/bo.jpg" 
                  memberName="Bo Zhao" 
                  role="" 
                  discipline="Civil Engineering, 2nd year"
                  blurb="Bo joined seismic as a graphics and media lead in the school year of 2019-20 because he wanted to be involved with seismic in any way he could and that role was the best fit for him at the time. Outside of school, Bo is involved with the Toronto Chinese Orchestra as an Erhu (Chinese Bowed Fiddle) player." />

                <Profile 
                  image="leads/kaison.jpg" 
                  memberName="Kaison Cheung" 
                  role="" 
                  discipline="Civil Engineering, 3rd year"
                  blurb="Kaison joined seismic to learn different methods and software for structural design. He is excited to work with this innovative team and build an amazing tower together." />

                <Profile 
                  image="leads/adam.jpg"
                  memberName="Adam Liu"
                  role=""
                  discipline="Civil Engineering, 3rd year"
                  blurb="Adam joined seismic team in second year as a general member. He wants to learn more about structural design and optimizing the structure to its best. He really enjoys working with this fun and professional team, and he is excited to work with this innovative team this year."/>

              </div>
            </div>
            <div className="row mb-5 mr-2 ml-2">
              <h2 className="big-font text-dark mb-5"> Construction Leads </h2>
              <div className="row">
                <Profile 
                    image="leads/eliza.jpg" 
                    memberName="Eliza Van Weerdhuizen" 
                    role="" 
                    discipline="Engineering Science (Infrastructure Option), 4th year"
                    blurb="Eliza is really excited to build a big balsa building. She's looking forward to working with the team to make sure we get a tower to Seattle in one glorious piece and improving the construction process." />

                <Profile 
                  image="leads/thea.jpeg" 
                  memberName="Thea Wang" 
                  role="" 
                  discipline="Civil Engineering, 2nd year"
                  blurb="Thea joined the seismic team because she is interested in architecture and construction. She wants to start from the basics of construction and at the same time, learn about design strategies and analysis tools from other team members." />                
              
              <Profile 
                  image="leads/charu.jpeg" 
                  memberName="Charu Tyagi" 
                  role="" 
                  discipline="Civil engineering, 2nd year"
                  linkedin="https://www.linkedin.com/in/charu-tyagi-407763195"
                  blurb="What interests you? What makes you get out of bed and go to classes? Such questions almost made Charu question her existence! But after putting some thought into it with a tub of ice-cream by her side, she decided that her resolute interest is in design and structural marvels, which has now led her to join the Seismic Design Team. She's super excited to work in this team!" />

              </div>
            </div>
            <div className="row mb-5 mr-2 ml-2">
              <h2 className="big-font text-dark mb-5"> Multimedia and Architecture </h2>
              <div className="row">
                <Profile 
                  image="leads/tingyu.jpg" 
                  memberName="Tingyu Liang" 
                  role="Webmaster"
                  discipline="Computer Science, 2nd year" 
                  linkedin="https://www.linkedin.com/in/tingyu-liang/"
                  blurb="Tingyu was initially only looking for the web developer position but turned out to be attracted by the goal of the Seismic Design Team and the concept of structural design. He would like to connect with people from different fields of study and learn from them. For leisure, he watches animes and plays the piano." />
                
                <Profile 
                  image="leads/adela.png" 
                  memberName="Adela Hua" 
                  role="Architecture Lead" 
                  discipline="Architecture, 2nd year"
                  blurb="Adela joined the seismic team not only because she was looking for a challenge related to her field of study, but also because she deemed it a safe point of contact with the otherwise terribly intimidating population of engineers. In her free time she inhales JSTOR articles, draws, and dotes on her aloe plants." />
                 
                <Profile 
                  image="leads/reynold.jpg" 
                  memberName="Reynold Chan" 
                  role="Digital Projects Advisor" 
                  discipline="Engineering Science (Infrastructure Option), 4th Year + PEY"
                  blurb="Reynold is returning from his PEY internship, where he gained a passion for automation in structural engineering. His interest lies within a fully automated workflow and digital transformation applied within structural engineering." />

                <Profile 
                  image="leads/natalie.jpg" 
                  memberName="Natalie Chui" 
                  role="Media and Graphics" 
                  discipline="Engineering Science (Infrastructure Option), 3rd year + PEY"
                  linkedin="https://www.linkedin.com/in/natalie-chui/"
                  blurb="Natalie is currently on PEY. She joined the Seismic Design Team to gain some hands-on design and construction experience, outside of the classroom, that she could utilize as an infrastructure engineering student - while also putting her passion for graphic design to use. She also vows to never use yellow font on a white background, ever." />
                          
              </div>
            </div>

            <div className="row mb-5 mr-2 ml-2">
              <h2 className="big-font text-dark mb-5"> Finance </h2>
              <div className="row">
                                                
              
                <Profile 
                  image="leads/irteza.jpg" 
                  memberName="Irteza Ahmed" 
                  role="Finance and Sponsorship Lead" 
                  discipline="Civil Engineering, 3rd year"
                  linkedin="https://www.linkedin.com/in/i-nahiyan-ahmed/"
                  blurb="Irteza joined the seismic design team because he is fascinated by the design of resilient structures. He hopes to make the team successful through funding initiatives and sponsorships. In his free time, Irteza likes to produce music and code." />
                                        
              </div>
            </div>
          </div>
        </Container>
        <Footer />
      </div>
    );
  }
}
