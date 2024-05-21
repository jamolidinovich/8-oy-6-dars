// import styled from "@emotion/styled";
// import HomeHero from "../components/HomeHero";
// import { useState, useEffect } from "react";
// function Home() {
//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null);
//   const token = localStorage.getItem("token");
//   useEffect(() => {
//     fetch("https://api.spotify.com/v1/browse/featured-playlists", {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     })
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error("Network response was not ok");
//         }
//         return res.json();
//       })
//       .then((d) => {
//         setData(d.playlists.items);
//       })
//       .catch((err) => {
//         setError(err);
//       });
//   }, []);


//   if (error) {
  //     return <div>Error: {error.message}</div>;
  //   }
  
  //   if (!data) {
    //     return <div>Loading...</div>;
    //   }
    
    //   return <div></div>;
    // }
    
    // export default Home;
    import Main from "../components/Main";
    
    function Home() {
      return (
        <div>
      <Main></Main>
    </div>
  );
}

export default Home;
