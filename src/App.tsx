import "./global.css";

import styles from "./App.module.css";

import { Header } from "./components/Header";
import { Siderbar } from "./components/Sidebar";
import { Post, PostType } from "./components/Post";

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/muriloKuehne.png",
      name: "Murilo Kuehne",
      role: "WEB DEVELOPER & BASKETBALL PRO",
    },

    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },

      {
        type: "paragraph",
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀{" "}',
      },

      {
        type: "link",
        content: "👉 jane.design/doctorcare",
      },
    ],

    publishedAt: new Date("2025-04-04 12:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7WU7Xczauzz_oEYoA2fdN-80gd8wFLN4MUg&s",
      name: "Michael Jordan",
      role: "NBA LEGEND",
    },

    content: [
      { type: "paragraph", content: "Maybe it's my fault" },

      {
        type: "paragraph",
        content:
          "I've missed more than 9000 shots in my career. I've lost almost 300 games. 26 times, I've been trusted to take the game winning shot and missed. I've failed over and over and over again in my life. And that is why I succeed.",
      },

      {
        type: "link",
        content: "https://youtu.be/jbW4f60dCNA?si=NnNzStdg4jJ5N1ft",
      },
    ],

    publishedAt: new Date("2025-03-25 12:00:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Siderbar />
        <main>
          {posts.map((post) => {
            return <Post key={post.id} post={post} />;
          })}
        </main>
      </div>
    </div>
  );
}
