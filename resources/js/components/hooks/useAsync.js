import { useContext, useEffect, useState } from "react";

export const useAsync = ({ dependancies = [], service, condition = true }) => {
//   const [_, setLoadingState] = useContext(LoadingContext);
  const [state, setState] = useState([]);

  useEffect(() => {
    if (condition) {
      fetchData();
    }
  }, dependancies);
  const fetchData = async () => {
    // setLoadingState({ isLoading: true });
    // call api
    const results = await service();
    // console.log(results);
    // end call api
    // setLoadingState({ isLoading: false });

    setState(results.data);
  };
  return {
    state,
  };
};
