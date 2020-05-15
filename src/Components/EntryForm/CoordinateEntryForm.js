import React, {Component} from 'react';
import axios from "axios";

class EntryForm extends Component {
    state = {
        latitudeFrom: '',
        longitudeFrom: '',
        latitudeTo: '',
        longitudeTo: '',
        distance: ''
    };

    latitudeFromChangeHandler = event => {
    this.setState({latitudeFrom: event.target.value});
};

    render() {
        return (
            <form onSubmit={this.sendCalcDatahandler}>
                <label><h4>From:</h4>
                    <input type="text"
                           value={this.state.latitudeFrom}
                           onChange={this.latitudeFromChangeHandler}
                           placeholder={"Latitude from"}/>
                </label>
                <br/>
                <br/>
                <button type="click" onClick={this.sendData}>Calculate Distance</button>
            </form>
        )
    };
}

export default EntryForm;


// latitudeFromChangeHandler = event => {
//     this.setState({latitudeFrom: event.target.value});
// };
//
// longitudeFromChangeHandler = event => {
//     this.setState({longitudeFrom: event.target.value});
// };
//
// latitudeToChangeHandler = event => {
//     this.setState({latitudeTo: event.target.value});
// };
//
// longitudeToChangeHandler = event => {
//     this.setState({longitudeTo: event.target.value});
// };
//
// sendCalcDatahandler = event => {
//     event.preventDefault();
//     const data = {
//         from: {
//             lat: this.state.latitudeFrom,
//             lon: this.state.longitudeFrom
//         },
//         to: {
//             lat: this.state.latitudeTo,
//             lon: this.state.longitudeTo
//         }
//     };
//     console.log(data);
//     axios
//         .post('http://localhost:8080/coord', data)
//         .then(response => {
//             console.log(response, data);
//             this.props.parentCallBack(response.data);
//         });
// };
//
// sendData = () => {
//     this.props.parentCallBack(this.state.distance)
// };
//
// handleChange = event => {
//     this.setState({coordinate: event.target.value});
// };
{/*<label><h3>From:</h3>*/}
{/*    <input type="text"*/}
{/*           value={this.state.latitudeFrom}*/}
{/*           onChange={this.latitudeFromChangeHandler}*/}
{/*           placeholder={"Latitude from"}/>*/}
{/*    <br/>*/}
{/*    <br/>*/}
{/*    <input type="text"*/}
{/*           value={this.state.longitudeFrom}*/}
{/*           onChange={this.longitudeFromChangeHandler}*/}
{/*           placeholder={"Longitude from"}/>*/}
{/*</label>*/}
{/*<br/>*/}
{/*<br/>*/}
{/*<h3>To:</h3>*/}
{/*<input type="text"*/}
{/*value={this.state.latitudeTo}*/}
{/*onChange={this.latitudeToChangeHandler}*/}
{/*placeholder={"Latitude to"}/>*/}
{/*<br/>*/}
{/*<br/>*/}
{/*<input type="text"*/}
{/*value={this.state.longitudeTo}*/}
{/*onChange={this.longitudeToChangeHandler}*/}
{/*placeholder={"Longitude to"}/>*/}
{/*<br/>*/}
{/*<br/>*/}
{/*<br/>*/}
{/*<button type="click" onClick={this.sendData}>Calculate Distance</button>*/}