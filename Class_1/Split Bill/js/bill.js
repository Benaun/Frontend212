/* bill.js */

export default class Bill {
  constructor() {
      this.amounts = [];
  }

  /** @param {string} amountStr */
  addAmount(amountStr) {
		const amountNum = Number.parseInt(amountStr, 10);

    this.amounts.push(amountNum);
    return this.amounts;
  }
	
	getCount(){
    return this.amounts.length;
  }

  getTotal(){
    return this.amounts.reduce((current, total) => current + total);
  }

  getAverage(){
    return this.getTotal() / this.getCount();
  }
}