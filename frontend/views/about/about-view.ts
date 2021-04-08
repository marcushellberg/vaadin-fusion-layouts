import "!style-loader!css-loader!./about-view.css";
import { customElement, html } from "lit-element";
import { View } from "../../views/view";
import "@vaadin/vaadin-text-field";
import "@vaadin/vaadin-button";

@customElement("about-view")
export class AboutView extends View {
  render() {
    return html` <marquee><h1>Layouting in Vaadin Fusion</h1></marquee> `;
  }
}
