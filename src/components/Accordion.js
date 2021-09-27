import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Accordion = ({ children, openType }) => {
  const [{ toggled }, setToggled] = useState({ toggled: [] });

  useEffect(() => {
    openType === "auto"
      ? setToggled({ toggled: [0] })
      : setToggled({ toggled: [] });
  }, [openType]);

  const togglePanel = (index) => {
    const idList =
      openType === "auto"
        ? [index]
        : toggled.includes(index)
        ? toggled.filter((i) => i !== index)
        : toggled.concat(index);

    setToggled({ toggled: idList });
  };

  return (
    <AccordionWrapper>
      {React.Children.map(children, (component, index) => {
        return React.cloneElement(component, {
          index,
          toggled: toggled.includes(index),
          togglePanel
        });
      })}
    </AccordionWrapper>
  );
};

const AccordionWrapper = styled.div`
  text-align: center;
  margin-top: 12px;
`;

export default Accordion;
