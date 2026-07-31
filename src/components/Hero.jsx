import { ArrowRight, ChevronDown, Play, Radius, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import codeexamples, { floatingcard } from "../data/codeexamples";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function Hero() {
  const [mouseposition, setmouseposition] = useState({ x: 0, y: 0 });
  const [activetab, setactivetab] = useState("App.jsx");
  const currentfloatingcard = floatingcard[activetab];

  useEffect(() => {
    function handlemousemove(e) {
      setmouseposition({
        x: e.clientX,
        y: e.clientY,
      });
    }
    window.addEventListener("mousemove", handlemousemove);

    return () => {
      window.removeEventListener("mousemove", handlemousemove);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8 ">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(
                    600px circle at ${mouseposition.x}px ${mouseposition.y}px,
                    rgba(59 ,130 ,246 , 0.15),
                    transparent 20%)`,
        }}
      />

      <div className="absolute top-20 left-4 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-blue-500/10 blur-2xl rounded-full animate-pulse" />
      <div className="absolute bottom-20 right-4 sm:right-10 w-48 h-48 sm:w-72 sm:h-72 bg-cyan-500/10 blur-2xl rounded-full animate-pulse delay-1000" />
      <div className="w-full max-w-7xl mx-auto text-center relative">
        <div className="max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-2 text-center lg:text-left gap-6 sm:gap-8 lg:gap-12 items-center relative">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 sm:px-4 mb-4 sm:mb-6 bg-blue-500/10 py-2 border border-blue-500/20 rounded-full animate-in slide-in-from-bottom duration-700">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-xs sm:text-sm text-blue-300">
                Introducing CodeFlow AI
              </span>
            </div>
            <h1 className="text-5xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-4 sm:mb-6 animate-in slide-in-from-bottom duration-700 delay-100 leading-tight">
              <span className="bg-linear-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent block mb-1 sm:mb-2">
                Code Faster
              </span>
              <span className="bg-linear-to-b from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent block mb-1 sm:mb-2">
                Build Better
              </span>
              <span className="bg-linear-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent block mb-1 sm:mb-2">
                With Code Flow AI
              </span>
            </h1>
            <p className="text-md sm:text-base lg:text-lg text-gray-400 max-w-2xl mx-auto mb-6 sm:mb-8 lg:mx-0 animate-in slide-in-from-bottom delay-200 leading-relaxed">
              {" "}
              Accelerate your development workflow with intelligent code
              completion, automated testing, and smart debugging. Ship
              production-ready code 10x faster.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-8 sm:mb-12 animate-in slide-in-from-bottom duration-700 delay-300">
              <button className=" bg-linear-to-b from-blue-600 to-blue-400 group w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-sm font-semibold sm:text-base transition-all duration-300 hover:scale-102 flex items-center justify-center space-x-2">
                <span>Start Coding Free</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className=" bg-linear-to-b bg-white/5 backdrop-blur-sm border border-white/10 group w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-sm font-semibold sm:text-base transition-all duration-300 hover:bg-white/10 flex items-center justify-center space-x-2">
                <div className="p-2 bg-white/10 rounded-full group-hover:bg-white/20 duration-300 transition-colors">
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-white" />
                </div>
                <span>Watch A demo</span>
              </button>
            </div>
          </div>
          <div className="relative order-2 w-full">
            <div className="bg-white/5 p-3 sm:p-4 backdrop-blur-xl rounded-xl sm:rounded-2xl shadow-2xl border border-white/10 ">
              {/*code card */}
              <div className="bg-linear-to-br from-gray-900/20 to-gray-800/20 backdrop-blur-sm rounded-lg overflow-hidden h-280px sm:h-350px">
                {/*ide header */}
                <div className="flex items-center justify-between bg-white/5 px-3 py-2 sm:px-4 sm:py-3 border-b border-white/10 backdrop-blur-sm  ">
                  <div className="flex items-center space-x-2 ">
                    <div className="flex items-center space-x-1 sm:space-x-2 ">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full" />
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full" />
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full" />
                    </div>
                    <span className="text-xs sm:text-sm text-gray-300">
                      CodeFlow AI
                    </span>
                  </div>
                  <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
                </div>
                <div className="p-3 sm:p-4 relative h-full">
                  {/*file tabs */}
                  <div className="flex space-x-1 sm:spae-x-2 mb-3 sm:mb-4 overflow-x-auto">
                    <button
                      onClick={() => setactivetab("App.jsx")}
                      className={`px-3 py-2 backdrop-blur-sm text-xs sm:text-sm rounded-t-lg border 
                                                    ${
                                                      activetab === "App.jsx"
                                                        ? "bg-blue-500/30 text-white border-blue-400/20"
                                                        : " bg-white/5 text-gray-300 border-white/10 hover:bg-white/10"
                                                    } transition-all duration-200 whitespace-nowrap `}
                    >
                      App.jsx
                    </button>
                    <button
                      onClick={() => setactivetab("Hero.jsx")}
                      className={`px-3 py-2 backdrop-blur-sm text-xs sm:text-sm rounded-t-lg border 
                                                    ${
                                                      activetab === "Hero.jsx"
                                                        ? "bg-blue-500/30 text-white border-blue-400/20"
                                                        : " bg-white/5 text-gray-300 border-white/10 hover:bg-white/10"
                                                    } transition-all duration-200 whitespace-nowrap `}
                    >
                      Hero.jsx
                    </button>
                    <button
                      onClick={() => setactivetab("Navbar.jsx")}
                      className={`px-3 py-2 backdrop-blur-sm text-xs sm:text-sm rounded-t-lg border 
                                                    ${
                                                      activetab === "Navbar.jsx"
                                                        ? "bg-blue-500/30 text-white border-blue-400/20"
                                                        : " bg-white/5 text-gray-300 border-white/10 hover:bg-white/10"
                                                    } transition-all duration-200 whitespace-nowrap `}
                    >
                      Navbar.jsx
                    </button>
                  </div>
                  {/*code content */}
                  <div className=" relative overflow-hidden grow">
                    <SyntaxHighlighter
                      language="javascript"
                      style={nightOwl}
                      customStyle={{
                        margin: 0,
                        fontSize: 11,
                        borderRadius: "8px",
                        lineHeight: "1.4",
                        height: "100%",
                        border: "1px solid #3c3c3c ",
                        wordWrap:"break-word",
                        whiteSpace:"pre-wrap",
                        textAlign:"left",
                      }}
                    >
                      {codeexamples[activetab]}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>
              {/*floating card */}
              <div
                className={`hidden lg:block  absolute bottom-4 right-4 transform translate-x-8 translate-y-8 w-72 ${currentfloatingcard.bgcolor} backdrop-blur-xl rounded-lg p-4 border border-white/20 shadow-2xl`}
              >
                <div className="flex items-center space-x-2 mb-2">
                  <div
                    className={`w-6 h-6 ${currentfloatingcard.iconcolor} flex items-center justify-center text-sm font-bold`}
                  >
                    {currentfloatingcard.icon}
                  </div>
                  <span
                    className={`text-sm font-medium ${currentfloatingcard.textcolor}`}
                  >
                    {currentfloatingcard.title}
                  </span>
                </div>
                <div
                  className={` text-sm text-left ${currentfloatingcard.contentcolor}`}
                >
                  {currentfloatingcard.content}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
