import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setisLoading] = useState(true);
  const [error, seterror] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: AbortController.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error("COULD NOT FETCH DATA FOR THAT RESOURCE");
          }
          return res.json();
        })

        .then((data) => {
          setData(data);
          setisLoading(false);
          seterror(null);
        })

        .catch((err) => {
          if ((err.name = "AbortError")) {
            console.log("FETCH ABORTED");
          } else {
            seterror(err.message);
            setisLoading(false);
          }
        });
    });

    return () => {
      abortCont.abort();
    };
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
