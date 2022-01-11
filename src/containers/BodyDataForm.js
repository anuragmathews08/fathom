import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BodyDataForm = () => {
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
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="container-md mt-4">
      <div className="row justify-content-center">
        <div className="col-9 col-lg-3">
          <form onSubmit={formik.handleSubmit} className="container">
            <div className="form-floating mb-3">
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
              <div>{formik.errors.Date}</div>
            ) : null}
            <div className="form-floating mb-3">
              <input
                class="form-control form-control-sm"
                id="floatingInput Weight"
                placeholder="Weight (in Kg)"
                name="Weight"
                type="number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.Weight}
              />
              <label for="floatingInput Weight">Weight (in Kg)</label>
            </div>

            {formik.touched.Weight && formik.errors.Weight ? (
              <div>{formik.errors.Weight}</div>
            ) : null}

            <div className="form-floating mb-3 col">
              <input
                class="form-control form-control-sm"
                id="floatingInput Bicep"
                placeholder="Bicep (in Inches)"
                name="Bicep"
                type="number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.Bicep}
              />
              <label for="floatingInput Bicep">Bicep (in Inches)</label>
            </div>

            {formik.touched.Bicep && formik.errors.Bicep ? (
              <div>{formik.errors.Bicep}</div>
            ) : null}

            <div className="form-floating mb-3">
              <input
                class="form-control form-control-sm"
                id="floatingInput Waist"
                placeholder="Waist (in Inches)"
                name="Waist"
                type="number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.Waist}
              />
              <label for="floatingInput Waist">Waist (in Inches)</label>
            </div>
            {formik.touched.Waist && formik.errors.Waist ? (
              <div>{formik.errors.Waist}</div>
            ) : null}

            <div className="form-floating mb-3">
              <input
                class="form-control form-control-sm"
                id="floatingInput Chest"
                placeholder="Chest (in Inches)"
                name="Chest"
                type="number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.Chest}
              />
              <label for="floatingInput Chest">Chest (in Inches)</label>
            </div>
            {formik.touched.Chest && formik.errors.Chest ? (
              <div>{formik.errors.Chest}</div>
            ) : null}
            <div className="form-floating mb-3">
              <input
                class="form-control form-control-sm"
                id="floatingInput Glutes"
                placeholder="Glutes (in Inches)"
                name="Glutes"
                type="number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.Glutes}
              />
              <label for="floatingInput Glutes">Glutes (in Inches)</label>
            </div>
            {formik.touched.Glutes && formik.errors.Glutes ? (
              <div>{formik.errors.Glutes}</div>
            ) : null}

            <div className="form-floating mb-3">
              <input
                class="form-control form-control-sm"
                id="floatingInput Quads"
                placeholder="Quads (in Inches)"
                name="Quads"
                type="number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.Quads}
              />
              <label for="floatingInput Quads">Quads (in Inches)</label>
            </div>
            {formik.touched.Quads && formik.errors.Quads ? (
              <div>{formik.errors.Quads}</div>
            ) : null}

            <div className="form-floating mb-3">
              <input
                class="form-control form-control-sm"
                id="floatingInput Calves"
                placeholder="Calves (in Inches)"
                name="Calves"
                type="number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.Calves}
              />
              <label for="floatingInput Calves">Calves (in Inches)</label>
            </div>
            {formik.touched.Calves && formik.errors.Calves ? (
              <div>{formik.errors.Calves}</div>
            ) : null}
            <button type="submit" class="btn btn-dark col-12 mb-3" Style="background-color: #041C32;">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BodyDataForm;
