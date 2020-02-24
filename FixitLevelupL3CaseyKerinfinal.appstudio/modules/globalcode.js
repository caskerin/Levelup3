let loopBegin = prompt('To use the calculator type start, otherwise type end')
while(loopBegin == 'start'){
 
 let openingStatement = prompt('Which function do you want to use? Type: Home or Car')
  if (openingStatement =='Home') {
 
  let oneHome = prompt('What is the principle payment?')
  let twoHome = prompt('What is the interest payment in decimal form?')
  let threeHome = prompt('What is the amount of months 180 or 360?')
  
  let homeMonthly = homeLoanPayment(oneHome, twoHome, threeHome)
  alert(`A home loan for ${oneHome} over ${threeHome} months at ${twoHome} interest would have a monthly payment of ${homeMonthly}!`)
  }
  
  
else if (openingStatement =='Car') {
 
  let oneCar = prompt('What is the principle payment?')
  let twoCar = prompt('What is the interest payment in decimal form?')
  let threeCar = prompt('What is the amount of months 180 or 360?')
  
  let carMonthly = carLoanPayment(oneCarprinciple, twoCarinterest, threeCar)
  alert(`A home loan for ${oneCarprinciple} over ${threeCar} months at ${twoCarinterest} interest would have a monthly payment of ${carMonthly}!`)
  } 
  }
  
  
  
  
  
  
  
  