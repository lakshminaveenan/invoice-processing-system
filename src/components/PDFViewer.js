import React, { Component } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

class PDFViewer extends Component {
  render() {
    return (
      <div className="pdf-viewer">
        <Document file="/dummy.pdf">
          <Page pageNumber={1} />
        </Document>
      </div>
    );
  }
}

export default PDFViewer;
