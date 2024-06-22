import { Routes, Route } from 'react-router-dom';
import FarmerDashboard from './components/FarmerDashboard';
import Climate from './components/Climate';
import Header from './components/Header';
import Admin from './components/Admin';
import LandingPage from './components/landingpage/LandingPage';
import SignUpForm from './components/signup/SignUpForm';
function App() {
  return (
    <div className="App">
    <Header/>
      <div className='content' style={{marginTop:'50px'}}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/farmerdashboard" element={<FarmerDashboard />} />
          <Route path="/signup" element={<SignUpForm/>} />
          <Route path="/login" element={<SignUpForm/>} />
          <Route path='/climate' element={<Climate/>}/>
          <Route path='/admin' element={<Admin/>}>
            <Route path='all-farmers' element={<SignUpForm/>}/>
            <Route path='notify-farmers' element={<SignUpForm/>}/>
            <Route path='classify-farmers' element={<SignUpForm/>}/>
            <Route path='crop' element={<SignUpForm/>}/>
            <Route path='queries' element={<SignUpForm/>}/>
            <Route path='danger' element={<SignUpForm/>}/>
          </Route>

        </Routes>
      </div>
    </div>
  );
}

export default App;
