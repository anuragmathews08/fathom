import React from "react";

const ModalComponent = (props) => {
  return (
    <div
      class="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          {props.submitSuccess ? (
            <div class="modal-header text-light" Style="background-color: #198754;">
              <h5 class="modal-title" id="staticBackdropLabel">
                Success
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
          ) : (
            <div class="modal-header text-light" Style="background-color: #dc3545;">
              <h5 class="modal-title" id="staticBackdropLabel">
                Failure
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
          )}

          <div class="modal-body">
            {props.submitSuccess ? (
              <div>
                <p>Your data is submitted successfully.</p>
                <p>Check the track fitness page to see the saved data.</p>
              </div>
            ) : (
              <div>
                <p>
                  Sorry, encountered some error while sending your data to
                  server.
                </p>
                <p>Please, try submitting the data again.</p>
              </div>
            )}
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-primary"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={props.closeModal}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalComponent;
