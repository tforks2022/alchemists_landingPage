import './App.css';
import Footer from './components/Footer';
import Topbar from './components/Topbar';
import logo from './assets/img/logo.png';
import GlobalFonts from './fonts/fonts';

function App() {
  return (
      <div className="App" style={{ position: 'relative', minHeight: '100vh' }}>
        <img alt="logo" src={logo} className='App-logo' />
        <h1 className="App-title">ALCHEMISTS FINANCE</h1>
        <p className="App-header">The First Auto-Profit Yield Maximiser, ever</p>

        <p className="App-header" style={{marginTop:'2%', color:'#b68ac9', fontFamily:'Papyrus', fontSize:'3vh'}}>Token value keep dropping when auto-compound?</p>
        <p className="App-header" style={{marginTop:'-2%', color:'#b68ac9', fontFamily:'Papyrus', fontSize:'3vh'}}>Why not TAKE-PROFIT along with the auto-compounding?</p>

        <p className="App-header" style={{marginTop:'0%', color:'#93c47d', fontFamily:'Papyrus', fontSize:'4vh'}}>Brewing Auto-profit...</p>
        <Topbar/>

        {/*<Footer/>*/}
      </div>
  );
}

export default App;


