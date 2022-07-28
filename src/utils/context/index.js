import {createContext } from "react";

const DropMenu = createContext({}); // left navbar menu
const CurrentMusic = createContext(null); // current music info
const AudioMusic = createContext(null); // audio ref
const CurrentAlbum = createContext(null); 
const LibraryAlbum = createContext(null); 
const MusicOptions = createContext(null); 
const LikedSongsList = createContext(null); 
const SearchValue = createContext(""); 

export {
  DropMenu,
  CurrentMusic,
  AudioMusic,
  CurrentAlbum,
  MusicOptions,
  LikedSongsList,
  SearchValue,
  LibraryAlbum,
};