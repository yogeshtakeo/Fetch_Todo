import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Form from "./form";

function Feed() {
  interface Item {
    createdAt: string;
    name: string;
    avatar: string;
    posts: string;
    id: string;
  }

  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    axios
      .get<Item[]>("https://6446cb52ee791e1e290938e9.mockapi.io/socialmedia3")
      .then((response) => {
        console.log(response.data);
        setItems(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="box-border  p-4 border-4">
      {items.map((item) => (
        <div className="box-border h-60 w-120 p-4 border-4">
          <div className="flex items-center gap-2">
            <img
              className="rounded-t-lg"
              src={item.avatar}
              alt="profile image"
              width="40"
              height="40"
            />
            <p className="flex items-center gap-2">
              <span className="text-blue-900 text-xl">{item.name}</span>
              <span className="text-xs">@{item.id}</span>
              <span className="text-xs">{item.createdAt}</span>
            </p>
          </div>
          <p>{item.posts}</p>
          <div className="flex gap-2">
            <button className=" bg-slate-50 text-white hover:bg-red-500">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="red"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="red"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </button>

            <button className="text-white">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                />
              </svg>
            </button>

            <button className=" text-white">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                />
              </svg>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Feed;

// import { useEffect, useState } from "react";
// import axios from "axios";
// import "./App.css";
// import Form from "./form";

// function Feed() {
//   interface Item {
//     createdAt: string;
//     name: string;
//     avatar: string;
//     posts: string;
//     id: string;
//   }

//   const [items, setItems] = useState<Item[]>([]);

//   useEffect(() => {
//     axios
//       .get<Item[]>("https://6446cb52ee791e1e290938e9.mockapi.io/socialmedia3")
//       .then((response) => {
//         console.log(response.data);
//         setItems(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   return (
//     <div className="box-border  p-4 border-4">
//       {items.map((item) => (
//         <div className="box-border h-60 w-120 p-4 border-4">
//           <div className="flex items-center gap-2">
//             <img
//               className="rounded-t-lg"
//               src={item.avatar}
//               alt="profile image"
//               width="40"
//               height="40"
//             />
//             <p className="flex items-center gap-2">
//               <span className="text-blue-900 text-xl">{item.name}</span>
//               <span className="text-xs">@{item.id}</span>
//               <span className="text-xs">{item.createdAt}</span>
//             </p>
//           </div>
//           <p>{item.posts}</p>
//           <div className="flex gap-2">
//             <button className=" bg-slate-50 text-white hover:bg-red-500">
//               {" "}
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth={2.5}
//                 stroke="red"
//                 className="w-6 h-6"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
//                 />
//               </svg>
//             </button>
//             <button className="text-white">
//               {" "}
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth={1.5}
//                 stroke="currentColor"
//                 className="w-6 h-6"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
//                 />
//               </svg>
//             </button>

//             <button className=" text-white">
//               {" "}
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth={1.5}
//                 stroke="currentColor"
//                 className="w-6 h-6"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
//                 />
//               </svg>
//             </button>
//             <Form />
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }
// export default Feed;
