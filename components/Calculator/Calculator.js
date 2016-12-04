import React from 'react';
import CalcStyle from './CalcStyle.css';
let calcNumber,operatorStatus = false,operator;

class Calculator extends React.Component{
 
	constructor(){
		super();
	}

	updateCalculator(op,a,b){
		//Mapping for the operator with the value
		let operators = {
		    '+': function(a, b) { return a + b },
		    '-': function(a, b) { return a - b },
		    '*': function(a, b) { return a * b },
		};
		return operators[op](a, b); 
	}

	onItemclick(itemObject,e){
		//Gets the value inside of the clicked element
		calcNumber = e.target.innerText;

		//Status to clear the values in the display
		itemObject.item === "clear" ? 
		(operatorStatus = false, operator = '', this.refs.firstNumber.innerText = '',
		this.refs.secondNumber.innerText = '',this.refs.resultNumber.innerText = ''): false;

		//Get the operator
		itemObject.item === "operator" ? ((operatorStatus = this.refs.firstNumber.innerText.length ? true:false ),
		 operator = calcNumber ): false;

		//If the operator statis is true then the focus displays to second element, else the first element.
		//Anothe checking is also done to avoid the printing of operators and CLR text
		itemObject.item === "number" && !operatorStatus?
		 (this.refs.firstNumber.innerText += calcNumber):
		 ((itemObject.item !== "operator" && itemObject.item !== "getResult" && itemObject.item !== "clear") ? 
		 this.refs.secondNumber.innerText += calcNumber : false);

		//Type the result if the status is getResult
		let getResult =  itemObject.item === "getResult" ? 
		this.updateCalculator(operator,parseInt(this.refs.firstNumber.innerText),
		parseInt(this.refs.secondNumber.innerText)):false;

		getResult ? (this.refs.resultNumber.innerText += getResult):false;
	}

	render(){
		return (
			<div className  = {CalcStyle.calcWrapper}>
				<div ref = "firstNumber" className  = {`firstNum ${CalcStyle.row}`}></div>
				<div ref = "secondNumber" className  = {`secNum ${CalcStyle.row}`} ></div>
				<div ref = "resultNumber" className  = {`resNum ${CalcStyle.row}`} ></div>
				<div className  =  {CalcStyle.calSquare}>
					<div className  >
						<div onClick = {this.onItemclick.bind(this,{item:"operator"})} className  = {CalcStyle.numSquare} >*</div>
						<div onClick = {this.onItemclick.bind(this,{item:"operator"})} className  = {CalcStyle.numSquare} >-</div>
						<div onClick = {this.onItemclick.bind(this,{item:"operator"})} className  = {CalcStyle.numSquare} >+</div>
						<div onClick = {this.onItemclick.bind(this,{item:""})} className  = {CalcStyle.numSquare} >0</div>
					</div>
					<div className >
						<div ref = "getResult" onClick = {this.onItemclick.bind(this,{item:"getResult"})} className  = {CalcStyle.numSquare} >=</div>
						<div onClick = {this.onItemclick.bind(this,{item:"number"})} className  = {CalcStyle.numSquare} >9</div>
						<div onClick = {this.onItemclick.bind(this,{item:"number"})} className  = {CalcStyle.numSquare} >8</div>
						<div onClick = {this.onItemclick.bind(this,{item:"number"})} className  = {CalcStyle.numSquare} >7</div>
					</div>
					<div className  >
						<div onClick = {this.onItemclick.bind(this,{item:""})} className  = {CalcStyle.numSquare} ></div>
						<div onClick = {this.onItemclick.bind(this,{item:"number"})} className  = {CalcStyle.numSquare} >6</div>
						<div onClick = {this.onItemclick.bind(this,{item:"number"})} className  = {CalcStyle.numSquare} >5</div>
						<div onClick = {this.onItemclick.bind(this,{item:"number"})} className  = {CalcStyle.numSquare} >4</div>
					</div>
					<div className >
						<div ref = "clear" onClick = {this.onItemclick.bind(this,{item:"clear"})} className  = {CalcStyle.numSquare}>CLR</div>
						<div onClick = {this.onItemclick.bind(this,{item:"number"})} className  = {CalcStyle.numSquare}>3</div>
						<div onClick = {this.onItemclick.bind(this,{item:"number"})} className  = {CalcStyle.numSquare} >2</div>
						<div onClick = {this.onItemclick.bind(this,{item:"number"})} className  = {CalcStyle.numSquare} >1</div>
					</div>	
				</div>
			</div>
		)
	}
}


export default Calculator;