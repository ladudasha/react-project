
import './App.css';
import Headliner from './components/headliner/Headliner';
import img1 from './assets/images/image1.jpg';
import img2 from './assets/images/image2.jpg';
import img3 from './assets/images/image3.jpg';
import img4 from './assets/images/image4.jpg';
import img5 from './assets/images/image5.jpg';
import img6 from './assets/images/image6.jpg';


function App() {
  return (
    <div className="App">
      <header className="header" >header</header>
      <aside className="sidebar">aside</aside>
      <main className="main">
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
      </main>



      


















    </div>
  );
}

export default App;
