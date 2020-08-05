import React, { useContext } from "react";
import { ReactComponent as SeatAvailable } from "../assets/seat-available.svg";
import styled from "styled-components";

import Tippy from "@tippyjs/react";

import { BookingContext } from "./BookingContext";

const Seat = ({ isBooked, row, seatNum, seatId, price }) => {
  const tip = `Row ${row} Seat ${seatNum} - ${price}$`;

  const {
    actions: { beginBookingProcess },
  } = useContext(BookingContext);

  return (
    <ToolTip content={tip}>
      <SeatButton
        disabled={isBooked}
        onClick={() => {
          beginBookingProcess({ seatId, price });
        }}
      >
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
