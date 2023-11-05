
import './App.css';
import LandingPage from './components/LandingPage';
import Register from './components/Register';
import Login from './components/Login';
import LoanRiskPredictor from './components/LoanRiskPredictor';

function App() {
  return (
    <div className="App">
      {/* <LandingPage /> */}
      <LoanRiskPredictor />
    </div>
  );
}

export default App;
