import { Component } from "react";

class SetIntervalExample extends Component {
    constructor(props) {
        super(props);
        this.state = { pages: [1, 2, 3, 4, 5], currentPageIndex: 0, data: {} };
    }

    // This method will be scheduled to fire every 5 seconds.
    async getData() {
        console.log('This may fire excessively if componentWillUnmount code is commented out.');
        // Endpoint call.
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${this.state.pages[this.state.currentPageIndex]}`);
        const json = await response.json();

        // Check setStateFlag to prevent setting state on a component that may no longer exist.
        if (this.setStateFlag) {
            console.log('This may result in an error if componentWillUnmount code is commented out.');
            // Handle state update from api response.
            this.setState(currentState => {
                let newIndex = currentState.currentPageIndex + 1;
                newIndex = newIndex > 4 ? 0 : newIndex;
                return {
                    data: json,
                    currentPageIndex: newIndex
                }
            })
        }
    }

    componentDidMount() {
        // This flag allows us to disable setting state after the component has unmounted.
        this.setStateFlag = true;

        // This ID allows us to disable calling the API after the component has unmounted.
        this.timerID = setInterval(
            () => this.getData(),
            1000
        );
    }

    componentWillUnmount() {
        // Cleanup - set flag to block state update, clear the interval.
        // this.setStateFlag = false;
        // clearInterval(this.timerID);
    }

    render() {
        return (
            <div>
                <h1>Hello, world! ok?</h1>
                <div>{JSON.stringify(this.state.data)}</div>
            </div>
        );
    }
}


export default SetIntervalExample;