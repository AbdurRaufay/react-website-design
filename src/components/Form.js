import React from "react";
import formArrow from "../assets/img/formArrow.gif";
const Form = () => {
  return (
   
      <form>
        <div className="container">
          <div className="row mt-3">
            <p className="h4 text-white text-center fw-normal">
              To set the background
            </p>
            <img
              src={formArrow}
              alt="form arrow"
              className="form_arrow_image d-flex m-auto"
            />
            <p className="h6 fw-normal form_paragraph">
              One way to vertically center?
            </p>
            <div className="mb-1 mt-4 ms-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label
                className="form-check-label text-white "
                for="exampleCheck1"
              >
                Crepi
              </label>
            </div>
            <div className="mb-2  ms-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label
                className="form-check-label text-white "
                for="exampleCheck1"
              >
                Gevelesolite
              </label>
            </div>
            <div className="col-lg-12  mb-2">
              <input type="email" className="form-control" placeholder="ist" />
            </div>
            <div className="col-lg-12 mb-2">
              <input
                type="tex"
                className="form-control"
                placeholder="first name"
              />
            </div>
            <div className="col-lg-12 mb-2">
              <input
                type="text"
                className="form-control"
                placeholder="last name"
              />
            </div>
            <div className="col-lg-12 mb-2">
              <input
                type="text"
                className="form-control"
                placeholder="address"
              />
            </div>

            <div className="col-lg-7 mt-2 mb-2">
              <input
                type="email"
                className="form-control"
                placeholder="address"
              />
            </div>
            <div className="col-lg-5 mt-2 mb-2">
              <input
                type="email"
                className="form-control"
                placeholder="address"
              />
            </div>
            <div className="col-lg-12 mt-2 mb-2">
              <input
                type="text"
                className="form-control"
                placeholder="address"
              />
            </div>
            <div className="mb-2  ms-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label
                className="form-check-label text-white "
                for="exampleCheck1"
              >
                if agree the term then check
              </label>
            </div>
            <div className="container">
              <div className="d-grid gap-2 mt-2 py-2 mb-2 btn_form">
                <button className="btn btn_form p-2 fw-bold" type="button">
                  Aanvvrag Verstuvern
                </button>
              </div>
            </div>
            <p className="h6 form_bottom_text mt-2">
              Using Speechify breeze. It takes only a few minutes and you'll be
              off, listening to all those almost anything all those almost
              anything of the
              <p className="h6 mt-3 form_bottom_text">
                into high-quality, natural-sounding audio natural natural
              </p>
            </p>
          </div>
        </div>
      </form>
  );
};

export default Form;
