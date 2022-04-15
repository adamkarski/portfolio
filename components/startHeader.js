import { Component } from "react";
import Logotypes from "../components/logotypes"
export default class Start_header extends Component {
  static async getStaticProps() {}

  render() {
    return (
      <>
        <div className="headerElements">
          <div className="pt-24 "></div>

          <Logotypes></Logotypes>

          <img src="/images/responsive_devices.png" className="responsiveDev" />
        </div>
      </>
    );
  }
}
