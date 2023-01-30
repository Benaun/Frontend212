/* bill.js */

export default class Bill {
  constructor() {
      this.amounts = [];
  }

  /** @param {string} amountStr */
  addAmount(amountStr) {
		this.amounts.push(amount);
    return this.amount;
  }
	
	getCount(){
    return this.amounts.length;
  }

  getTotal(){
    const result = this.amounts.reduce(function(total, current){
      return total + current
    }, 0);
    return result;
  }

  getAverage(){
    const result = this.amounts.reduce(function(total, current){
      return total + current
    }, 0);
    return result / this.amounts.length;
  }
}