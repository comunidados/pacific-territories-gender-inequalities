import logo from './logo.svg';
import './App.css';
import { StyledGraphic } from './components/scrollblock';
import Basemap from './components/map';
import BasemapChart from './components/map-chart';
import AlertDialog from './components/modal';
import { Link } from '@mui/material';


function App() {
  return (

    <>

      <div className="header" style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", paddingTop: "50px", margin: 0, padding: 0 }}>

        <div className="title wip" style={{ width: "30vw", padding: "20px" }}>
          <h1>GENDER INEQUALITIES IN THE PACIFIC TERRITORIES</h1>
        </div>
        <div className="statement" style={{ width: "40vw", padding: "20px" }}>
          <h2>Gender inequalities in <span className='education'>education</span> increase <span className='childmarriage'>child marriage</span>, exposition to <span className='violence'>violence</span> and decrease <span className='wage'>wages</span></h2>
          <p>'Being out of school increases girl – especially adolescent girls – risk of marriage and exposure to violence, and limits access to quality health and other services, with long-term consequences for their employment prospects and earnings'.<br />The idea is to check this statement from <Link href="https://www.unicef.org/media/142871/file/Gender%20Annual%20Results%20Report%202022.pdf">Unicef's 2022 Annual Report on Gender Equality</Link> through data analysis, attempting to gain an understanding of what is happening to adolescent girls and women in the Pacific region. Analysis is limited to the administrative areas of Kiribati, Marshall Islands, Nauru, Palau, Tonga, Tuvalu and Vanuatu.</p>
          <p className='wip'>When you come across a paragraph with this background, it means this is a part of the report that has been drafted but not implemented.</p>
          </div>

      </div>

      <Basemap />
      <BasemapChart />
      <AlertDialog />
      {/* <StyledGraphic /> */}

    </>
  );
}

export default App;
