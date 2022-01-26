import React, {useEffect} from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BodyDataForm = (props) => {

  const formik = useFormik({
    initialValues: {
      Date: new Date(),
      Weight: "",
      Bicep: "",
      Waist: "",
      Chest: "",
      Glutes: "",
      Quads: "",
      Calves: "",
    },

    validationSchema: Yup.object({
      Date: Yup.date().required("Required"),
      Weight: Yup.number().required("Required"),
      Bicep: Yup.number().required("Required"),
      Waist: Yup.number().required("Required"),
      Chest: Yup.number().required("Required"),
      Glutes: Yup.number().required("Required"),
      Quads: Yup.number().required("Required"),
      Calves: Yup.number().required("Required"),
    }),

    onSubmit: (values) => {
      let object = {
      "date": "",
      "weight": "",
      "bicep": "",
      "waist": "",
      "chest": "",
      "glutes": "",
      "quads": "",
      "calves": ""
      };
      let monthArray = ["Jan","Feb", "Mar", "Apr", "May","Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      // let valueObject = JSON.stringify(values,null,2);
      for(let key in values) {
        let updatedKey = key.toLowerCase();
        if(updatedKey === "date"){
          let date = values[key];
          let day = String(date.getDate()).padStart(2,'0');
          let monthIndex = date.getMonth();
          let yearString = String(date.getFullYear());
          let year = yearString.substring(yearString.length-2, yearString.length);
          let month = monthArray[monthIndex];
          let formatedDate = day + "-" + month + "-" + year;

          object[updatedKey] = formatedDate;
        } else if(updatedKey === "weight") {
          object[updatedKey] = values[key] + " Kg";
        } else {
          object[updatedKey] = values[key] + " Inches";
        }
      }
      props.handleDataMethod(object);
      // alert(JSON.stringify(values, null, 2));
    },
  });

  useEffect(() => {
    if(props.submitSuccess === true) {
      formik.resetForm();
    }
  },[props.submitSuccess]);

  
  const handleScroll = (e) => {
    e.target.addEventListener("mousewheel", (e) => {
      (e.target).blur();
    });
  };

  return (
    <div className="container-fluid mt-5 text-dark">
      <form onSubmit={formik.handleSubmit} className="container-md">
        <div className="row g-lg-5">
          <div className="col-12 col-lg-3 mb-3 mb-lg-0">
            <div className="form-floating">
              <div class="form-control form-control-sm" id="floatingInput">
                <DatePicker
                  selected={formik.values.Date}
                  dateFormat="dd-MMM-yyyy"
                  name="Date"
                  className="Date"
                  id="Date"
                  onChange={(date) => formik.setFieldValue("Date", date)}
                />
              </div>
              <label for="floatingInput Date">Date </label>
            </div>
            {formik.touched.Date && formik.errors.Date ? (
              <div className="text-danger">{formik.errors.Date}</div>
            ) : null}
          </div>
          <div className="col-12 col-lg-3 mb-3 mb-lg-0">
            <div className="form-floating">
              <input
                class="form-control form-control-sm"
                id="floatingInput Weight"
                placeholder="Weight (in Kg)"
                name="Weight"
                type="number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.Weight}
                onFocus={(e) => handleScroll(e)}
              />
              <label for="floatingInput Weight">Weight (in Kg)</label>
            </div>

            {formik.touched.Weight && formik.errors.Weight ? (
              <div className="text-danger">{formik.errors.Weight}</div>
            ) : null}
          </div>
          <div className="col-12 col-lg-3 mb-3 mb-lg-0">
            <div className="form-floating col">
              <input
                class="form-control form-control-sm"
                id="floatingInput Bicep"
                placeholder="Bicep (in Inches)"
                name="Bicep"
                type="number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.Bicep}
                onFocus={(e) => handleScroll(e)}
              />
              <label for="floatingInput Bicep">Bicep (in Inches)</label>
            </div>

            {formik.touched.Bicep && formik.errors.Bicep ? (
              <div className="text-danger">{formik.errors.Bicep}</div>
            ) : null}
          </div>
          <div className="col-12 col-lg-3 mb-3 mb-lg-0">
            <div className="form-floating">
              <input
                class="form-control form-control-sm"
                id="floatingInput Waist"
                placeholder="Waist (in Inches)"
                name="Waist"
                type="number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.Waist}
                onFocus={(e) => handleScroll(e)}
              />
              <label for="floatingInput Waist">Waist (in Inches)</label>
            </div>
            {formik.touched.Waist && formik.errors.Waist ? (
              <div className="text-danger">{formik.errors.Waist}</div>
            ) : null}
          </div>
        </div>
        <div className="row gx-lg-5 mt-lg-3 mb-3 mb-lg-0">
          <div className="col-12 col-lg-3">
            <div className="form-floating">
              <input
                class="form-control form-control-sm"
                id="floatingInput Chest"
                placeholder="Chest (in Inches)"
                name="Chest"
                type="number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.Chest}
                onFocus={(e) => handleScroll(e)}
              />
              <label for="floatingInput Chest">Chest (in Inches)</label>
            </div>
            {formik.touched.Chest && formik.errors.Chest ? (
              <div className="text-danger">{formik.errors.Chest}</div>
            ) : null}
          </div>
          <div className="col-12 col-lg-3 mb-3 mb-lg-0">
            <div className="form-floating">
              <input
                class="form-control form-control-sm"
                id="floatingInput Glutes"
                placeholder="Glutes (in Inches)"
                name="Glutes"
                type="number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.Glutes}
                onFocus={(e) => handleScroll(e)}
              />
              <label for="floatingInput Glutes">Glutes (in Inches)</label>
            </div>
            {formik.touched.Glutes && formik.errors.Glutes ? (
              <div className="text-danger">{formik.errors.Glutes}</div>
            ) : null}
          </div>
          <div className="col-12 col-lg-3 mb-3 mb-lg-0">
            <div className="form-floating">
              <input
                class="form-control form-control-sm"
                id="floatingInput Quads"
                placeholder="Quads (in Inches)"
                name="Quads"
                type="number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.Quads}
                onFocus={(e) => handleScroll(e)}
              />
              <label for="floatingInput Quads">Quads (in Inches)</label>
            </div>
            {formik.touched.Quads && formik.errors.Quads ? (
              <div className="text-danger">{formik.errors.Quads}</div>
            ) : null}
          </div>
          <div className="col-12 col-lg-3 mb-3 mb-lg-0">
            <div className="form-floating">
              <input
                class="form-control form-control-sm"
                id="floatingInput Calves"
                placeholder="Calves (in Inches)"
                name="Calves"
                type="number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.Calves}
                onFocus={(e) => handleScroll(e)}
              />
              <label for="floatingInput Calves">Calves (in Inches)</label>
            </div>
            {formik.touched.Calves && formik.errors.Calves ? (
              <div className="text-danger">{formik.errors.Calves}</div>
            ) : null}
          </div>
        </div>
        <div className="row justify-content-center mt-4">
          <div className="col-5 col-lg-3">
            <button
              type="submit"
              class="btn btn-dark col-12 mb-3"
              Style="background-color: #041C32;"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BodyDataForm;
