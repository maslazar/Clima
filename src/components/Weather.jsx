import { useEffect, useState } from "react";

const Weather = ({ weatherInfo }) => {
  let gradesView = "";
  const [flag, setFlag] = useState(false);
  // const [grade, setgrade] = useState(false);
  if (weatherInfo && weatherInfo.main) {
    const kelvin = weatherInfo.main.temp;
    if (kelvin != undefined) {
      const conver = kelvin - 273.15;
      // setgrade(conver.toFixed(2))
      gradesView = conver.toFixed(2) + " C°";
    }
  }
  // useEffect(() => {

  // });
  function convert() {
    console.log("data");
    if (flag == false) {
      console.log(gradesView);
      console.log((gradesView * 9) / 5 + 32);
    }
  }
  return (
    <section className="background">
      <div className="titleHome">
        <h2>
          {weatherInfo?.name}, {weatherInfo?.sys.country}
        </h2>
      </div>

      <section className="movi">
        <article className="mAuto">
          <div className="contentWeather">
            <h3 className="titleTow">{weatherInfo?.weather[0].description}</h3>
            <div className="contentBoxOne">
              <span>{gradesView}</span>
              <img
                src={`https://openweathermap.org/img/wn/${weatherInfo?.weather[0].icon}@4x.png`}
                alt=""
              />
            </div>
          </div>

          <div className="boxThree">
            <div className="contentBox borderB">
              <img src="/images/wind.png" alt="" />
              <p>21°</p>
            </div>
            <div className="contentBox borderB">
              <img src="/images/humidity.png" alt="" />
              <p>21°</p>
            </div>
            <div className="contentBox">
              <img src="/images/pressure.png" alt="" />
              <p>21°</p>
            </div>
          </div>
        </article>
      </section>
      <button onClick={convert} className="btnChange">
        Change F / C
      </button>
    </section>
  );
};
export default Weather;
