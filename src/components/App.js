import React, { useContext, useEffect } from "react";

import GlobalStyles from "./GlobalStyles";

import { SeatContext } from "./SeatContext";

import TicketWidget from "./TicketWidget";

function App() {
  const {
    state,
    actions: { receiveSeatInfoFromServer },
  } = useContext(SeatContext);

  useEffect(() => {
    fetch("/api/seat-availability")
      .then((res) => res.json())
      .then((data) => receiveSeatInfoFromServer(data));
  }, []);

  console.log(state);

  return (
    <>
      <GlobalStyles />
      <TicketWidget />
    </>
  );
}

export default App;
