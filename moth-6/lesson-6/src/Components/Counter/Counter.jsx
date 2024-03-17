import React, { Component } from "react";
import "./Counter.css";
export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            isCounting: false,
        };
        this.incrementCount = this.incrementCount.bind(this);
        this.decrementCount = this.decrementCount.bind(this);
        this.restartCount = this.restartCount.bind(this);
    }

    componentDidMount() {
        console.log("ComponentDidMount");
    }
    componentDidUpdate() {
        console.log("ComponentDidUpdate");
    }
    componentWillUnmount() {
        console.log("ComponentWillUnmount");
    }
    incrementCount() {
        this.setState({ isCounting: true });
        this.CounterId = setInterval(() => {
            this.setState({ count: this.state.count + 1 });
        }, 1000);
    }

    decrementCount() {
        this.setState({ isCounting: false });
        clearInterval(this.CounterId);
    }

    restartCount() {
        this.setState({ isCounting: false, count: 0 });
        clearInterval(this.CounterId);
    }
    render() {
        return (
            <div className="timer__content">
                <h2 className="timer__h2">React Timer </h2>
                <p className="timer__p">{this.state.count}</p>
                {!this.state.isCounting ? (
                    <button
                        className="timer__Start-btn"
                        onClick={this.incrementCount}
                    >
                        Start
                    </button>
                ) : (
                    <button
                        className="timer__Stop-btn"
                        onClick={this.decrementCount}
                    >
                        Stop
                    </button>
                )}
                <button
                    className="timer__Restart-btn"
                    onClick={this.restartCount}
                >
                    Restart
                </button>
            </div>
        );
    }
}
