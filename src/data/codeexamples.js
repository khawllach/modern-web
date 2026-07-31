const codeexamples = {
  "App.jsx": `import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
    
function App()  {
      return (
        <div className="bg-slate-950 min-h-screen text-white overflow-hidden">
          <Navbar/>
          <Hero/>
        </div>
      )
    }
    
    export default App
    
    `,

  "Hero.jsx": `import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import codeexamples from "../data/codeexamples";
    
export default function Hero() {
    const [mouseposition, setmouseposition] = useState({ x: 0, y: 0 });
    const [activetab, setactivetab] = useState("App.jsx");
    
    `,

  "Navbar.jsx": `import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png"
import { useState } from "react";

export default function Navbar(){
    const [mobilemenu,setmobilemenu] = useState(false);
    return <nav className="fixed top-0 bg-slate-900/70 w-full z-50 transition-all duration-300 backdrop-blur-sm ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
                <div className="flex space-x-1 items-center group cursor-pointer">
                    <div>
                        <img src={logo} alt="" className="w-6 h-6 sm:w-8 sm:h-8"/>
                    </div>
                    <span className="text-lg sm:text-xl md:text-2xl font-medium">
                        <span className="text-white">Code</span>
                        <span className="text-blue-400">Flow</span>
                    </span> 
                </div>
                {/* nav links */}
                <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
                    <a href="" className="text-gray-300 hover:text-white text-sm lg:text-base ">Features</a>
                    <a href="" className="text-gray-300 hover:text-white text-sm lg:text-base ">Pricing</a>
                    <a href="" className="text-gray-300 hover:text-white text-sm lg:text-base ">Testimonials</a>
                    <a href="" className="text-gray-300 hover:text-white text-sm lg:text-base ">Features</a>
                    <a href="" className="text-gray-300 hover:text-white text-sm lg:text-base ">Features</a>

                </div>
                <button className="md:hidden " onClick={()=>setmobilemenu((prev) =>!prev)}>
                    
                   {mobilemenu ? <X className="w-5 h-5 sm:w-6 sm:h-6"/> : <Menu className="w-5 h-5 sm:w-6 sm:h-6"/>}
                </button>
            </div>
        </div>
    `,
};
export default codeexamples;

export const floatingcard={
    "App.jsx":{
      bgcolor:"bg-blue-500/20",
      iconcolor:"text-blue-400",
      textcolor:"text-blue-200",
      contentcolor:"text-blue-300",
      icon:"AI",
      title:"Smart Completion",
      content:"AI-Powered code suggestions in real-time",
    },
    "Hero.jsx":{
      bgcolor:"bg-purple-500/20",
      iconcolor:"text-purple-400",
      textcolor:"text-purple-200",
      contentcolor:"text-purple-300",
      icon:"⚡",
      title:"Auto Animation",
      content: "Dynamic typing effects generated automatically",
    },
    "Navbar.jsx": {
    bgcolor: "bg-emerald-500/20",
    iconcolor: "text-emerald-400",
    textcolor: "text-emerald-200",
    contentcolor: "text-emerald-300",
    icon: "🔍",
    title: "Smart Search",
    content: "Intelligent code search across your project",
  },
};
