//component
import Landing from "../container/landing/Landing";

export default function Home({ /*news*/ }) {
  return (
    <>
      <Landing /*news={news}*/ />
    </>
  );
}

// export async function getStaticProps() {
//   let url = process.env.BASE_URL + process.env.PATH.MAIN;
//   const res = await fetch(url);
//   let news = await res.json();

//   return {
//     props: {
//       news,
//     },
//   };
// }
