import React, {useState} from "react";
import { Link } from "react-router-dom";
import SwitchSystem from "./SwitchSystem";
import Details from "./Details";

const CurrentWeather = (props) => {
    const[detailsBtnText, setText] = useState('Details');
    const changeBtnText = () => {
        detailsBtnText === 'Details' ? setText('Hide') : setText('Details');
    }
    return (
        <>
            <Link to='/comparison'><button className="compare-btn btn">Compare</button></Link>
            <div className="weather-container">
                <div className="weather-container__icon">
                    <img src={props.data && "http://openweathermap.org/img/wn/" + props.data.weather[0].icon + "@4x.png"} alt="" />
                </div>
                <div className="weather-container__main-temp">
                    <div className="weather-container__main-temp--big">{props.data && props.toggleSystem(props.data.main.temp)}</div>
                    <div className="weather-container__main-temp--small">{props.data && props.toggleSystem(props.data.main.temp_min)}/{props.data && props.toggleSystem(props.data.main.temp_max)}</div>
                </div>
                <div className="weather-container__info">
                    <div className="weather-container__info--itm">
                        <div className="info-icon clouds-icon">
                            <img src={require(`../icons/clouds.png`)} alt="clouds-icon" />
                        </div>
                        <div className="info-param">{props.data && props.data.clouds.all}%</div>
                    </div>
                    <div className="weather-container__info--itm info-humidity">
                        <div className="info-icon humidity-icon">
                            <img src={require(`../icons/humidity.png`)} alt="humidity-icon" />
                        </div>
                        <div className="info-param">{props.data && props.data.main.humidity}%</div>
                    </div>
                    <div className="weather-container__info--itm">
                        <div className="info-icon wind-icon">
                            <img src={require(`../icons/wind.png`)} alt="wind-icon" />
                        </div>
                        <div className="info-param">{props.data && props.toggleSystemDistance(props.data.wind.speed)}</div>
                    </div>
                </div>
            </div>
            {<SwitchSystem changeTempSystem={props.changeTempSystem} />}
            <button
                className="details-btn btn"
                onClick={() => {props.showDetails(); changeBtnText();}}>
                {detailsBtnText}</button>
            {props.detailsVisibility === true && <Details showDetails={props.showDetails} data={props.data} />}
        </>
    );
};

export default CurrentWeather;