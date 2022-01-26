import React, { Component } from "react";
import BodyDataForm from "../components/BodyDataForm";
import axios from "axios";
import ModalComponent from "../components/ModalComponent";

class FormPage extends Component {
  constructor() {
    super();
    this.state = {
      measurements: [],
      submitSuccess: null,
      modalShow: false,
    };
    this.modalBtn = React.createRef();
  }

  handleData = (data) => {
    let size = this.state.measurements.length;
    size += 1;
    let updatedObject = {};
    updatedObject["id"] = size;
    updatedObject = { ...updatedObject, ...data };
    axios
      .post("http://localhost:3004/measures", updatedObject)
      .then((response) => {
        console.log("Response: ", response);
        this.setState({ submitSuccess: true, modalShow: true });
      })
      .catch((error) => {
        console.log("Error: ", error);
        this.setState({ submitSuccess: false, modalShow: true });
      });
  };

  closeModal = () => {
    this.setState({ modalShow: false });
  };

  componentDidMount() {
    axios
      .get("http://localhost:3004/measures")
      .then((response) => {
        this.setState({ measurements: [...response.data] });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidUpdate() {
    const btn = this.modalBtn.current;
    if (this.state.modalShow === true) {
      btn.click();
    }
  }

  render() {
    return (
      <>
        {this.state.submitSuccess !== null ? (
          <>
            <ModalComponent
              submitSuccess={this.state.submitSuccess}
              closeModal={() => this.closeModal()}
            />
            <button
              ref={this.modalBtn}
              type="button"
              class="btn btn-primary d-none"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            ></button>
          </>
        ) : null}
        <div className="container mt-md-5 mt-3 card px-0 shadow">
          <div className="card-header" Style="background-color: #041C32;">
            <div className="row">
              <div className="col">
                <h3 className="text-center card-title text-light">
                  Body Data Form
                </h3>
              </div>
            </div>
          </div>
          <BodyDataForm
            handleDataMethod={(measurements) => this.handleData(measurements)}
            submitSuccess={this.state.submitSuccess}
          />
        </div>
      </>
    );
  }
}

export default FormPage;
