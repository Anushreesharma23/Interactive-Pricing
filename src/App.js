import { useState } from "react";
import Navbar from "./Components/Navbar";
import './App.css';

function App() {
  let myCheckbox = document.querySelector(".switch input"),
    duration = document.querySelector(".month"),
    price = document.querySelector(".price .pricefix"),
    switcher = document.querySelector(".switch"),
    range = document.querySelector(".myrange");

// generate price on switch
switcher.onclick = function(){



    if(myCheckbox.checked === true){

        let priceInt = parseInt(price.textContent);
        price.textContent = `${(priceInt - (priceInt * .25)) * 12}`;
        duration.textContent = `/year`;

    }else{

        refreshPrices();
        duration.textContent = `/month`;
    }
}

// generate price on range
let pageViews = document.querySelector(".page-views span");
range.addEventListener('input', refreshPrices);

function refreshPrices(){

    if(range.value === 1){

        if(myCheckbox.checked === true){
            price.textContent = `${(8 - (8 * .25)) * 12}`;
        }else{
            price.textContent = 8;
        }

        pageViews.textContent = "10k";

    } 

    if(range.value === 2){

        if(myCheckbox.checked === true){
            price.textContent = 108;
        }else{
            price.textContent = 12;
        }

        pageViews.textContent = "50k";
    }

    if(range.value === 3){

        if(myCheckbox.checked === true){
            price.textContent = 144;
        }else{
            price.textContent = 16;
        }

        pageViews.textContent = "100k";
    }

    if(range.value === 4){

        if(myCheckbox.checked === true){
            price.textContent = 216;
        }else{
            price.textContent = 24;
        }

        pageViews.textContent = "500k";

    }

    if(range.value === 5){

        if(myCheckbox.checked === true){
            price.textContent = 324;
        }else{
            price.textContent = 36;
        }

        pageViews.textContent = "1M";
    }

}

  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#181818";
      document.body.color = "white";
      //document.container.style = "2px solid white";
      // document.start.color = "white";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      
    }
  };
  return (
    <>
      <meta charSet="utf-8" />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/images/favicon-32x32.png"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta
        name="description"
        content="Web site created using create-react-app"
      />
      <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
      {/* <Navbar mode={mode} toggleMode={toggleMode}/> */}
      <main className="container">
        <Navbar mode={mode} toggleMode={toggleMode} />
        <header>
          <h1>Simple, traffic-based pricing</h1>
          <p>Sign-up for our 30-day trial, No credit card required.</p>
        </header>
        <aside>
          {/* price bar monthly or yearly price */}
          <div className="tarrif">
            <div className="page-views">
              {"  "}
              <span>100k</span> pageviews
            </div>
            <div className="price">
              <span>
                $<span className="pricefix">16</span>.00
              </span>
              <span className="month"> /month</span>
            </div>
          </div>
          {/* progress bar */}
          <div className="progress">
            <div className="progress-bar">
              <input
                type="range"
                min={1}
                max={5}
                step={1}
                defaultValue={3}
                className="myrange"
              />
            </div>
            {/* switched between month and year  */}
            <div className="monthly">
              <span>Monthly Billing</span>
              <label className="switch">
                <input type="checkbox" />
                <span className="slider" />
              </label>
              <span>Yearly Billing</span>
              <span className="discount">25% discount</span>
            </div>
          </div>
          <hr />
          {/* feautures  */}
          <div className="start">
            <ul>
              <li>Unlimited websites</li>
              <li>100% data ownership</li>
              <li>Email reports</li>
            </ul>
            <button>Start my trial</button>
          </div>
        </aside>
      </main>
    </>
  );
}

export default App;
