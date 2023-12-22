import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavbar from "./components/MyNavbar";
import { Container, Row, Col, Button, Alert } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import Gallery from "./components/Gallery";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Component } from "react";
import HomePage from "./components/HomePage";
import SettingsPage from "./components/SettingsPage";
import MyFooter from "./components/MyFooter";
import EditPage from "./components/EditPage";

class App extends Component {
  state = {
    homePage: true,
    settingsPage: false,
    editPage: false,
  };
  setEdit = () => {
    this.setState({ editPage: true });
    this.setState({ settingsPage: false });
    this.setState({ homePage: false });
  };
  setSettings = () => {
    this.setState({ settingsPage: true });
    this.setState({ editPage: false });
    this.setState({ homePage: false });
  };
  setHome = () => {
    this.setState({ homePage: true });
    this.setState({ settingsPage: false });
    this.setState({ editPage: false });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <MyNavbar
            editPage={this.state.editPage}
            setEdit={this.setEdit}
            setHome={this.setHome}
            setSettings={this.setSettings}
          />
        </header>

        {this.state.homePage && (
          <>
            <HomePage />
            <MyFooter />
          </>
        )}
        {this.state.editPage && <EditPage />}
        {this.state.settingsPage && <SettingsPage />}
      </div>
    );
  }
}

export default App;
