import react, { createContext, useReducer } from "react";

export const SeatContext = createContext();

const initialState = {
  hasLoaded: false,
  seats: null,
  numsOfRows: 0,
  seatsPerRow: 0,
};

function reducer(state, action) {
  //TODO
}

export const SeatProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const receiveSeatInfoFromServer = (data) => {
    dispatch({
      type: "receive-seat-info-from-server",
      ...data,
    });
  };

  return (
    <SeatContext.Provider
      value={{ state, actions: { receiveSeatInfoFromServer } }}
    >
      {children}
    </SeatContext.Provider>
  );
};
