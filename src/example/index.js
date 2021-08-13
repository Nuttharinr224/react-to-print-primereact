import React from "react";
import ReactToPrint from "react-to-print";
import QRCode from "react-qr-code";
import PropTypes from "prop-types";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

class ComponentToPrint extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [0, 1, 2, 3, 4, 5]
    };
  }
  render() {
    return (
      <div className="p-grid p-mt-2">
        {this.state.columns.map((col) => (
          <div key={col} className="p-col-6" style={{ border: "groove" }}>
            <div className="p-grid">
              <div className="p-col-6">
                <div className="p-text-left">{col}</div>
                <div className="p-text-center">delivery</div>
              </div>
              <div className="p-col-6">
                <div className="p-text-center"><QRCode value="test" size="50" /></div>
                <div className="p-text-center">orderNumber</div>
              </div>
              <div className="p-col-6">
                <div className="p-text-center">trackingNumber</div>
              </div>
              <div className="p-col-6">
                <div className="p-text-center">amount</div>
              </div>
              <div className="p-col-6">
                <div className="p-text-center">mobilePhone</div>
              </div>
              <div className="p-col-6">
                <div className="p-text-center">amountBaht</div>
              </div>
              <div className="p-col-12">
                <div className="p-text-justify">name</div>
                <div className="p-text-justify">address</div>
              </div>
              <div className="p-col-12">
                <div className="p-text-justify">itemDetail</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

class Example extends React.Component {
  render() {
    return (
      <div>
        <ReactToPrint
          trigger={() => <a href="#">Print this out!</a>}
          content={() => this.componentRef}
        />
        <ComponentToPrint ref={(el) => (this.componentRef = el)} />
      </div>
    );
  }
}

export default Example;
