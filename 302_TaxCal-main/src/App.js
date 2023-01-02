import { useState } from "react";
import "./App.css";
import { Tax } from "./group/Tax.js";

function App() {
  const [selfincome, setSelfIncome] = useState(0);
  const [spouseincome, setSpouseIncome] = useState(0);
  const [status, setStatus] = useState("single");
  const [showDiv, setShowDiv] = useState(false);

  const showdiv = () => {
    if (status === "single") {
      setShowDiv(true);
    } else {
      setShowDiv(false);
    }
  };

  const multisubmit = () => {
    submitHandler();
    submitHandler3();
  };

  const submitHandler = () => {
    var mpfRate = Tax.mpfRate;
    var mpf = document.getElementById("mpfrate");
    var result = document.getElementById("getPayableTax");
    var standard = document.getElementById("standardrate");
    var netChargeIncome = document.getElementById("netchargeincome");
    var Allowance = document.getElementById("allowance");

    var mpfRate2 = Tax.mpfRate;
    var mpf2 = document.getElementById("mpfrate2");
    var result2 = document.getElementById("getPayableTax2");
    var standardrate2 = document.getElementById("standardrate2");
    var netChargeIncome2 = document.getElementById("netchargeincome2");
    var Allowance2 = document.getElementById("allowance2");

    var totalTaxPay = document.getElementById("totaltax");

    const t = new Tax(selfincome, "single", mpfRate);
    t.countmpfrate();
    t.checkStandardRate();
    t.countTotalAllowance();
    t.countTotalDeduction();
    t.countNetChargeableIncome();
    t.calculatePayableTax();

    t.standardRate();
    t.netChargeIncome();
    t.totalallowance();

    const t2 = new Tax(spouseincome, "single", mpfRate2);
    t2.countmpfrate();
    t2.checkStandardRate();
    t2.countTotalAllowance();
    t2.countTotalDeduction();
    t2.countNetChargeableIncome();
    t2.calculatePayableTax();

    t2.standardRate();
    t2.netChargeIncome();
    t2.totalallowance();

    mpf.innerHTML = t.countmpfrate();
    result.innerHTML = t.getPayableTax();
    standard.innerHTML = t.standardRate();
    netChargeIncome.innerHTML = t.netChargeIncome();
    Allowance.innerHTML = t.totalallowance();

    mpf2.innerHTML = t2.countmpfrate();
    result2.innerHTML = t2.getPayableTax();
    standardrate2.innerHTML = t2.standardRate();
    netChargeIncome2.innerHTML = t2.netChargeIncome();
    Allowance2.innerHTML = t2.totalallowance();

    var totalresult = document
      .getElementById("getPayableTax")
      .innerHTML.replace("$", "");
    var totalresult = +totalresult;
    var totalresult2 = document
      .getElementById("getPayableTax2")
      .innerHTML.replace("$", "");
    var totalresult2 = +totalresult2;

    var totaltaxP = (totalresult += totalresult2);

    totalTaxPay.innerHTML = totaltaxP;
  };

  const submitHandler3 = () => {
    var result5 = document.getElementById("jointincome");

    var result3 = document.getElementById("getPayableTax3");
    var standardrate3 = document.getElementById("standardrate3");
    var netChargeIncome3 = document.getElementById("netchargeincome3");
    var Allowance3 = document.getElementById("allowance3");

    var income1 = document.getElementById("selfincome").value;
    var income1 = +income1;
    var income2 = document.getElementById("spouseincome").value;
    var income2 = +income2;
    var jointincome = (income1 += income2);

    var totalmpf = document.getElementById("jointmpf");
    var mpf1 = document.getElementById("mpfrate").innerHTML.replace("$", "");
    var mpf1 = +mpf1;
    var mpf2 = document.getElementById("mpfrate2").innerHTML.replace("$", "");
    var mpf2 = +mpf2;
    var jointmpf = (mpf1 += mpf2);

    result5.innerHTML = jointincome;
    totalmpf.innerHTML = jointmpf;

    const t3 = new Tax(jointincome, "married", jointmpf);
    t3.checkStandardRate();
    t3.countTotalAllowance();
    t3.countTotalDeduction();
    t3.countNetChargeableIncome();
    t3.calculatePayableTax();

    t3.standardRate();
    t3.netChargeIncome();
    t3.totalallowance();

    result3.innerHTML = t3.getPayableTax();
    standardrate3.innerHTML = t3.standardRate();
    netChargeIncome3.innerHTML = t3.netChargeIncome();
    Allowance3.innerHTML = t3.totalallowance();
  };

  return (
    <div className="App">
      <h2 className="Taxheader">
        Please enter your information to count your payable Tax.
      </h2>
      <div className="maincontainer">
        {/* Self  */}
        <div className="container">
          <div className="income">
            <h2>Self</h2>
            <p className="incomeP">Total Income (HKD $)</p>
            <input
              type="number"
              id="selfincome"
              value={selfincome}
              placeholder="Income"
              onChange={(e) => setSelfIncome(parseInt(e.target.value))}
            />
          </div>

          <div className="mpf">
            <p className="mpfP">mpfRate</p>
            <p id="mpfrate"> </p>
          </div>

          <div className="resultP">
            <p>At Standard Rate : </p>
            <p id="standardrate"> </p>
          </div>
          <div className="resultP">
            <p>Net Chargeable Income : </p>
            <p id="netchargeincome"> </p>
          </div>
          <div className="resultP">
            <p>Total Allowance is : </p>
            <p id="allowance"> </p>
          </div>
          <div className="resultP">
            <p>Total Payable Tax is : </p>
            <h3 id="getPayableTax"> </h3>
          </div>
        </div>

        {/* Spouse  */}
        {showDiv ? (
          <div className="container2">
            <div className="income">
              <h2>Spouse</h2>
              <p className="incomeP">Total Income (HKD $)</p>
              <input
                type="number"
                id="spouseincome"
                value={spouseincome}
                placeholder="Income"
                onChange={(e) => setSpouseIncome(parseInt(e.target.value))}
              />
            </div>

            <div className="mpf">
              <p className="mpfP">mpfRate</p>
              <p id="mpfrate2"> </p>
            </div>

            <div className="resultP">
              <p>At Standard Rate : </p>
              <p id="standardrate2"> </p>
            </div>
            <div className="resultP">
              <p>Net Chargeable Income : </p>
              <p id="netchargeincome2"> </p>
            </div>
            <div className="resultP">
              <p>Total Allowance is : </p>
              <p id="allowance2"> </p>
            </div>
            <div className="resultP">
              <p>Total Payable Tax is : </p>
              <h3 id="getPayableTax2"> </h3>
            </div>
          </div>
        ) : (
          <null />
        )}

        {/* Total Tax  */}
        {showDiv ? (
          <div className="TotalTax">
            <div className="resultP">
              <p>Total Payable Tax by YOU and your SPOUSE : </p>
              <h4 id="totaltax"> </h4>
            </div>
          </div>
        ) : (
          <null />
        )}

        {/* Joint  */}
        {showDiv ? (
          <div className="container3">
            <div className="jointincome">
              <h2>Joint</h2>
              <p className="incomeP">Total Income (HKD $)</p>
              <p id="jointincome"></p>
            </div>

            <div className="jointmpf">
              <p className="mpfP">Joint mpfRate</p>
              <p id="jointmpf"></p>
            </div>

            <div className="resultP">
              <p>At Standard Rate : </p>
              <p id="standardrate3"> </p>
            </div>
            <div className="resultP">
              <p>Net Chargeable Income : </p>
              <p id="netchargeincome3"> </p>
            </div>
            <div className="resultP">
              <p>Total Allowance is : </p>
              <p id="allowance3"> </p>
            </div>
            <div className="resultP">
              <p>Total Payable Tax is : </p>
              <h4 id="getPayableTax3"> </h4>
            </div>
          </div>
        ) : (
          <null />
        )}

        <div className="statusandsubmit">
          <div className="status">
            <p className="statusP">Status</p>
            <select
              id="status"
              value={status}
              onChange={(e) => {
                setStatus(e.target.value);
                showdiv();
              }}
            >
              <option value="single">Single</option>
              <option value="married">Married</option>
            </select>
          </div>
          <div>
            <button
              type="submit"
              onClick={() => multisubmit()}
              className="submit"
            >
              Count
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
