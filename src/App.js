import logo from './logo.svg';
import './App.css';
import { StyledGraphic } from './components/scrollblock';
import Basemap from './components/map';
import BasemapChart from './components/map-chart';


function App() {
  return (
    <div className="" style={{ width: "100%" }}>

      <div className="header" style={{ width: "100vw", display: "flex", alignItems:"center", justifyContent: "center", paddingTop: "50px" }}>

        <div className="title" style={{ width: "30vw", padding: "20px"}}>
          <h1> TITOLO TIPO GENDER INEQUALITIES IN THE PACIFIC TERRITORIES</h1>
        </div>
        <div className="statement" style={{ width: "40vw", padding: "20px"}}>
          <h3>Gender inequalities in education increase child marriage, exposition to violence and decrease wages</h3>
          <p>Questa è la spiegazione sintetica di quello che si vedrà nella scrollstory. Un paragrafo fatto di un modesto numero di parole, scritto in inglese. Per riempire questo spazio ripeto lo statement: Gender inequalities in education increase child marriage, exposition to violence and decrease wages. Un'altra volta: Gender inequalities in education increase child marriage, exposition to violence and decrease wages.<br />Questa font pair e usata da Federica Fragapane nelle sue data viz. Il background color e l'HEX #f0ede6</p>
        </div>

      </div>

      <Basemap />
      <BasemapChart />
      <StyledGraphic />

    </div>
  );
}

export default App;
