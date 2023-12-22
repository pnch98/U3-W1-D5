import { Component } from "react";
import avatar from "../data/imgs/avatar.png";

class EditPage extends Component {
  render() {
    return (
      <main className="d-flex justify-content-center text-white">
        <div className="d-flex flex-column justify-content-center text-white">
          <div className="border border-1 border-dark-subtle border-top-0 border-end-0 border-start-0 mb-3">
            <h1 className="display-3">Edit Profile</h1>
          </div>

          <div className="d-flex flex-column flex-md-row border border-1 border-dark-subtle border-top-0 border-end-0 border-start-0 mb-3">
            <div className="p-2">
              <img src={avatar} alt="Profile pic" width="100px" />
            </div>
            <div className="p-2">
              <div
                className="border border-1 border-dark-subtle border-top-0 border-end-0 border-start-0 mb-3"
                id="profile"
              >
                <input
                  className="w-75 bg-secondary border-0 text-white py-1 px-2 mb-2"
                  type="text"
                  value="Strive Student"
                />
                <p className="fs-5 text-white-50 mb-1">Language:</p>
                <button
                  className="btn btn-outline-light dropdown-toggle mb-3"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  English
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item text-white-50" href="#">
                      Italian
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item text-white-50" href="#">
                      German
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item text-white-50" href="#">
                      French
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item text-white-50" href="#">
                      Spanish
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item text-white-50" href="#">
                      Japanese
                    </a>
                  </li>
                </ul>
              </div>
              <div
                className="border border-1 border-dark-subtle border-top-0 border-end-0 border-start-0 mb-3"
                id="maturity"
              >
                <p className="fs-5 text-white-50 mb-1">Maturity Settings:</p>
                <span className="text-bg-light text-white bg-opacity-25 px-1 mb-1">All Maturity Ratings</span>
                <p>
                  Show titles of <b>all maturity ratings</b> for this profile
                </p>
                <button className="btn btn-netflix rounded-0 px-3 mb-3">EDIT</button>
              </div>
              <div className="d-flex flex-column" id="autoplay">
                <p className="fs-5 text-white-50 mb-1">Autoplay Controls</p>
                <div className="d-flex align-items-center">
                  <input type="checkbox" className="me-2" />
                  <small>Autoplay next episode in a series on all devices.</small>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <input type="checkbox" className="me-2" />
                  <small>Autoplay previews while browsing on all devices.</small>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-3 d-flex">
            <button className="btn btn-netflix rounded-0 me-3">SAVE</button>
            <button className="btn btn-netflix rounded-0 me-3">CANCEL</button>
            <button className="btn btn-netflix rounded-0 flex-md-grow-1">DELETE PROFILE</button>
          </div>
        </div>
      </main>
    );
  }
}
export default EditPage;
