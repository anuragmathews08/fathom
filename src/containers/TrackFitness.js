import React, { Component } from "react";
import RecordTab from "../components/RecordTab";
import axios from "axios";

class TrackFitness extends Component {
  constructor() {
    super();
    this.state = {
      record: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3004/measures")
      .then((response) => {
        let size = response.data.length;
        for (let i = 0; i < size; i++) {
          let columnContainer = (
            <div className="col-12 col-lg-4 col-md-6" key={i}>
              <RecordTab data={response.data[i]}/>
            </div>
          );
          this.setState({ record: [...this.state.record, columnContainer] });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
        <div className="container mt-4 mb-4">
          <div className="row text-center mb-4 px-3">
            <div
              className="col-12 text-light rounded-3 py-1"
              Style="background-color: #041C32;"
            >
              <h3>Your Records</h3>
            </div>
          </div>
          <div className="row g-lg-5 gy-3">
            {this.state.record.map((element) => element)}
          </div>
        </div>
    );
  }
}

export default TrackFitness;
