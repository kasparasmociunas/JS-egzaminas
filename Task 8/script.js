/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */



function Calculator(a, b) {
    this.a = a;
    this.b = b;
  }

  let calculator = new Calculator(11, 4);
  
  //!1 Sum
  Calculator.prototype.sum = function () {
    return this.a + this.b;
  };
  console.log(calculator.sum());
  
  //!2 Substraction
  Calculator.prototype.subtraction = function () {
    return this.a - this.b;
  };

  console.log(calculator.subtraction());
  //! 3 Multiplication
  Calculator.prototype.multiplication = function () {
    return this.a * this.b;
  };

  console.log(calculator.multiplication());
  //! 4 Division
  Calculator.prototype.division = function () {
    return this.a / this.b;
    
  };
  console.log(calculator.division());