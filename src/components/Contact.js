import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <section id="contact">
        <div className="inner">
          <section>
            <form action="mailto: tjohnson1106@gmail.com" method="post">
              <div className="field half first">
                <label for="name">Name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="field half">
                <label for="email">Email</label>
                <input type="email" name="email" id="email" />
              </div>
              <div className="field">
                <label for="message">Message</label>
                <textarea name="message" id="message" rows="6" />
              </div>
              <ul className="actions">
                <li>
                  <input type="submit" value="Send Message" className="special" />
                </li>
                <li>
                  <input type="reset" value="Clear" />
                </li>
              </ul>
            </form>
          </section>
          <section className="split">
            <section>
              <div className="contact-method">
                <span className="icon alt fa-envelope" />
                <h3>Email</h3>
                {/*remember change*/}
                <a href="mailto:tjohnson1106@gmail.com">tjohnson1106@gmail.com</a>
              </div>
            </section>
            <section>
              <div className="contact-method">
                <span className="icon alt fa-phone" />
                <h3>Phone</h3>
                <span> (646) 481-0317 </span>
              </div>
            </section>
            <section>
              <div className="contact-method">
                <span className="icon alt fa-home" />
                <h3>Address</h3>
                <span>
                  323 East 21st Street<br />
                  New York, NY 10010<br />
                </span>
              </div>
            </section>
          </section>
        </div>
      </section>
    );
  }
}

export default Contact;
