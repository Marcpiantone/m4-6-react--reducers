import React from "react";
import { ReactComponent as SeatAvailable } from "../assets/seat-available.svg";
import styled from "styled-components";

import Tippy from "@tippyjs/react";

const Seat = ({ isBooked, row, seatNum, price }) => {
  const tip = `Row ${row} Seat ${seatNum} - ${price}$`;

  return (
    <ToolTip content={tip}>
      <SEAT isBooked={isBooked} />
    </ToolTip>
  );
};

const SEAT = styled(SeatAvailable)`
  filter: ${(p) => p.isBooked && "grayscale(100%)"};
`;

const ToolTip = styled(Tippy)`
  background: black;
`;

export default Seat;
