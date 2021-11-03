
import './App.css';
import Headliner from './components/headliner/Headliner';
import img1 from './assets/images/image1.jpg';
import img2 from './assets/images/image2.jpg';
import img3 from './assets/images/image3.jpg';
import img4 from './assets/images/image4.jpg';
import img5 from './assets/images/image5.jpg';
import img6 from './assets/images/image6.jpg';
import New from './components/new/New';
import img1New from './assets/images/New/image1.jpg'; 
import img2New from './assets/images/New/image2.jpg'; 
import img3New from './assets/images/New/image3.jpg'; 
import Channel from './components/channel/Channel';
import channelImg1 from './assets/images/Channel/img1.png';
import channelImg2 from './assets/images/Channel/image2.png';
import channelImg3 from './assets/images/Channel/image3.png';
import channelImg4 from './assets/images/Channel/image4.png';
import channelImg5 from './assets/images/Channel/image5.png';
import channelImg6 from './assets/images/Channel/image6.png';
import Sort from './components/sort/Sort';
import sortImg1 from './assets/images/Header/Sort/img1.png';
import sortImg2 from './assets/images/Header/Sort/img2.png';
import sortImg3 from './assets/images/Header/Sort/img3.png';
import Form from './components/form/Form';
import headerButton from './assets/images/Header/button.png';
import headerUser from './assets/images/Header/user.png';

import Navigation from './components/navigation/Navigation';
import logo from './assets/images/Navigation/logo-01 1 (1).jpg';
import icon1 from './assets/images/Navigation/icon1.svg';
import navigationImg1 from './assets/images/Navigation/icon1.svg';
import navigationImg2 from './assets/images/Navigation/icon2.svg';
import navigationImg3 from './assets/images/Navigation/icon3.svg';
import navigationImg4 from './assets/images/Navigation/icon4.svg';
import navigationImg5 from './assets/images/Navigation/icon5.svg';
import navigationImg6 from './assets/images/Navigation/icon6.svg';
import navigationImg7 from './assets/images/Navigation/icon7.svg';
import sidebarImg from './assets/images/sidebar/fire.svg';
import SectionTitle from './components/sectionTitle/SectionTitle';

const data = {
  name: 'icon-username',
}




function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="headerLeft">
          <Sort thumbnail={sortImg1} title="San Francisco, California"/>
          <Sort thumbnail={sortImg2} title="Analysis"/>
          <Sort thumbnail={sortImg3} title="Monthly"/>
        </div>
        <div className="headerRight">
        <Form/>
        <img src={headerButton} alt="" />
        <img className="headerUser" src={headerUser} alt="" />
        </div>
      
      </header>
      
      <aside className="sidebar">
        <div className="sidebarTop">
          <img className="sidebarLogo" src={logo} alt="" />
          <div className="navigationBox">
            <ul className="navigationList">
              
            <li className="navigationItem">
                <a className="navigationLink" href="">
                  <Navigation title="Home" 
                              name="icon01" 
                              viewbox='0 0 24 23' 
                              width='24' 
                              height='23'/>
                  </a>
                </li>

              <li className="navigationItem">
                <a className="navigationLink" href="">
                  <Navigation title="Explore"
                              name="icon02" 
                              viewbox='0 0 24 24' 
                              width='24' 
                              height='24'
                /></a>
              </li>

              <li className="navigationItem">
                <a className="navigationLink" href="">
                  <Navigation title="Saved" 
                              name="icon03" 
                              viewbox='0 0 18 24' 
                              width='18' 
                              height='24'
              /></a>
              </li>
              
              <li className="navigationItem">
                <a className="navigationLink" href="">
                  <Navigation title="Subscriptions" 
                              name="icon04" 
                              viewbox='0 0 24 24' 
                              width='24' 
                              height='24'
                /></a>
              </li>

              <li className="navigationItem">
                <a className="navigationLink" href="">
                  <Navigation title="Messages" 
                              name="icon05" 
                              viewBox="0 0 24 19"
                              width='24' 
                              height='19'
                /></a>
              </li>

              <li className="navigationItem">
                <a className="navigationLink" href="">
                  <Navigation title="Settings" 
                              name="icon06" 
                              viewbox='0 0 24 24' 
                              width='24' 
                              height='24'
                /></a>
              </li>
            </ul>

            <div className="navigationLogout">
              <Navigation title="Logout" 
                          name="icon07" 
                          viewbox='0 0 24 24' 
                          width='24' 
                          height='24'
              />
              <hr className="sidebarLine" align="center"/>              
            </div>
          </div>
        </div>
        
      
        
      
      
        <div className="sidebarBottom">
          <div className="sidebarCard">
            <img className="sidebarImg" src={sidebarImg} alt=""/>
            <h3 className="sidebarTitle">Subscribe to our
            new plan <span className="sidebarMany">$25</span></h3>
            <p className="sidebarText">It is a limited time offer that will expire soon.</p>
            <button className="sidebarBtn">Subscribe now</button>
          </div>          
        </div>
      </aside>
      
      <main className="main">
        <section className="channel">
        <SectionTitle title="Explore Channels"/>
        
        <div className="channelWrapper">
          <Channel title="FOX NEWS" thumbnail={channelImg1}/>
          <Channel title="CW6 NEWS" thumbnail={channelImg2}/>
          <Channel title="ABC NEWS" thumbnail={channelImg3}/>
          <Channel title="AL JAZEERA" thumbnail={channelImg4}/>
          <Channel title="BBC NEWS" thumbnail={channelImg5}/>
          <Channel title="CNN NEWS" thumbnail={channelImg6}/>
        </div>

        </section>
        
        <section className="headliner">
          <SectionTitle title="Today’s Headlines"/>
          <div className="block-content">
            <Headliner title="Hate speech vs free speech" thumbnail={img1} label="BBC NEWS"/>
            <Headliner title="Ontario Liberal leadership" thumbnail={img2} label="BBC NEWS"/>
            <Headliner title="Victim of Scarborough" thumbnail={img3} label="BBC NEWS"/>
            <Headliner title="Mother who left her baby" thumbnail={img4} label="ABC NEWS"/>
            <Headliner title="Mother of Stefanie Rengel" thumbnail={img5} label="CW6 NEWS"/>
            <Headliner title="World   Cup: Popular items" thumbnail={img6} label="CNN NEWS"/>
          </div>
        </section>

        <section className="new">
        <SectionTitle title="Featured News"/>
        <div className="block-content">
          <New title="Travellers to pay more than $2K, Trudeau says" thumbnail={img1New} label="BBC NEWS"/>
          <New title="Myanmar’s military seizes control of country ov  er..." thumbnail={img2New} label="CNN NEWS"/>
          <New title="Pressure builds for Biden to cancel other pipeline..." thumbnail={img3New} label="BBC NEWS"/>
        </div>
        </section>

        {/* </div> */}
      
        
      </main>



    </div>
  );
}

export default App;
