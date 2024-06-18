import React from "react";
import Meta from "../../components/Meta.js";
import BreadCrumb from "../../components/BreadCrumb.js";
import Container from "../../components/Container.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faClock, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <>
      <Meta title={"Contact Us"} />
      <BreadCrumb title="Contact" />
      <Container class1="contact-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-12">
              <iframe
                title="My location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63320.430109049106!2d80.584495871951!3d7.294543426660155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae366266498acd3%3A0x411a3818a1e03c35!2sKandy!5e0!3m2!1sen!2slk!4v1718670596655!5m2!1sen!2slk" 
                width="800"
                height="600"
                className="border-0 w-100"
                allowfullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between ">
                <div>
                  <h3 className="contact-title mb-4">Contact</h3>
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Mobile Number"
                      />
                    </div>
                    <div>
                      <textarea
                        name=""
                        id=""
                        className="w-100 form-control"
                        cols="30"
                        rows="4"
                        placeholder="Comments"
                      ></textarea>
                    </div>
                    <div>
                      <button className="button border-0">Submit</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className="contact-title mb-4">Get in touch with us</h3>
                  <div>
                    <ul className="ps-0">
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="fs-5" />
                        <address className="mb-0">
                          Hno:277 , Near village chopal , Mandaura; Sonipat, Haryana
                        </address>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <FontAwesomeIcon icon={faPhone} className="fs-5" />
                        <a href="tel:+33 611706667">+33 611706667</a>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <FontAwesomeIcon icon={faEnvelope} className="fs-5" />
                        <a href="mailto:jeanmariedeschamps25@gmail.com">jeanmariedeschamps25@gmail.com</a>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <FontAwesomeIcon icon={faClock} className="fs-5" />
                        <p className="mb-0">Monday-Friday 10 AM 8 PM</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </Container>
    </>
  );
};

export default Contact;

