import { useEffect, useState } from "react";

function useFetch(url) {
  let [data, setData] = useState(null);
  let [loading, setLoading] = useState(true);
  let [error, setError] = useState(null);
//   switch (options.method) {
//     case "get":
//       options = { method: "GET" };
//       break;
//     case "delete":
//       options = { method: "DELETE" };
//       break;
//     case "post":
//       options = {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(options.payload),
//       };
//   }

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Data failed to fetch!");
        return res.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  return { data, error, loading };
}

export default useFetch;
