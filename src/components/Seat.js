import React from "react";
import { ReactComponent as SeatAvailable } from "../assets/seat-available.svg";
import styled from "styled-components";

import Tippy from "@tippyjs/react";

const Seat = ({ isBooked, row, seatNum, price }) => {
  const tip = `Row ${row} Seat ${seatNum} - ${price}$`;

  return (
    <ToolTip content={tip}>
      <SeatButton disabled={isBooked}>
        <SEAT isBooked={isBooked} />
      </SeatButton>
    </ToolTip>
  );
};

const SEAT = styled(SeatAvailable)`
  filter: ${(p) => p.isBooked && "grayscale(100%)"};
`;

const ToolTip = styled(Tippy)`
  background: black;
`;

const SeatButton = styled.button`
  border: none;
`;

export default Seat;
