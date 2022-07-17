import {createContext } from "react";

const MyContext = createContext();

const DropMenu = createContext({}); // left navbar menu
const CurrentMusic = createContext(null); // current music info
const AudioMusic = createContext(null); // audio ref




export { MyContext, DropMenu, CurrentMusic, AudioMusic };