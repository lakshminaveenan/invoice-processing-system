import React, { Component } from 'react';
import PDFViewer from './components/PDFViewer';
import InvoiceForm from './components/InvoiceForm';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <div className="pdf-viewer">
          <PDFViewer />
        </div>
        <div className="invoice-form">
          <InvoiceForm />
        </div>
      </div>
    );
  }
}

export default App;
