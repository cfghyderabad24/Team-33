import { Routes, Route } from 'react-router-dom';
import FarmerDashboard from './components/FarmerDashboard';
import Header from './components/Header';
import Admin from './components/Admin';
import LandingPage from './components/landingpage/LandingPage';
import SignUpForm from './components/signup/SignUpForm';
import Login from './components/login/Login'
import Availability from './components/Availibilities';
import Report from './components/Report';
import Availabilityf from './components/Availibilitiesf';
import AllFarmers from './components/AllFarmers';
import { Navigate } from 'react-router-dom';
import Notify from './components/Notify';
import AddFarmer from './components/addFarmer/AddFarmer';
import WeatherApp from './components/weather/WeatherApp'
import Schemes from './components/schemes/Schemes';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
    <Header/>
      <div className='content' style={{marginTop:'50px'}}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/farmerdashboard" element={<FarmerDashboard />} />
          <Route path="/signup" element={<SignUpForm/>} />
          <Route path="/login" element={<Login/>} />
          <Route path='/availablef' element={<Availabilityf/>}/>
          <Route path='/weather' element={<WeatherApp/>}/>
          <Route path='/schemes' element={<Schemes/>}/>
          <Route path='/report' element={<Report/>}/>
          <Route path='/admin' element={<Admin/>}>
            <Route path='all-farmers' element={<AllFarmers/>}/>
            <Route path='add-farmer' element={<AddFarmer/>}/>
            <Route path='notify-farmers' element={<Notify/>}/>
            <Route path='available' element={<Availability/>}/>
            <Route path='queries' element={<SignUpForm/>}/>
            <Route path='danger' element={<SignUpForm/>}/>
            <Route path="" element={<Navigate to="all-farmers" replace={true}/>}/>
          </Route>

        </Routes>
      </div>
      <div className='mt-3'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
