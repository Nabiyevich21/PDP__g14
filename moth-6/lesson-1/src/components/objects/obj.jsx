import React, { Component } from "react";

export default class obj extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "muhammadqodir",
            age: "22",
            work: "no-work",
            password: "12345 ",
        };
    }
    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <h1>{this.state.age}</h1>
                <h1>{this.state.work}</h1>
                <h1>{this.state.password}</h1>
            </div>
        );
    }
}
