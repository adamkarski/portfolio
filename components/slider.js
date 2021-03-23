import { Component } from "react";




import Link from "next/link";

export default class extends Component {
  render() {
    return (
      <div class="slidex">
        <div class="slides">
          <div class="slide first">
            <div class="back_g"></div>
          </div>

          <div class="slide o1">
            <div class="back_g"></div>
            <div class="form_">
              <h1 class="mb-4">Strefa klienta</h1>
              <button type="submit" class="btn btn-secondary">
                Logowanie
              </button>
            </div>
          </div>

          <div class="slide o2">
            <div class="back_g"></div>

            <div class="form_">
              <h1 class="mb-4">Partnerzy</h1>
              <button type="submit" class="btn btn-secondary">
                Logowanie
              </button>
            </div>
          </div>

          <div class="slide last">
            <div class="back_g"></div>
          </div>
        </div>
      </div>
    );
  }
}
