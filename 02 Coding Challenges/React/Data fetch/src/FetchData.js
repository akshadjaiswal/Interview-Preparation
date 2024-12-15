import React, { useState, useEffect } from "react";


const FetchData = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loader, setLoader] = useState(true)

  const apiURL = "https://api.github.com/users/akshadjaiswa"
  useEffect(() => {

    const fetchData = async () => {

      try {
        const response = await fetch(apiURL);
        if (!response.ok) {
          throw new Error(`Error : ${response.statusText}`)
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message)
      } finally {
        setLoader(false);
      }

    }
    fetchData()
  }, [])
  return (
    <div>
      <h1>Github User</h1>
      {loader && <p>loading....</p>}
      {error && <p>{error}</p>}
      <ul>
        {data.id}
        <li><strong>Name:{data.name}</strong></li>
         <p>Bio:{data.bio}</p>
      </ul>
    </div>
  )
}

export default FetchData;
