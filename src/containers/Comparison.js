import { Link } from "react-router-dom";

const Comparison = (props) => {
    return (
        <div className="comparison">
            {/* <div className="comparison__input">
                <input type="text" />
                <input type="text" />
                <button>check</button>
                
            </div> */}
            <div>This page is in development process</div>
            <div>
            <Link to='/Weather-checker'><button className="btn">Go Back</button></Link>
            </div>
        </div>
    )
}

export default Comparison;