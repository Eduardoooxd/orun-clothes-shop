"use client";

import { store } from "@/store";
import { setDictionary } from '@/store/dictionarySlice';
import { useRef } from "react";

interface PreloaderProps {
  dictonary: Dictionary;
}

function Preloader({dictonary}: PreloaderProps) {
  const loaded = useRef(false);
  if (!loaded.current) {
    store.dispatch(setDictionary(dictonary));

    loaded.current = true;
  }

  return null;
}

export default Preloader;