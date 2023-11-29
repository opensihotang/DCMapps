import { useEffect, useState } from "react";

function useFetch(url = "") {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     setLoading(true);
//     try {
//       const response = await fetch(url);
//       const responseJson = await response.json();
//       setData(responseJson);
//       setLoading(false);
//     } catch (err) {
//       console.log(err);
//     }
//   };
//   return {
//     data,
//     loading,
//     refetch : fetchData
//   };
}
export default useFetch;
