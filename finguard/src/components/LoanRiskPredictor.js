import React, { useState } from 'react'
import './LoanRiskPredictor.css'
import Select from 'react-select'
function LoanRiskPredictor() {

    const creditScores = [
        { value: 'Excellent', label: '800+' },
        { value: 'Good', label: '750-799' },
        { value: 'Fair', label: '650-749' },
        { value: 'Poor', label: '550-649' },
        { value: 'Bad', label: '(Below 549)'}
      ];
      const [selectedScore, setSelectedScore] = useState(null);

      const handleScoreChange = (selectedOption) => {
        setSelectedScore(selectedOption);
      };

      const maritalStatusOptions = [
        { value: 'single', label: 'Single' },
        { value: 'married', label: 'Married' },
        // Add more options as needed
      ];
      const [selectedMaritalStatus, setSelectedMaritalStatus] = useState(null);

      const incomeOptions = [
        { value: '30-40K', label: '30,000 - 40,000' },
        { value: '50-75K', label: '50,000 - 75,000' },
        { value: '100-150K', label: '100,000 - 150,000' },
        { value: '150-250K', label: '150,000 - 250,000' },
        { value: '250K+', label: '250,000+' },
      ];

      const [selectedIncome, setSelectedIncome] = useState(null);

      const educationLevelOptions = [
        { value: 'highschool', label: 'High School' },
        { value: 'bachelor', label: 'Bachelor' },
        { value: 'master', label: 'Master' },
        { value: 'phd', label: 'Ph.D.' },
        // Add more options as needed
      ];
      const [selectedEducationLevel, setSelectedEducationLevel] = useState(null);


      const loanTermOptions = [
        { value: '5', label: '5 years'},
        { value: '10', label: '10 years'},
        { value: '15', label: '15 years' },
        { value: '30', label: '30 years' },
        // Add more options as needed
      ];
      const [selectedLoanTerm, setSelectedLoanTerm] = useState(null);


      // when calculate is clicked 
      const handleCalculate = () => {
        // You can access the selected values from the state variables
        console.log('Selected Credit Score:', selectedScore);
        console.log('Selected Marital Status:', selectedMaritalStatus);
        console.log('Selected Income:', selectedIncome);
        console.log('Selected Education Level:', selectedEducationLevel);
        console.log('Selected Loan Term:', selectedLoanTerm);
    
        // You can perform calculations or any other logic here with the selected data
      };

  return (
    <div className="main-c">
        {/* <header className="header"></header> */}
        <div className="input-commands">
            <div className="info-con">
                <h1>Inputs</h1>
            </div>
            
            <div className="info-con">
                <p>CreditScore:</p>
                <Select
                 value={selectedScore}
                 onChange={handleScoreChange}
                 options={creditScores}
                 placeholder='Select a Credit Score'
                />
            </div>


            <div className="info-con">
                <p>Martial status:</p>  
                <Select
                    value={selectedMaritalStatus}
                    onChange={(selectedOption) => setSelectedMaritalStatus(selectedOption)}
                    options={maritalStatusOptions}
                    placeholder="Select Marital Status"
                />
            </div>

            <div className="info-con">
                <p>Income:</p>
                <Select
                    value={selectedIncome}
                    onChange={(selectedOption) => setSelectedIncome(selectedOption)}
                    options={incomeOptions}
                    placeholder="Select Income"
                />
            </div>

            <div className="info-con">
                <p>Education Level:</p>
                <Select
                    value={selectedEducationLevel}
                    onChange={(selectedOption) => setSelectedEducationLevel(selectedOption)}
                    options={educationLevelOptions}
                    placeholder="Select Education Level"
                />
            </div>

            <div className="info-con">
                <p>Loan Term:</p>
                <Select
                    value={selectedLoanTerm}
                    onChange={(selectedOption) => setSelectedLoanTerm(selectedOption)}
                    options={loanTermOptions}
                    placeholder="Select Loan Term"
                />
            </div>
            
            {/* <div className="info-con">    
                <p>Fico Score</p> credit and Fico are the same thing
            </div> */}

            <div className="btn-con">
                <button className="Calculate" onClick={handleCalculate}>Calculate</button>
            </div>

            




        </div>
        <div className="result">Results</div>
    </div>
    
  )
}

export default LoanRiskPredictor