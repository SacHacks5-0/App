import React, { useState } from 'react'
import { Card, Text, Metric, Flex, AreaChart } from '@tremor/react';
import { Bar } from 'react-chartjs-2';
import './LoanRiskPredictor.css'
import Select from 'react-select'
import myImage from './image.png'
function LoanRiskPredictor() {
  const [showImage, setShowImage] = useState(false);
  const [intrestRate] = useState('5.5%');
  const [lowerIncomeBound, setLowerIncomeBound] = useState(0);
  const [upperIncomeBound, setUpperIncomeBound] = useState(0);
  const [selectedCreditScore, setSelectedCreditScore] = useState(null);
  const [selectedLoanTerm, setSelectedLoanTerm] = useState(null);
  const [creditScoreLowerBound, setCreditScoreLowerBound] = useState(0);
  const [creditScoreUpperBound, setCreditScoreUpperBound] = useState(0);
  const [loanTermLowerBound, setLoanTermLowerBound] = useState(0);
  const [loanTermUpperBound, setLoanTermUpperBound] = useState(0);


  
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
      



      // when calculate is clicked send data to backend
      const handleCalculate = () => {
        // You can access the selected values from the state variables
        console.log('Selected Credit Score:', selectedScore);
        console.log('Selected Marital Status:', selectedMaritalStatus);
        console.log('Selected Income:', selectedIncome);
        console.log('Selected Education Level:', selectedEducationLevel);
        console.log('Selected Loan Term:', selectedLoanTerm);
    
        // You can perform calculations or any other logic here with the selected data
        const selectedIncomeValue = selectedIncome.value;
        console.log(selectedIncomeValue)
        // Here, you can define your logic to calculate the lower and upper income bounds
        switch (selectedIncomeValue) {
          case '30-40K':
            setLowerIncomeBound(30000);
            setUpperIncomeBound(40000);
            break;
          case '50-75K':
            setLowerIncomeBound(50000);
            setUpperIncomeBound(75000);
            break;
          case '100-150K':
            setLowerIncomeBound(100000);
            setUpperIncomeBound(150000);
            break;
          case '150-250K':
            setLowerIncomeBound(150000);
            setUpperIncomeBound(250000);
            break;
          case '250K+':
            setLowerIncomeBound(250000);
            setUpperIncomeBound(Infinity); // Use Infinity for the upper bound
            break;
          default:
            // Handle the case when no option is selected
            setLowerIncomeBound(0);
            setUpperIncomeBound(0);
        }
        const selectedCreditScoreValue = selectedScore ? selectedScore.value : null;
        const selectedLoanTermValue = selectedLoanTerm ? selectedLoanTerm.value : null;

        // Define your logic to calculate credit score bounds based on selectedCreditScoreValue
        let creditScoreLowerBound = 0;
        let creditScoreUpperBound = 0;

        if (selectedCreditScoreValue === 'Excellent') {
          creditScoreLowerBound = 800;
          creditScoreUpperBound = Infinity; // No upper bound
        } else if (selectedCreditScoreValue === 'Good') {
          creditScoreLowerBound = 750;
          creditScoreUpperBound = 799;
        } else if (selectedCreditScoreValue === 'Fair') {
          creditScoreLowerBound = 650;
          creditScoreUpperBound = 749;
        } else if (selectedCreditScoreValue === 'Poor') {
          creditScoreLowerBound = 550;
          creditScoreUpperBound = 649;
        } else if (selectedCreditScoreValue === 'Bad') {
          creditScoreLowerBound = 0;
          creditScoreUpperBound = 549;
        } else {
          // Handle the case when no option is selected
          creditScoreLowerBound = 0;
          creditScoreUpperBound = 0;
        }

        // Define your logic to calculate loan term bounds based on selectedLoanTermValue
        let loanTermLowerBound = 0;
        let loanTermUpperBound = 0;

        if (selectedLoanTermValue === '5') {
          loanTermLowerBound = 5;
          loanTermUpperBound = 5;
        } else if (selectedLoanTermValue === '10') {
          loanTermLowerBound = 10;
          loanTermUpperBound = 10;
        } else if (selectedLoanTermValue === '15') {
          loanTermLowerBound = 15;
          loanTermUpperBound = 15;
        } else if (selectedLoanTermValue === '30') {
          loanTermLowerBound = 30;
          loanTermUpperBound = 30;
        } else {
          // Handle the case when no option is selected
          loanTermLowerBound = 0;
          loanTermUpperBound = 0;
        }

        // Set the credit score bounds and loan term bounds in state
        setCreditScoreLowerBound(creditScoreLowerBound);
        setCreditScoreUpperBound(creditScoreUpperBound);
        setLoanTermLowerBound(loanTermLowerBound);
        setLoanTermUpperBound(loanTermUpperBound);
        console.log(creditScoreLowerBound, " ", creditScoreUpperBound);
        setShowImage(true);
      };

      let sendUpdates = () =>{

      }


      

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
        <div className="result">
            {/* <AreaChart /> */}
            <Card className="card" maxWidth="max-w-md">

              <Text>Predictions</Text>
                <Flex>
                  <Metric>
                    From: {upperIncomeBound}
                  </Metric>
                  <Text>To: {lowerIncomeBound}</Text>
                </Flex>
                {showImage && <img src={myImage} alt="#" className="my-image"/>}
            </Card>
            <div className="info">
                <p className="info-tag">
                  IntrestRate: {intrestRate}
                </p>
                <p className="info-tag">
                  UpperIncome: {upperIncomeBound}
                </p>
                <p className="info-tag">
                  lowerIncomeBound: {lowerIncomeBound}
                </p>
                <p className="info-tag">
                  lower Credit Limit: {creditScoreLowerBound}
                </p>
                <p className="info-tag">
                  upper Credit Limit: {creditScoreUpperBound}
                </p>
                

            </div>


        </div>
    </div>
    
  )
}

export default LoanRiskPredictor