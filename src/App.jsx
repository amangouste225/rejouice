import bg from "./assets/background.mp4";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import locomotiveScroll from "locomotive-scroll";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function App() {
  const pageContent = useRef(null);
  const cursor = useRef(null);
  const main = useRef(null);

  useEffect(() => {
    const scroll = new locomotiveScroll({
      el: main.current,
      smooth: true,
    });
  });

  useGSAP(
    () => {
      const cursurFunc = () => {
        pageContent.current.addEventListener("mousemove", (event) => {
          gsap.to(cursor.current, {
            x: event.clientX,
            y: event.clientY,
          });
        });

        pageContent.current.addEventListener("mouseenter", () => {
          gsap.to(cursor.current, {
            scale: 1,
            opacity: 1,
          });
        });

        pageContent.current.addEventListener("mouseleave", () => {
          gsap.to(cursor.current, {
            scale: 0,
            opacity: 0,
          });
        });
      };

      cursurFunc();
    },
    { scope: pageContent }
  );

  return (
    <main className="h-full w-full" ref={main}>
      <div className="h-screen w-full relative" ref={pageContent}>
        <div
          id="cursor"
          ref={cursor}
          className="h-32 rounded-full w-32 bg-primary fixed z-50 flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
        >
          <h5 className="text-xl text-black">Play video</h5>
        </div>
        <video
          autoPlay
          loop
          muted
          src={bg}
          className="h-full w-full object-cover absolute"
        ></video>
        <header className="h-full w-full relative flex z-50 flex-col justify-between items-center">
          <nav className="text-white wrapper text-3xl flex items-center justify-between w-full p-10 font-thin">
            <h1>Aside agency.</h1>
            <button>Menu</button>
          </nav>
          <h1 className="font-re font-thin rej text-white">Rejouice</h1>
        </header>
      </div>
      <div className="h-screen w-full"></div>
    </main>
  );
}

export default App;
