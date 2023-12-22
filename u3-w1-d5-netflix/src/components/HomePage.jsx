import { Component } from "react";
import { Alert, Container, Dropdown } from "react-bootstrap";
import Gallery from "./Gallery";

class HomePage extends Component {
  state = {
    ok: true,
    status: "",
  };
  setOk = (boolean) => {
    this.setState({ ok: boolean });
  };
  setStatus = (status) => {
    this.setState({ status });
  };
  message = {
    401: "Unauthorized!",
    400: "Bad request!",
  };
  render() {
    return (
      <main className="text-white">
        <Container fluid className="px-4">
          {this.state.ok ? (
            <>
              <div className="d-flex align-items-center justify-content-between mb-3">
                <div className="d-flex align-items-center">
                  <h1 className="h2 me-4">TV Shows</h1>
                  <Dropdown>
                    <Dropdown.Toggle
                      id="dropdown-basic"
                      className="btn btn-outline-light bg-netflix rounded-0 fs-7 px-2 py-1"
                    >
                      Genres
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Comedy</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Drama</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Thriller</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <div className="mx-3">
                  <i class="bi bi-grid fs-5 me-5"></i>
                  <i class="bi bi-grid-3x3 fs-5"></i>
                </div>
              </div>
              <Gallery saga="star wars" title="Trending Now" setOk={this.setOk} setStatus={this.setStatus} />
              <Gallery saga="batman" title="Watch it Again" setOk={this.setOk} setStatus={this.setStatus} />
              <Gallery saga="harry potter" title="New Releases" setOk={this.setOk} setStatus={this.setStatus} />
            </>
          ) : (
            <div className="text-center">
              <Alert variant="danger">
                Error! Status: {this.state.status} - {this.message[this.state.status]}
              </Alert>
            </div>
          )}
        </Container>
      </main>
    );
  }
}
export default HomePage;
