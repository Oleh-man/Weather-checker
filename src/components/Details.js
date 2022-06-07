

const Details = (props) => {
    return (
        <div className="details">
            <div className="details__param det-coord">
                <div className="details__param--title">Coordinates</div>
                <div className="details__param-itm">
                    <div>latitude</div><div className="separator">:</div><div>{props.data.coord.lat}</div>
                </div>
                <div className="details__param-itm">
                    <div>longitude</div><div className="separator">:</div><div>{props.data.coord.lon}</div>
                </div>
            </div>
            <div className="details__param det-temp">
                <div className="details__param--title">Temperature</div>
                <div className="details__param-itm">
                    <div>average</div><div className="separator">:</div><div>{props.toggleSystem(props.data.main.temp)}&deg;</div>
                </div>
                <div className="details__param-itm">
                    <div>max</div><div className="separator">:</div><div>{props.toggleSystem(props.data.main.temp_max)}&deg;</div>
                </div>
                <div className="details__param-itm">
                    <div>min</div><div className="separator">:</div><div>{props.toggleSystem(props.data.main.temp_min)}&deg;</div>
                </div>
                <div className="details__param-itm">
                    <div>feels like</div><div className="separator">:</div><div>{props.toggleSystem(props.data.main.feels_like)}&deg;</div>
                </div>
            </div>
            <div className="details__param det-coord">
                <div className="details__param--title">Other</div>
                <div className="details__param-itm">
                    <div>clouds</div><div className="separator">:</div><div>{props.data.clouds.all}%</div>
                </div>
                <div className="details__param-itm">
                    <div>humidity</div><div className="separator">:</div><div>{props.data.main.humidity}%</div>
                </div>
                <div className="details__param-itm">
                    <div>wind speed</div><div className="separator">:</div><div>{props.toggleSystemDistance(props.data.wind.speed)}</div>
                </div>
            </div>
        </div>
    );
};

export default Details;