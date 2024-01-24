import bg from "./assets/background.mp4";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import locomotiveScroll from "locomotive-scroll";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function App() {
  const page1 = useRef();
  const page2 = useRef();
  const cursor = useRef();
  const main = useRef();
  const lines = useRef();

  const getChars = (title) => {
    let chars = [];
    title.split("").forEach((char, index) => {
      chars.push(
        <span key={index} className="h-5 letter">
          {char}
        </span>
      );
    });
    return chars;
  };

  useGSAP(
    () => {
      const locoScroll = new locomotiveScroll({
        el: main.current,
        smooth: true,
      });

      const cursorFunc = () => {
        page1.current.addEventListener("mousemove", (event) => {
          gsap.to(cursor.current, {
            x: event.clientX,
            y: event.clientY,
          });
        });

        page1.current.addEventListener("mouseenter", () => {
          gsap.to(cursor.current, {
            scale: 1,
            opacity: 1,
          });
        });

        page1.current.addEventListener("mouseleave", () => {
          gsap.to(cursor.current, {
            scale: 0,
            opacity: 0,
          });
        });
      };

      cursorFunc();
    },
    { scope: main }
  );

  return (
    <main className="h-full w-full" ref={main}>
      <div className="h-screen w-full relative" ref={page1} id="page1">
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
          <div className="max-w-max pointer-events-none">
            <h1 className="font-re font-thin rej text-white">Rejouice</h1>
          </div>
        </header>
      </div>
      <div className="h-screen max-w-max mx-auto" ref={page2} id="page2">
        <div className="flex relative justify-between font-nb text-3.5xl py-6 leading-none mt-28 items-end">
          <span
            className="w-full h-0.5 line-1 bottom-0 absolute inline-block bg-black"
            ref={lines}
          ></span>
          <h4 className="max-w-3xl">
            <div className="line h-10 w-full relative">
              <span>Design & strategy for fast growing companies</span>
            </div>
            <div className="line h-10 overflow-hidden">
              <span> Two engagement models</span>
            </div>
          </h4>
          <h4>
            <span>Paris & Abidjan</span>
          </h4>
        </div>

        <h5 className="text-7xl mt-12">
          We are a digital brand accelerator curating dream teams for dream
          clients. We design, develop, and scale market-defining brands by
          unlocking their hidden potential. Choose full cash compensation or
          offset up to 50% of our fees for equity in your company. Your vision,
          your decision.
        </h5>
      </div>
    </main>
  );
}

export default App;
