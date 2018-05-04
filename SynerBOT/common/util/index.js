export function createConstants(...constants) {
  return constants.reduce((acc, constant) => {
    acc[constant] = constant;
    return acc;
  }, {});
}

export const createReducer = (initialState, reducerMap) => (state = initialState, action = {}) => {
  const reducer = reducerMap[action.type];

  return reducer
      ? reducer(state, action.payload)
      : state;
};


export const checkStatus = (response) => {
  if (!response.ok) { // (response.status < 200 || response.status > 300)
    const error = new Error(response.statusText);
    error.response = response;
    error.statusCode = response.status;
    throw error;
  }
  return response;
};

export function getJSON(data) {
    return data ? data.json() : data;
};
export const parseJSON = response => response.json().catch(() => ({}));
