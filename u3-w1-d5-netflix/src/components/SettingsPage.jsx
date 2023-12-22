import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";

class SettingsPage extends Component {
  render() {
    return (
      <main className="d-flex justify-content-center bg-light py-2">
        <Container fluid className="d-flex flex-column align-items-start w-75 p-3">
          <h1>Account</h1>
          <div className="d-flex align-items-center align-items-lg-stretch flex-column w-100">
            <Row className="d-flex flex-column flex-lg-row justify-content-center border border-1 border-dark border-end-0 border-start-0 mb-2 py-3">
              <Col xs={12} md={4} className="d-flex flex-column align-items-start mb-3">
                <h5>MEMBERSHIP & BILLING</h5>
                <button className="border border-2 rounded-1">Cancel Membership</button>
              </Col>
              <Col xs={12} md={8} className="flex-grow-1">
                <div className="border border-1 border-dark border-top-0 border-end-0 border-start-0 mb-2">
                  <div>
                    <div className="d-flex justify-content-between">
                      <p>alfonso@gmail.com</p>
                      <a href="#">Change account email</a>
                    </div>
                  </div>
                  <div>
                    <div className="d-flex justify-content-between">
                      <p>Password: *********</p>
                      <a href="#">Change password</a>
                    </div>
                  </div>
                  <div>
                    <div className="d-flex justify-content-between mb-2">
                      <p>Phone: 4815162342</p>
                      <a href="#">Change phone number</a>
                    </div>
                  </div>
                </div>

                <div className="border border-1 border-dark border-top-0 border-end-0 border-start-0 mb-2">
                  <div>
                    <div className="d-flex justify-content-between">
                      <p>Paypal admin@strive.school</p>
                      <a href="#">Update payment</a>
                    </div>
                  </div>
                  <div>
                    <div className="d-flex justify-content-end mb-2">
                      <a href="#">Billing details</a>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="d-flex justify-content-end">
                    <a href="#">Redeem gift cards or promo code</a>
                  </div>
                  <div className="d-flex justify-content-end">
                    <a href="#">Where to buy gift cards</a>
                  </div>
                </div>
              </Col>
            </Row>

            <Row className="d-flex flex-column flex-lg-row justify-content-between border border-1 border-dark border-top-0 border-end-0 border-start-0 mb-2">
              <Col xs={12} md={4} className="w-30">
                <h5>PLAN DETAILS</h5>
              </Col>
              <Col xs={12} md={8} className="flex-grow-1">
                <div className="d-flex justify-content-between">
                  <p>Premium</p>
                  <a href="#">Change plan</a>
                </div>
              </Col>
            </Row>

            <Row className="d-flex flex-column flex-lg-row justify-content-between border border-1 border-dark border-top-0 border-end-0 border-start-0 mb-2">
              <Col xs={12} md={4} className="w-30">
                <h5>SETTINGS</h5>
              </Col>
              <Col xs={12} md={8} className="flex-grow-1 mb-2">
                <div className="d-flex flex-column">
                  <a href="#">Parental control</a>
                  <a href="#">Test participation</a>
                  <a href="#">Manage download devices</a>
                  <a href="#">Activate devices</a>
                  <a href="#">Recent device streaming activity</a>
                  <a href="#">Sign out of all devices</a>
                </div>
              </Col>
            </Row>

            <Row className="d-flex flex-column flex-lg-row justify-content-between mb-2">
              <Col xs={12} md={4} className="w-30">
                <h5>MY PROFILE</h5>
              </Col>
              <Col xs={12} md={8} className="flex-grow-1 mb-2">
                <div className="d-flex justify-content-between">
                  <p>Strive student</p>
                  <div className="d-flex flex-column align-items-end">
                    <a href="#">Manage profiles</a>
                    <a href="#">Add profile email</a>
                  </div>
                </div>
                <div>
                  <div className="row row-cols-2">
                    <div className="col">
                      <a href="#">Language</a>
                    </div>
                    <div className="col">
                      <a href="#">Viewing activity</a>
                    </div>
                    <div className="col">
                      <a href="#">Playback settings</a>
                    </div>
                    <div className="col">
                      <a href="#">Ratings</a>
                    </div>
                    <div className="col">
                      <a href="#">Subtitle appearance</a>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </main>
    );
  }
}
export default SettingsPage;
