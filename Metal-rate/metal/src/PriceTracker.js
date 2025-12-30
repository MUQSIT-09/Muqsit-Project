import React, { useState } from "react";
import "./PriceTracker.css"; // Import the CSS
import { FaCoins, FaDollarSign } from "react-icons/fa";

export default function PriceTracker() {
  const [metal, setMetal] = useState("XAU");
  const [currency, setCurrency] = useState("INR");
  const [karat, setKarat] = useState("24");
  const [result, setResult] = useState(null);
  const [usdRate, setUsdRate] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = "f3fce71f40bd8238e98e49e77ff53a27";

  const metals = {
    XAU: "Gold",
    XAG: "Silver",
    XPT: "Platinum",
    XPD: "Palladium",
    XRH: "Rhodium",
    XIR: "Iridium",
    XRU: "Ruthenium",
    XCU: "Copper",
    XAL: "Aluminium",
    XNI: "Nickel",
  };

  const currencies = {
    INR: "Indian Rupee",
    PKR: "Pakistani Rupee",
    BDT: "Bangladeshi Taka",
    SAR: "Saudi Riyal",
    OMR: "Omani Rial",
    KWD: "Kuwaiti Dinar",
    BHD: "Bahraini Dinar",
    JOD: "Jordanian Dinar",
    GBP: "British Pound",
    CHF: "Swiss Franc",
    EUR: "Euro",
    USD: "US Dollar",
    JPY: "Japanese Yen",
    AUD: "Australian Dollar",
    CAD: "Canadian Dollar",
    CNY: "Chinese Yuan",
    HKD: "Hong Kong Dollar",
    NZD: "New Zealand Dollar",
  };

  const fetchPrice = () => {
    setLoading(true);
    setError(null);
    setResult(null);
    setUsdRate(null);

    const metalUrl = `https://api.metalpriceapi.com/v1/latest?api_key=${API_KEY}&base=USD&currencies=${metal}`;
    const usdUrl = `https://api.metalpriceapi.com/v1/latest?api_key=${API_KEY}&base=USD&currencies=${currency}`;

    const karatMultiplier = { 24: 1, 22: 22 / 24, 18: 18 / 24, 14: 14 / 24 };

    Promise.all([
      fetch(metalUrl).then((res) => { if (!res.ok) throw new Error("Metal fetch failed"); return res.json(); }),
      fetch(usdUrl).then((res) => { if (!res.ok) throw new Error("USD fetch failed"); return res.json(); }),
    ])
      .then(([metalData, usdData]) => {
        const usdPerOunce = 1 / metalData.rates[metal];
        const usdPerGram = usdPerOunce / 31.1035;
        let priceInCurrency = usdPerGram * usdData.rates[currency];
        if (metal === "XAU") priceInCurrency *= karatMultiplier[karat];

        setResult({
          metal,
          price1g: priceInCurrency,
          price10g: priceInCurrency * 10,
          date: metalData.date,
        });
        setUsdRate(usdData.rates[currency]);
        setLoading(false);
      })
      .catch(() => {
        setError("Unable to fetch price. Please try again.");
        setLoading(false);
      });
  };

  const formatCurrency = (value) =>
    currency === "INR"
      ? `₹${value.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
      : `${value.toFixed(2)} ${currency}`;

  return (
    <div className="tracker-container">
      <h1 className="tracker-title">Daily Metal Price Tracker</h1>

      {/* Controls */}
      <div className="tracker-controls">
        <div className="control">
          <label>Select Metal</label>
          <select value={metal} onChange={(e) => setMetal(e.target.value)}>
            {Object.entries(metals).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
          </select>
        </div>

        <div className="control">
          <label>Select Karat (Gold only)</label>
          <select value={karat} onChange={(e) => setKarat(e.target.value)} disabled={metal !== "XAU"}>
            <option value="24">24K</option>
            <option value="22">22K</option>
            <option value="18">18K</option>
            <option value="14">14K</option>
          </select>
        </div>

        <div className="control">
          <label>Select Currency</label>
          <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
            {Object.entries(currencies).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
          </select>
        </div>

        <div className="control">
          <button onClick={fetchPrice}>{loading ? "Fetching…" : "Search"}</button>
        </div>
      </div>

      {/* Error */}
      {error && <p className="tracker-error">{error}</p>}

      {/* Result */}
      {result && (
        <div className="tracker-result">
          <div className="result-header">
            <FaCoins /> {metals[metal]} {metal==="XAU"?`(${karat}K)`:""} Price
          </div>

          <p className="result-price">{formatCurrency(result.price1g)} / 1g</p>
          <p className="result-price">{formatCurrency(result.price10g)} / 10g</p>

          {usdRate && <p className="result-usd"><FaDollarSign /> 1 USD = {usdRate.toFixed(2)} {currency}</p>}

          <p className="result-date">Date: {result.date}</p>
        </div>
      )}
    </div>
  );
}
