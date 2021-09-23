import styled from "styled-components";

import Accordion from "./components/Accordion";
import AccordionPanel from "./components/AccordionPanel";
import Audio from "./components/Audio";

export default function App() {
  return (
    <StyledWrapper>
      <h1>Simple Accordion Example</h1>

      {/* Accordion props: openTpe = simple\auto  */}
      <Accordion openType="simple">

        <AccordionPanel title="First">
          <h2>My content</h2>
          <Audio title="2021 hit list" track="simple album" />
        </AccordionPanel>

        <AccordionPanel title="Second">
          <h2>Test content</h2>
          <Audio title="pop song" track="Dual album" />
        </AccordionPanel>

        <AccordionPanel title="Third">
          <h2>Test content</h2>
          <Audio title="pop song" track="Dual album" />
        </AccordionPanel>
      </Accordion>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  width: 90%;
  margin: 12px auto;
  text-align: center;
`;
