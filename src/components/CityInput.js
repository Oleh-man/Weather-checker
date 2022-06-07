const CityInput = (props) => {
    return (
        <div className='input-container'>
            <p className='input-container__question'>Want to know Weather in
                <input
                    onChange={props.changeInputSize}
                    className='city-name'
                    type="text"
                    placeholder='(your place)'
                    autoFocus /> ?</p>
            <div className='input-container__check'>
                <div className='input-container__check--span'>Just</div>
                <button
                    className='btn input-container__check--btn'
                    onClick={props.checkWeather}>Check it
                </button>
            </div>
        </div>
    );
};

export default CityInput;