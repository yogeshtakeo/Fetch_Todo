import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function Feed() {
  interface Item {
    createdAt: string;
    name: string;
    avatar: string;
    posts: string;
    id: string;
    likes: number;
    comments: string[];
  }

  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    axios
      .get<Item[]>("https://6446cb52ee791e1e290938e9.mockapi.io/socialmedia3")
      .then((response) => {
        console.log(response.data);
        const initialItems = response.data.map((item) => ({
          ...item,
          likes: 0,
          comments: [],
        }));
        setItems(initialItems);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleLike = (itemId: string) => {
    const newItems = items.map((item) => {
      if (item.id === itemId) {
        return { ...item, likes: item.likes + 1 };
      }
      return item;
    });
    setItems(newItems);
  };

  const handleComment = (itemId: string, comment: string) => {
    const newItems = items.map((item) => {
      if (item.id === itemId) {
        return { ...item, comments: [...item.comments, comment] };
      }
      return item;
    });
    setItems(newItems);
  };

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
            <button
              className="bg-slate-50 text-red-600 hover:bg-red-500 flex"
              onClick={() => handleLike(item.id)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="red"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="red"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
              ({item.likes})
            </button>
            <button
              className="bg-slate-50 text-white hover:bg-red-500 flex"
              onClick={() => {
                const comment = prompt("Enter your comment:");
                if (comment) {
                  handleComment(item.id, comment);
                }
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="black"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                />
              </svg>
              ({item.comments.length})
            </button>
          </div>
          <ul>
            {item.comments.map((comment, index) => (
              <li className="text-grey-600" key={index}>
                Random User: {comment}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Feed;
