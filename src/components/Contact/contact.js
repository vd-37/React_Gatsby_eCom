import React from "react"
import Heading from "../Reusable/Heading"

export default function Contact() {
  return (
    <div className="py-3">
      <Heading title="Contact Us" />
      <div className="col-10 col-sm-8 mx-auto">
        <form action="https://formspree.io/f/mvodbenn" method="POST">
          <div className="form-group">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your name"
              className="form-control my-2"
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="form-control my-2"
            />
            <input
              type="number"
              name="mobile"
              id="mobile"
              placeholder="Mobile"
              className="form-control my-2"
            />
            <textarea
              name="description"
              placeholder="Write your feedback here"
              required
              id="description"
              cols="30"
              rows="10"
              className="form-control my-2"
            ></textarea>
            <button type="submit" className="btn btn-outline-info btn-block">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
