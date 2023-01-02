export var status;
(function (status) {
  status["single"] = "single";
  status["married"] = "married";
})(status || (status = {}));

const allowance = {
  marriedPersonAllowance: 240000,
  basic: 132000,
};

const maximumDeduction = {
  mpf: 60000,
};

  export function countTotalAllowance(status) {
    if (status === status.married) {
      totalAllowance += allowance.marriedPersonAllowance;
    }
    totalAllowance += allowance.basic;
  }
  export function countTotalDeduction() {
    if (mpfRate > maximumDeduction.mpf) {
      throw new Error(" have exceeed the maximum deduction ");
    }
    totalDeduction = mpfRate;
  }
  export function countNetChargeableIncome() {
    console.log("total allowance :", totalAllowance);
    console.log("total deduction :", totalDeduction);
    return (netChargeableIncome =
      income - totalDeduction - totalAllowance);
  }
  export function countJointAssement() {}
