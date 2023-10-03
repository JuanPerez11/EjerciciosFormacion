import React, { useState } from 'react';
import './styles.css'

const Panel = ({ title, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(previsExpanded => !previsExpanded);
  };

  return (
    <div className="panel">
      <div className="panel-header">
        <h2>{title}</h2>
        {isExpanded && <div className="panel-content">{children}</div>}
        <button onClick={toggleExpand}>
          {isExpanded ? 'Contraer' : 'Expandir'}
        </button>
      </div>
      
    </div>
  );
};

export default Panel;
