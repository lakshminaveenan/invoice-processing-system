import React, { Component } from 'react';
import PDFViewer from './components/PDFViewer';
import InvoiceForm from './components/InvoiceForm';
import InvoiceDetails from './components/InvoiceDetails';
import LineItemDetails from './components/LineItemDetails';
import FooterActions from './components/FooterActions';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <div className="pdf-viewer">
          <PDFViewer />
        </div>
        <div className="invoice-form">
          <InvoiceForm />
          <InvoiceDetails />
      <LineItemDetails />
      <FooterActions />
        </div>
      </div>
    );
  }
}

export default App;
