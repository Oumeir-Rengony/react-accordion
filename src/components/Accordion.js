import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const Accordion = ({ children, openType }) => {
  const accordionRef = useRef(null);

  useEffect(() => {
    //Toggle button
    const accordionToggle =
      accordionRef.current.querySelectorAll(".accordion-title");

    accordionToggle.forEach((el, index) => {
      
      //open 1st panel if type = auto
      if (openType === "auto") {
        accordionToggle[0].classList.add("open");
      }

      // add click listener on toggle
      el.addEventListener("click", (event) => {

        //auto close all panel if auto
        if (openType === "auto") {
          accordionToggle.forEach((el) => {
            el.classList.remove("open");
          });
        }
        //toggle clicked element
        el.classList.toggle("open");
      });

    });
  }, [openType]);

  return <AccordionWrapper ref={accordionRef}>{children}</AccordionWrapper>;
};

const AccordionWrapper = styled.div`
  text-align: center;
  margin-top: 12px;
`;

export default Accordion;
