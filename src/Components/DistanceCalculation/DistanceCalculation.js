import React, {Component} from 'react';
import './DistanceEntry.css';
import CoordinateEntryForm from "../EntryForm/CoordinateEntryForm";
import CalculatedDistance from "../CalculatedDistance/CalculatedDistance";

class DistanceCalculation extends Component {
    constructor() {
        super();
        this.state = {
            distance: ''
        }
    }

    changeDistanceState = (distanceValue) => {
        this.setState({distance: distanceValue});
    }

    render() {
        console.log("dist", this.state.distance);
        return (
            <div>
                <section className="CalculationData">
                    <h3>Distance between two points</h3>
                    <CoordinateEntryForm returnedDistance={this.changeDistanceState.bind(this)}/>
                </section>
                <section>
                    <CalculatedDistance className="resultingDistance" distanceData={this.state.distance}/>
                </section>
            </div>
        );
    }
};

export default DistanceCalculation;
