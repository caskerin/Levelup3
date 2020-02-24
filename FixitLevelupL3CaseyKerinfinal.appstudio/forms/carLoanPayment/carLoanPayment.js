function carLoanPayment(oneCarprinciple, twoCar, threeCar) {
  let answer = oneCarprinciple*(twoCarinterest*(Math.pow(1+twoCarinterest,threeCar))/(Math.pow(1+twoCarinterest,threeCar)-1))
  return answer
  }
  