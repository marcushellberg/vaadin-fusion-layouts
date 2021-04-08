import "!style-loader!css-loader!./about-view.css";
import { customElement, html } from "lit-element";
import { View } from "../../views/view";
import "@vaadin/vaadin-text-field";
import "@vaadin/vaadin-button";
import "@vaadin/vaadin-grid";
import "@vaadin/vaadin-grid/vaadin-grid-column";

@customElement("about-view")
export class AboutView extends View {
  connectedCallback() {
    super.connectedCallback();
    this.classList.add("flex", "flex-col", "spacing-b-m", "h-full");
  }

  render() {
    return html`
      <div class="flex items-end spacing-e-m">
        <vaadin-text-field label="Name"></vaadin-text-field>
        <vaadin-button>Click me</vaadin-button>
      </div>

      <vaadin-grid class="flex-grow">
        <vaadin-grid-column header="Column 1"></vaadin-grid-column>
        <vaadin-grid-column header="Column 2"></vaadin-grid-column>
        <vaadin-grid-column header="Column 3"></vaadin-grid-column>
        <vaadin-grid-column header="Column 4"></vaadin-grid-column>
        <vaadin-grid-column header="Column 5"></vaadin-grid-column>
      </vaadin-grid>
    `;
  }
}
