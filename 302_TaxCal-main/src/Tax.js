// class Tax {
//   income = 0;
//   status = undefined;
//   mpfRate = 0;
//   netChargeableIncome = 0; // income - totalDeduction - totalAllowance
//   totalDeduction = 0;
//   totalAllowance = 0;
//   allowance = { marriedPersonAllowance: 264000, basic: 132000 };
//   maximumDeduction = { mpf: 60000 };
//   payableTax = 0;
//   applyStandardRate = false;
//   // taxDeduction: 10000,
//   // isStandardRate : false,

//   constructor(income, status, mpfRate) {
//     this.status = status;
//     this.income = income;
//     this.mpfRate = mpfRate;
//   }

//   getPayableTax() {
//     return this.payableTax;
//   }

//   getStatus() {
//     return this.status;
//   }
//   taxReduction() {
//     this.payableTax -= 10000;
//     console.log("payable tax after tax reduction", this.payableTax);
//     return;
//   }

//   countTotalAllowance() {
//     if (this.status === "married") {
//       this.totalAllowance += this.allowance.marriedPersonAllowance;
//       return;
//     } else if (this.status === "single") {
//       this.totalAllowance += this.allowance.basic;
//       console.log(this.totalAllowance);
//     }
//   }

//   countTotalDeduction() {
//     if (this.mpfRate > this.maximumDeduction.mpf) {
//       throw new Error(" have exceeed the maximum deduction ");
//     }
//     this.totalDeduction = this.mpfRate;
//   }

//   countNetChargeableIncome() {
//     console.log("total allowance :", this.totalAllowance);
//     console.log("total deduction :", this.totalDeduction);
//     if (this.income === 0) {
//       return (this.netChargeableIncome = 0);
//     }
//     this.netChargeableIncome =
//       this.income - this.totalDeduction - this.totalAllowance;
//     console.log("netChargeableIncome :", this.netChargeableIncome);
//     return this.netChargeableIncome;
//   }

//   countNetChargeableIncomeForSt() {
//     return this.income - this.totalDeduction;
//   }

//   checkStandardRate() {
//     if (this.status === "single") {
//       console.log(this.applyStandardRate);

//       if (this.income >= 2022000) {
//         // console.log(this.applyStandardRate);
//         this.applyStandardRate = true;
//       }
//     }
//     if (this.status === "married") {
//       console.log(this.applyStandardRate);

//       if (this.income >= 3144000) {
//         this.applyStandardRate = true;
//       }
//     }
//   }

//   calculatePayableTax() {
//     if (this.applyStandardRate === false) {
//       this.payableTax += Math.min(50000, this.netChargeableIncome) * 0.02;
//       this.payableTax +=
//         Math.max(0, Math.min(100000, this.netChargeableIncome) - 50000) * 0.06;
//       this.payableTax +=
//         Math.max(0, Math.min(150000, this.netChargeableIncome) - 100000) * 0.1;
//       this.payableTax +=
//         Math.max(0, Math.min(200000, this.netChargeableIncome) - 150000) * 0.14;
//       this.payableTax += Math.max(0, this.netChargeableIncome - 200000) * 0.17;

//       if (this.payableTax < 0) {
//         return (this.payableTax = 0);
//       }
//       return (this.payableTax = Math.floor(this.payableTax));
//     } else {
//       this.payableTax = this.countNetChargeableIncomeForSt() * 0.15;
//     }
//     return this.payableTax;
//   }
// }

// // const t = new Tax(this.income, "single", this.mpfRate);

// // // t.checkStandardRate();
// // // t.countTotalAllowance();
// // // t.countTotalDeduction();
// // // t.countNetChargeableIncome();
// // // t.calculatePayableTax();
// // console.log("Payable tax", t.getPayableTax());

// // t.taxReduction();
// // console.log(Tax.taxReduction());
