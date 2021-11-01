// import react
// export default function input form
// return:
// input (text)
// button to submit

import React from "react";
import { Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";

export default function InputForm({ handleSubmit, handleChange, eventInfo }) {
  return (
    <>
      <InputGroup>
        <InputLeftAddon children="Event:" />
        <Input
          placeholder="Event details"
          onChange={handleChange}
          value={eventInfo}
        />
      </InputGroup>
      <button onClick={handleSubmit}>Add Event</button>
    </>
  );
}
