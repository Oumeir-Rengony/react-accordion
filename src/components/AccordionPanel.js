import React from "react";
import styled from "styled-components";

const AccordionPanel = ({ children, title, index, toggled, togglePanel }) => {
  return (
    <AccordionPanelWrapper>
      <div className="accordion-toggle" onClick={() => togglePanel(index)}>
        {title}
        <span className={`arrow-up ${toggled ? "arrow-down" : ""}`}></span>
      </div>
      <div className={`accordion-content ${toggled ? "show-panel" : ""}`}>
        {children}
      </div>
    </AccordionPanelWrapper>
  );
};

const AccordionPanelWrapper = styled.div`
  position: relative;
  text-align: center;
  border-radius: 8px;
  border: solid #dbdbdb 1px;

  .accordion-toggle {
    background-color: #dbdbdb;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    border-radius: 8px;
    cursor: pointer;

    .arrow-up {
      width: 0px;
      height: 0px;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-top: 0;
      border-bottom: 5px solid black;
      margin-left: 4px;
    }

    .arrow-down {
      border-top: 5px solid #f00;
      border-bottom: 0;
    }
  }

  .accordion-content {
    display: none;
    padding: 8px;
  }

  .show-panel {
    display: block;
  }
`;

export default AccordionPanel;
