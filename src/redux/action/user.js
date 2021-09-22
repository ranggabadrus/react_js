export const getUser = (params) => {
  //   console.log("params ", params);

  return {
    type: "GET_USER",
    payload: params,
  };
};

export const getName = () => {
  return async (dispatch) => {
    try {
      const res = await fetch("https://reactnative.dev/movies.json")
        .then((e) => e.json())
        .then((e) => {
          const newArray = e.movies.map((e) => e.title);
          return newArray[0];
        });

      dispatch({
        type: "GET_USER",
        payload: res,
      });

      return {
        message: "Fetch Success",
        code: 200,
        data: res,
      };
    } catch (error) {}
  };
};
