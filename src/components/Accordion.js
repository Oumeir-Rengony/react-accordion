import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const Accordion = ({ children, openType }) => {
  const accordionRef = useRef(null);

  useEffect(() => {
    //Toggle button
    const accordionToggle =
      accordionRef.current.querySelectorAll(".accordion-title");

    //Toggle Arrow
    const accordionArrow = accordionRef.current.querySelectorAll(".arrow");

    const accordionContent =
      accordionRef.current.querySelectorAll(".accordion-content");

    accordionToggle.forEach((el, index) => {
      // if auto show 1st panel
      if (openType === "auto") {
        accordionContent[0].classList.add("show");
        accordionArrow[0].classList.add("arrow-down");
      }

      // add click listener on toggle
      el.addEventListener("click", (event) => {

        //auto close all if openType=auto
        if ((openType === "auto")) {
          accordionContent.forEach((el) => {
            el.classList.remove("show-panel");
          });
          accordionArrow.forEach((el) => {
            el.classList.remove("arrow-down");
          });
        }

        //onClick toggle panel
        accordionContent[index].classList.toggle("show-panel");
        accordionArrow[index].classList.toggle("arrow-down");
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
