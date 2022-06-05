import { Link } from "react-router-dom";

const CurrentWeather = (props) => {
    return (
        <>
            <div className="weather-container">
                <div className="weather-container__icon">
                    <img src={props.data && "http://openweathermap.org/img/wn/" + props.data.weather[0].icon + "@4x.png"} alt="" />
                </div>
                <div className="weather-container__main-temp">
                    <div className="weather-container__main-temp--big">{props.data && props.toggleSystem(props.data.main.temp)}</div>
                    <div className="weather-container__main-temp--small">{props.data && props.toggleSystem(props.data.main.temp_min)}/{props.data && props.toggleSystem(props.data.main.temp_max)}</div>
                </div>
                <div className="weather-container__info">
                    <div className="weather-container__info__icons">
                        <div className="info-icon wind-icon">
                            <img src={require(`../icons/wind.png`)} alt="wind-icon" />
                        </div>
                        <div className="info-icon humidity-icon">
                            <img src={require(`../icons/humidity.png`)} alt="humidity-icon" />
                        </div>
                        <div className="info-icon clouds-icon">
                            <img src={require(`../icons/clouds.png`)} alt="clouds-icon" />
                        </div>
                    </div>
                    <div className="weather-container__info__dem">
                        <div>{props.data && props.toggleSystemDistance(props.data.wind.speed)}</div>
                        <div>{props.data && props.data.main.humidity}%</div>
                        <div>{props.data && props.data.clouds.all}%</div>
                    </div>
                </div>
            </div>
            <Link to='/comparison'><button className="input-container__check--btn">Compare</button></Link>
            {/* <button>Compare</button> */}
        </>
    );
};

export default CurrentWeather;