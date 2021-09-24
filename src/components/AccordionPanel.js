import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const AccordionPanel = ({ children, title }) => {
  const accordionContentRef = useRef(null);

  useEffect(() => {
    accordionContentRef.current.firstChild.style.margin = "16px";
  }, []);


  return (
    <AccordionPanelWrapper>
      <div className="accordion-title">
        {title}
        <span className="arrow"></span>
      </div>
      <div
        className="accordion-content"
        ref={accordionContentRef}
      >
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

  .accordion-title {
    background-color: #dbdbdb;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    border-radius: 8px;
    cursor: pointer;

    .arrow {
      width: 0px;
      height: 0px;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      margin-left: 4px;
      border-top: 0;
      border-bottom: 5px solid black;
    }
  }

  .accordion-content {
    display:none;
    padding: 8px;
  }

  //the magic happens here if open present show panel
  .open {
    .arrow {
      border-top: 5px solid #f00;
      border-bottom: 0;
    }

    &+.accordion-content{
      display: block
    }
  }
`;

export default AccordionPanel;
