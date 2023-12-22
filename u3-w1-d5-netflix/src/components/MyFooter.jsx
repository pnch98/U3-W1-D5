import { Button, Col, Container, Row } from "react-bootstrap";

const MyFooter = () => {
  return (
    <footer className="d-flex justify-content-center mt-5">
      <Container className="text-white w-50">
        <div className="mb-1">
          <i className="bi bi-facebook text-white-50 me-3"></i>
          <i className="bi bi-instagram text-white-50 me-3"></i>
          <i className="bi bi-twitter-x text-white-50 me-3"></i>
          <i className="bi bi-youtube text-white-50 me-3"></i>
        </div>
        <Row xs={1} sm={2} md={3} lg={4} className="mb-3">
          <Col>
            <p className="mb-0">
              <a href="#" className="text-decoration-none text-white-50 fs-8">
                Audio and Subtitles
              </a>
            </p>
          </Col>
          <Col>
            <p className="mb-0">
              <a href="#" className="text-decoration-none text-white-50 fs-8">
                Audio Description
              </a>
            </p>
          </Col>
          <Col>
            <p className="mb-0">
              <a href="#" className="text-decoration-none text-white-50 fs-8">
                Help Center
              </a>
            </p>
          </Col>
          <Col>
            <p className="mb-0">
              <a href="#" className="text-decoration-none text-white-50 fs-8">
                Gift Cards
              </a>
            </p>
          </Col>
          <Col>
            <p className="mb-0">
              <a href="#" className="text-decoration-none text-white-50 fs-8">
                Media Center
              </a>
            </p>
          </Col>
          <Col>
            <p className="mb-0">
              <a href="#" className="text-decoration-none text-white-50 fs-8">
                Investor Relations
              </a>
            </p>
          </Col>
          <Col>
            <p className="mb-0">
              <a href="#" className="text-decoration-none text-white-50 fs-8">
                Jobs
              </a>
            </p>
          </Col>
          <Col>
            <p className="mb-0">
              <a href="#" className="text-decoration-none text-white-50 fs-8">
                Terms of Use
              </a>
            </p>
          </Col>
          <Col>
            <p className="mb-0">
              <a href="#" className="text-decoration-none text-white-50 fs-8">
                Privacy
              </a>
            </p>
          </Col>
          <Col>
            <p className="mb-0">
              <a href="#" className="text-decoration-none text-white-50 fs-8">
                Legal Notices
              </a>
            </p>
          </Col>
          <Col>
            <p className="mb-0">
              <a href="#" className="text-decoration-none text-white-50 fs-8">
                Cookie Preferences
              </a>
            </p>
          </Col>
          <Col>
            <p className="mb-0">
              <a href="#" className="text-decoration-none text-white-50 fs-8">
                Corporate Information
              </a>
            </p>
          </Col>
          <Col>
            <p className="mb-0">
              <a href="#" className="text-decoration-none text-white-50 fs-8">
                Contact us
              </a>
            </p>
          </Col>
        </Row>
        <Button className="btn-netflix rounded-0 fs-7 px-2 py-1 mb-3 ">Service Code</Button>
        <p className="fs-10 text-white-50">© 1997-2023 Netflix, Inc.</p>
      </Container>
    </footer>
  );
};
export default MyFooter;
