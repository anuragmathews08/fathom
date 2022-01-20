import React, { Component } from "react";
import RecordTab from "../components/RecordTab";
import axios from "axios";

class TrackFitness extends Component {
  constructor() {
    super();
    this.state = {
      record: []
    };
  }
   
  componentDidMount() {
    axios.get("http://localhost:3004/measures")
    .then((response) => {
      console.log("Response from url",response);
      let size = response.data.length;
    for(let i =0; i < size; i++) {
        let columnContainer = <div className="col-12 col-lg-4 col-md-6">
                                <RecordTab data={response.data[i]}/>
                              </div>;
          // record.push(columnContainer);
          this.setState({record : [...this.state.record,columnContainer]});
    }
    }).catch((error) => {
      console.log(error);
    })
  }
  render() {
  //   let record = [];
  //   for(let i =0; i < 6; i++) {
  //     let columnContainer = <div className="col-12 col-lg-4 col-md-6">
  //                             <RecordTab />
  //                           </div>;
  //       record.push(columnContainer);
  // }
    return (  
        <div className="container mt-4 mb-4">
            <div className="row g-lg-5 gy-3">
                {this.state.record.map(element => element)}
            </div>
        </div>
    );
  }
}

export default TrackFitness;
