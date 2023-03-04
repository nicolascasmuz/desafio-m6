customElements.define(
  "enter-room-page",
  class extends HTMLElement {
    shadow: ShadowRoot;
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });
      this.render();
    }
    render() {
      this.shadow.innerHTML = `
        <main-title-comp title="Piedra Papel o Tijera"></main-title-comp>
        <div class="button-container">
          <text-field-comp text="código"></text-field-comp>
          <button-comp class="button__ingresar-sala" text="Ingresar"></button-comp>
        </div>
        <hands-comp></hands-comp>
      `;

      const style = document.createElement("style");
      style.innerHTML = `
        main-title-comp {
          grid-row: 1;
          align-self: center;
          margin-top: 25px;
        }
        .button-container {
          grid-row: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          align-self: center;
          gap: 20px;
        }
        hands-comp {
          grid-row: 3;
          align-self: end;
        }
        `;

      this.shadow.appendChild(style);
    }
  }
);
