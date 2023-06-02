const Weather = ({weatherInfo}) => {
    return (
    <section>

        <h2>{weatherInfo?.name}, {weatherInfo?.sys.country}</h2>

        <section>

          {/*Seccion arriba*/}
          <article>
            
            <h3>{weatherInfo?.weather[0].description}</h3>

            <span>{weatherInfo?.main.temp}°K</span>
            
            <div>
              <img src={`https://openweathermap.org/img/wn/${weatherInfo?.weather[0].icon}@4x.png`} alt="" />
            </div>
          </article>
          {/*Seccion abajo*/}
          <section>

            <article>
              <div>
                <img src="" alt="" />
                <span></span>
              </div>
            </article>

            <article>
              <div>
                <img src="" alt="" />
                <span></span>
              </div>
            </article>

            <article>
              <div>
                <img src="" alt="" />
                <span></span>
              </div>
            </article>           

         </section>

        </section>
        <button>Change F / C</button>

    </section>
  )
}
export default Weather