import { useState, useEffect } from "react";
import "./App.css";

const upgrades = [
  {
    name: "Grandma: ",
    id: "Grandma",
    cost: 10,
    increase: 1,
  },
  {
    name: "Oven: ",
    id: "Oven",
    cost: 100,
    increase: 10,
  },
  {
    name: "Factory: ",
    id: "Factory",
    cost: 1000,
    increase: 100,
  },
  {
    name: "Mine: ",
    id: "Mine",
    cost: 10000,
    increase: 1000,
  },
  {
    name: "Bank: ",
    id: "Bank",
    cost: 100000,
    increase: 10000,
  },
];

export default function App() {
  const [cookies, setCookies] = useState(0);
  const [cookiesPerSecond, setCookiesPerSecond] = useState(1);

  useEffect(() => {
    const cookieInterval = setInterval(() => {
      setCookies((currentCookies) => currentCookies + 1);
    }, 1000 / cookiesPerSecond);
    return () => {
      clearInterval(cookieInterval);
    };
  }, [cookiesPerSecond]);

  // Storing Cookies and CookiesPerSecond in Local Storage (I can't get this to work!)

  // useEffect(() => {
  //   localStorage.setItem("cookies", cookies.toString())
  //   localStorage.setItem("cookiesPerSecond", cookiesPerSecond.toString())
  //   localStorage.getItem("cookies",);
  //   localStorage.getItem("cookiesPerSecond")
  // }, [cookies, cookiesPerSecond]);

  // These are just extra buttons I had initially, they performed the job of the upgrades.

  // function increasecookiesPerSecond() {
  //   setCookiesPerSecond(cookiesPerSecond + 1);
  // }

  // function increaseCookie() {
  //   setCookies(cookies + 1);
  // }

  function resetCookies() {
    setCookies(0);
  }

  function buyUpgrade(cost, increase) {
    setCookies(cookies - cost);
    setCookiesPerSecond(cookiesPerSecond + increase);
  }

  return (
    <div>
      <header>
        <h1>Cookie Clicker</h1>
      </header>
      <body>
        <img src="https://www.cookingclassy.com/wp-content/uploads/2014/06/chocolate-chip-cookie-16.jpg"></img>
        <p className="cookie">Cookies: {cookies}</p>
        <p className="cps">Cookies Per Second: {cookiesPerSecond}</p>
        {/* <button onClick={increaseCookie}>Add another cookie</button>
        <button onClick={increasecookiesPerSecond}>Increase Cookies Per Second</button> */}
        <button onClick={resetCookies}>Reset Cookies</button>
        <p className="upgrades">Upgrades</p>
        <ul>
          {upgrades.map((upgrade) => {
            return (
              <li key={upgrade.id}>
                {upgrade.name} {upgrade.cost} Cookies +{upgrade.increase}{" "}
                <button
                  onClick={() => buyUpgrade(upgrade.cost, upgrade.increase)}
                >
                  Buy
                </button>
              </li>
            );
          })}
        </ul>
      </body>
      <footer>
        <div>A Cookie Clicker.</div>
      </footer>
    </div>
  );
}
