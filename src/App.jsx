import "./index.css";
import bg from "./assets/background.mp4";
function App() {
  return (
    <main className="h-full w-full">
      <div className="h-screen w-full relative">
        <video
          autoPlay
          loop
          muted
          src={bg}
          className="h-full w-full object-cover absolute"
        ></video>
        <header className="h-full w-full relative flex z-50 flex-col justify-between items-center">
          <nav className="text-white wrapper text-3xl flex items-center justify-between w-full p-5">
            <h1>Aside agency.</h1>
            <button>Menu</button>
          </nav>
          <h1 className="font-re font-thin rej text-white">Rejouice</h1>
        </header>
      </div>
    </main>
  );
}

export default App;
