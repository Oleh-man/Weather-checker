import React from 'react'
import CityInput from '../components/CityInput';
import CurrentWeather from '../components/CurrentWeather'

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city: `${sessionStorage.getItem('city')}`,
            weatherData: null,
            metric: true,
            details: false
        };
    };

    changeInputSize = (e) => {
        sessionStorage.setItem('city', e.target.value)
        this.setState((oldState) => {
            return {
                ...oldState,
                city: e.target.value
            };
        });

        switch (e.target.value.length) {
            case 1:
                e.target.style.width = `${e.target.value.length + 1}ch`;
                break;
            case 2:
                e.target.style.width = `${e.target.value.length + 2}ch`;
                break;
            case 0:
                e.target.style.width = `9.5ch`;
                break;

            default:
                e.target.style.width = `${e.target.value.length + 1}ch`;
                break;
        };
    };

    checkWeather = () => {
        if (this.state.city !== '') {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=21edd3c2f4e30b2f7d738b8251326cc5&units=metric`)
                .then((res) => {
                    if (!res.ok) {
                        // HA-HA STILL WORKING
                    } else return res.json();
                })
                .then(data => {
                    this.setState((oldState) => {
                        return {
                            ...oldState,
                            weatherData: data
                        };
                    });
                })
                .catch(console.err);
        };
    };

    changeTempSystem = () => {
        this.setState((oldState) => {
            return {
                ...oldState,
                metric: !oldState.metric
            };
        });
    };

    toggleSystem = (temp) => {
        if (this.state.metric === false) {
            return Math.floor((temp * 1.8) + 32);
        } else {
            return Math.floor(temp);
        };
    };

    toggleSystemDistance = (dis) => {
        let changedDis = dis * 3.6;
        if (this.state.metric === true) {
            return `${(changedDis).toFixed(2)}km/h`;
        } else {

            return `${(changedDis * 0.62).toFixed(2)}mi/h`;
        };
    };

    showDetails = (e) => {
        console.log(e);
        this.setState((oldState) => {
            return {
                ...oldState,
                details: !oldState.details
            };
        });
    };

    render() {

        console.log(this.state.weatherData)

        return (
            <main className="wrapper">
                <CityInput
                    changeInputSize={this.changeInputSize}
                    checkWeather={this.checkWeather} />
                {this.state.weatherData === null && <div className='wait-city'>Please enter city name and hit "Check it" button</div>}
                {this.state.weatherData && <CurrentWeather
                    data={this.state.weatherData}
                    ifMetric={this.state.metric}
                    detailsVisibility={this.state.details} 
                    changeTempSystem={this.changeTempSystem} 
                    showDetails={this.showDetails}
                    toggleSystemDistance={this.toggleSystemDistance}
                    toggleSystem={this.toggleSystem} />}
                {this.state.weatherData === undefined && <div className='wait-city red-text'>Please enter city name correctly</div>}
                {/* {this.state.weatherData && <SwitchSystem changeTempSystem={this.changeTempSystem} />} */}
            </main>
        );
    };
};

export default Main;