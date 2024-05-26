import Avatar from "./Avatar";

const data = [
  {
    id: "A",
    src: "https://sandpack-bundler.vercel.app/img/avatars/001.png",
    alt: "person with curly hair and a black T-shirt",
  },
  {
    id: "B",
    src: "https://sandpack-bundler.vercel.app/img/avatars/002.png",
    alt: "person wearing a hijab and glasses",
  },
  {
    id: "C",
    src: "https://sandpack-bundler.vercel.app/img/avatars/003.png",
    alt: "person with short hair wearing a blue hoodie",
  },
  {
    id: "D",
    src: "https://sandpack-bundler.vercel.app/img/avatars/004.png",
    alt: "person with a pink mohawk and a raised eyebrow",
  },
];

function App() {
  return (
    <div className="avatar-set">
      {data.map((avatarpic) => (
        <Avatar key={avatarpic.id} src={avatarpic.src} alt={avatarpic.alt} />
      ))}
    </div>
  );
}

export default App;
