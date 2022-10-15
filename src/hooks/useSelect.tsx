import { useState } from "react";
import { params as paramsCard } from "../aleatorio";

export type FunctionSelect = () => {
  data: paramsCard[];
  handleClick: (value: string) => void;
};

const useSelect: FunctionSelect = () => {
  const [view, setView] = useState<string>();

  const data: paramsCard[] = [
    {
      id: "1",
      title: "Integraciones",
      description:
        "Conecta Slack Gmail Outlok y tus otras herramientas favoritas",
      image: "./vite.svg",
      isVisible: true
    },
    {
      id: "2",
      title: "Integraciones",
      description:
        "Conecta Slack Gmail Outlok y tus otras herramientas favoritas",
      image: "./vite.svg",
      isVisible: true
    },
    {
      id: "3",
      title: "Integraciones",
      description:
        "Conecta Slack Gmail Outlok y tus otras herramientas favoritas",
      image: "./vite.svg",
      isVisible: true
    }
  ].map((v) => ({ ...v, isVisible: view === v.id }));

  const handleClick: paramsCard["onClick"] = (value) => setView(value);

  return { data, handleClick };
};

export default useSelect;
