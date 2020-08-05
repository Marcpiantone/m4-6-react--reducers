import React, { createContext, useReducer } from "react";

export const BookingContext = createContext();

const initialState = {
  status: "idle",
  error: null,
  selectedSeatId: null,
  price: null,
};

const reducer = (state, action) => {
  console.log(state);
  switch (action.type) {
    case "begin-booking-process": {
      return {
        ...state,
        status: "seat-selected",
        selectedSeatId: action.seatId,
        price: action.price,
      };
    }
  }
  return state;
};

export const BookingProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const beginBookingProcess = ({ seatId, price }) => {
    console.log(price);
    console.log(seatId);
    dispatch({ type: "begin-booking-process", seatId, price });
  };

  return (
    <BookingContext.Provider
      value={{
        ...state,
        actions: {
          beginBookingProcess,
        },
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};
