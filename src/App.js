
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
import Navigation from './components/navigation/Navigation';
import navigationImg1 from './assets/images/Header/Navigation/img1.png';


function App() {
  return (
    <div className="App">
      <header className="header">
        <Navigation thumbnail={navigationImg1}/>
      </header>
      <aside className="sidebar">aside</aside>
      <main className="main">
      <section className="channel">
        <div className="wrap">
        <h2 className="block-title">Explore Channels</h2>
        <button>See all</button>
        </div>
        <div className="block-contentNew">
          <Channel title="FOX NEWS" thumbnail={channelImg1}/>
          <Channel title="CW6 NEWS" thumbnail={channelImg2}/>
          <Channel title="ABC NEWS" thumbnail={channelImg3}/>
          <Channel title="AL JAZEERA" thumbnail={channelImg4}/>
          <Channel title="BBC NEWS" thumbnail={channelImg5}/>
          <Channel title="CNN NEWS" thumbnail={channelImg6}/>
        </div>

        </section>
        
        <section className="headliners">
          <h2 className="block-title">Today’s Headlines</h2>
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
        <h2 className="block-title">Featured News</h2>
        <div className="block-content">
          <New title="Travellers to pay more than $2K, Trudeau says" thumbnail={img1New} label="BBC NEWS"/>
          <New title="Myanmar’s military seizes control of country ov  er..." thumbnail={img2New} label="CNN NEWS"/>
          <New title="Pressure builds for Biden to cancel other pipeline..." thumbnail={img3New} label="BBC NEWS"/>
        </div>
        </section>

      
        
        
      </main>



      


















    </div>
  );
}

export default App;
