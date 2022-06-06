

const Details = (props) => {
    return (
        <div className="details">
            <div className="details__param det-temp">
                <div className="details__param--title">Temperature</div>
                <div className="details__param-itm">
                    <div>average</div><div className="separator">:</div><div>100</div>
                </div>
                <div className="details__param-itm">
                    <div>max</div><div className="separator">:</div><div>120</div>
                </div>
                <div className="details__param-itm">
                    <div>min</div><div className="separator">:</div><div>80</div>
                </div>
                <div className="details__param-itm">
                    <div>feels like</div><div className="separator">:</div><div>90</div>
                </div>
            </div>
            <div className="details__param det-coord">
                <div className="details__param--title">Coordinates</div>
                <div className="details__param-itm">
                    <div>latitude</div><div className="separator">:</div><div>100</div>
                </div>
                <div className="details__param-itm">
                    <div>longitude</div><div className="separator">:</div><div>120</div>
                </div>
            </div>
        </div>
    );
};

export default Details;