import { Component } from '@angular/core';

@Component ({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true
})
export class AppComponent {
  title = 'calculator';
  calValue: number = 0;
  funcT: any = 'NoFunction';

  calNumber: string = 'noValue';

  firstNumber: number = 0;
  secondNumber:  number = 0;

  onClickValue (val: string, type: any) {
    if ( type == 'number'){
      this.onNumberClick(val);
    }
    else if ( type == 'function' ){
      this.onFunctionClick(val);
    }
  }
  onNumberClick(val: string){
    if (this.calNumber != 'noValue') {
      this.calNumber = this.calNumber + val;
    }
    else {
      this.calNumber = val;
    }
    this.calValue = parseFloat(this.calNumber);
  }
  onFunctionClick ( val: string ) {
    if ( this.funcT == 'NoFunction' ) {
      this.firstNumber = this.calValue;
      this.calValue = 0;
      this.calNumber = 'noValue';
      this.funcT = val;
    }
    else if ( this.funcT != 'NoFunction' ) {
      this.secondNumber = this.calValue;
      this.valueCalculate(val);
    }
  }
  valueCalculate(val: string) {
    if (val == 'c') {
      this.ClearAll();
    } else if (this.funcT == '+') {
      this.performOperation(this.firstNumber + this.secondNumber, val);
    } else if (this.funcT == '-') {
      this.performOperation(this.firstNumber - this.secondNumber, val);
    } else if (this.funcT == '*') {
      this.performOperation(this.firstNumber * this.secondNumber, val);
    } else if (this.funcT == '/') {
      this.performOperation(this.firstNumber / this.secondNumber, val);
    } else if (this.funcT == '^') {
      this.performOperation(Math.pow(this.firstNumber, this.secondNumber), val);
    } else if (this.funcT == '√') {
      this.performOperation(Math.sqrt(this.firstNumber), val);
    } else if (this.funcT == '!') {
      this.performOperation(this.factorial(this.firstNumber), val);
    }
  }

  performOperation(result: number, val: string) {
    this.calValue = result;
    this.firstNumber = result;
    this.secondNumber = 0;
    this.calNumber = 'noValue';
    this.funcT = val;
    if (val == '=') {
      this.onEqualPress();
    }
  }
  onEqualPress() {
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.funcT ='NoFunction';
    this.calNumber = 'noValue';
  }
  ClearAll() {
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.calValue = 0;
    this.funcT ='NoFunction';
    this.calNumber = 'noValue';
  }
  factorial(n: number): number {
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }
}
