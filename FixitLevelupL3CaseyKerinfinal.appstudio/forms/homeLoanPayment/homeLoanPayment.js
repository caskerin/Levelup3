function homeLoanPayment(oneHome, twoHome, threeHome) {
  let answer = oneHome * (twoHome*(Math.pow(1+twoHome,threeHome))/(Math.pow(1+twoHome,threeHome) -1))
  return answer
  }
  
  