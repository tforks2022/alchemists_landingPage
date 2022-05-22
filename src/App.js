import logo from './logo.svg';
import './App.css';
import ProgressCountdown from './ProgressCountdown.tsx';
import Footer from './components/Footer';
import Topbar from './components/Topbar';
import gitbookimg from './assets/img/gitbook-logo.png';
import logoimg from './assets/img/sitetittle.png';
import iconimg from './assets/img/onepiece_01.png';


function App() {
  Date.prototype.addMinutes = function(m) {
    this.setTime(this.getTime() + (m*60*1000));
    return this;
  }
  var deadlineGenesis = new Date('2022-06-03 12:00:00').addMinutes(- (new Date().getTimezoneOffset()));
/*   const script = document.createElement("script");

  script.src = "https://widget.gleamjs.io/e.js";
  script.async = true;
  document.body.appendChild(script); */
  return (
    <div className="App" style={{ position: 'relative', minHeight: '100vh' }}>
      
      <header className="App-header">
      {/* <div style={{ display:'flex',justifyContent: 'space-between',marginRight:'15%' }}> */}
      <div style={{ display:'flex',justifyContent: 'space-between',marginRight:'15%' }}>
          <img alt="ONEPIECE Icon" src={iconimg} className='App-coinlogo' />
{/*           <div style={{ display:'flex',justifyContent: 'space-between' }}>
            <a href="https://doc.onepiecefi.io" rel="noopener noreferrer" target="_blank" >
                  <img alt="documentation" src={gitbookimg} className="App-gitbooklogo" description="DOCUMENTATION" />
            </a>
            <a href="https://doc.onepiecefi.io" className="App-doc" target="_blank">DOCUMENTATION</a>
          </div> */}
        {/*   <div className="App-event" style={{ textAlign:'center' }}>
            <h5 className="" style={{ marginTop:'5px' }}>Grab FREE tokens</h5>
            <a href='https://gleam.io/JECg2/onepiece-finance-royal-giveaways'  target="_blank">
              <button class='App-eventbtn'><h5 style={{ lineHeight:1.25,margin:'1px' }}>ROYAL GIVEAWAYS</h5></button>
            </a>  
            <a href='https://gleam.io/M4idW/onepiece-finance-whitelist'  target="_blank">
              <button class='App-eventbtn'><h5 style={{ lineHeight:1.25,margin:'1px' }}>GOLDLIST</h5></button>
            </a>  
          </div> */}
        </div>

      </header>
      <body className="App-body">
        <h3 className="App-comingsoon">JOIN US IN</h3>
        <ProgressCountdown hideBar={true} base={new Date('2022-03-11 00:00:00')} deadline={deadlineGenesis} description="" /> 
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Topbar/>
        <div style={{ marginTop:'-25px',paddingBottom:'25px' }}>
            <a href="https://doc.onepiecefi.io" rel="noopener noreferrer" target="_blank" >
                  <img alt="documentation" src={gitbookimg} className="App-gitbooklogo" description="DOCUMENTATION" />
            </a>
            {/* <a href="https://doc.onepiecefi.io" className="App-doc" target="_blank">DOCUMENTATION</a> */}
          </div>
        {/* <h1 className='App-title'>ONEPIECE FINANCE</h1> */}
        <img alt="ONEPIECE FINANCE" src={logoimg} className='App-logo' />
{/* <div>
<a class="e-widget no-button" href="https://gleam.io/JECg2/onepiece-finance-royal-giveaways" rel="nofollow">OnePiece Finance - Royal Giveaways</a>
</div> */}
      </body>
      
      <Footer/>
    </div>
  );
}

export default App;
