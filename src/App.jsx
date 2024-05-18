// // import React, { useEffect, useState } from "react";

// // function App() {
// //   const [data, setData] = useState();
// //   useEffect(() => {
// //     fetch("https://api.spotify.com/v1/browse/featured-playlists", {
// //       headers: {
// //         Authorization:
// //           "Bearer BQBKAXrrIKn_fXkYc-aJjQCd6E3PjUK_H5svcV6vd6yA9EDTsuYjUZk-J1YVLcH5b_HRCBnp7a3hmOB9RiijPcqtVwQypspmZu5gOPydxvIz8lDDBho",
// //       },
// //     })
// //       .then((res) => res.json())
// //       .then((d) => {
// //         setData(d);
// //       })
// //       .then((err) => {
// //         console.log(err);
// //       });
// //     // console.log(data);
// //   }, []);

// //   return <div>{}</div>;
// // }

// // export default App;

// import React, { useEffect, useState } from "react";

// function App() {
//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch("https://api.spotify.com/v1/browse/featured-playlists", {
//       headers: {
//         Authorization:
//           "Bearer BQBKAXrrIKn_fXkYc-aJjQCd6E3PjUK_H5svcV6vd6yA9EDTsuYjUZk-J1YVLcH5b_HRCBnp7a3hmOB9RiijPcqtVwQypspmZu5gOPydxvIz8lDDBho",
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

//   return (
//     <div>
//       <h1>Featured Playlists</h1>
//       <ul>
//         {data.map((playlist) => (
//           <li key={playlist.id}>
//             <h2>{playlist.name}</h2>
//             <img src={playlist.images[0].url} alt={playlist.name} width="200" />
//             <p>{playlist.description}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;

import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Likes from "./pages/Likes";
import Musics from "./pages/Musics";
import Layout from "./layouts/layout";
import { getToken } from "./components/utils";
function App() {
  useEffect(() => {
    getToken();
  }, []);
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home></Home>
            </Layout>
          }
        ></Route>
        <Route
          path="/likes"
          element={
            <Layout>
              <Likes></Likes>
            </Layout>
          }
        ></Route>
        <Route
          path="/musics/:id"
          element={
            <Layout>
              <Musics></Musics>
            </Layout>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
