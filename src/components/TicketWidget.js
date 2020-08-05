import React, { useContext } from "react";
import styled from "styled-components";
import CircularProgress from "@material-ui/core/CircularProgress";

import { getRowName, getSeatNum } from "../helpers";
import { range } from "../utils";

import { SeatContext } from "./SeatContext";

import Seat from "./Seat";

const TicketWidget = () => {
  const { state } = useContext(SeatContext);

  const numOfRows = state.numOfRows;
  const seatsPerRow = state.seatsPerRow;

  const getSeatById = (id) => {
    return state.seats[id];
  };

  return (
    <Center>
      {!state.hasLoaded && <CircularProgress />}
      {state.hasLoaded && (
        <Wrapper>
          {range(numOfRows).map((rowIndex) => {
            const rowName = getRowName(rowIndex);
            return (
              <Row key={rowIndex}>
                <RowLabel>Row {rowName}</RowLabel>
                {range(seatsPerRow).map((seatIndex) => {
                  const num = getSeatNum(seatIndex);
                  const seatId = `${rowName}-${num}`;
                  const seat = getSeatById(seatId);

                  return (
                    <SeatWrapper key={seatId}>
                      <Seat
                        isBooked={seat.isBooked}
                        row={rowName}
                        seatNum={num}
                        seatId={seatId}
                        price={seat.price}
                      />
                    </SeatWrapper>
                  );
                })}
              </Row>
            );
          })}
        </Wrapper>
      )}
    </Center>
  );
};

const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Wrapper = styled.div`
  background: #eee;
  border: 1px solid #ccc;
  border-radius: 3px;
  padding: 8px;
`;

const Row = styled.div`
  display: flex;
  position: relative;

  &:not(:last-of-type) {
    border-bottom: 1px solid #ddd;
  }
`;

const RowLabel = styled.div`
  font-weight: bold;
  color: black;
`;

const SeatWrapper = styled.div`
  padding: 5px;
`;

export default TicketWidget;
