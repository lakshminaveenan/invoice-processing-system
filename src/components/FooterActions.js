import React from 'react';

const FooterActions = () => {
  return (
    <div className="footer-actions">
      <button className="save-draft">Save to Draft</button>
      <div>
        <button className="approve">Approve</button>
        <button className="reject">Reject</button>
      </div>
    </div>
  );
};

export default FooterActions;
