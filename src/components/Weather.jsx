const Weather = ({ weatherInfo }) => {
  return (
    <section className="background">
      <div className="titleHome">
        <h2>
          {weatherInfo?.name}, {weatherInfo?.sys.country}
        </h2>
      </div>

      <section className="flex">
        <article className="mAuto">
          <div className="contentWeather">
            <h3 className="titleTow">{weatherInfo?.weather[0].description}</h3>
            <div className="contentBoxOne">
              <span>{weatherInfo?.main.temp}°K</span>
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

        <section>
          <div>
            <img src="" alt="" />
            <span></span>
          </div>

          <div>
            <img src="" alt="" />
            <span></span>
          </div>

          <div>
            <img src="" alt="" />
            <span></span>
          </div>
        </section>
      </section>
      <button>Change F / C</button>
    </section>
  );
};
export default Weather;
