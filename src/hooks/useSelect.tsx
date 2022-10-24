import { useEffect, useState } from "react";
import { params as paramsCard } from "../aleatorio";
import { emiter, emittedData } from "../events/selected";

export type FunctionSelect = () => {
  data: paramsCard[];
};

const useSelect: FunctionSelect = () => {
  const [view, setView] = useState<string>();
  const [data, setData] = useState<paramsCard[]>([]);

  useEffect(() => {
    const generateData = (): paramsCard[] => {
      const raw: paramsCard[] = [
        {
          id: "1",
          title: "Integraciones 1",
          description:
            "Conecta Slack Gmail Outlok y tus otras herramientas favoritas",
          image: "./vite.svg",
          isVisible: true
        },
        {
          id: "2",
          title: "Integraciones 2",
          description:
            "Conecta Slack Gmail Outlok y tus otras herramientas favoritas",
          image: "./vite.svg",
          isVisible: false
        },
        {
          id: "3",
          title: "Integraciones 3",
          description:
            "Conecta Slack Gmail Outlok y tus otras herramientas favoritas",
          image: "./vite.svg",
          isVisible: false
        }
      ];
      
      raw.map((v) => ({ ...v, isVisible: view === v.title }));

      return raw;
    };

    const result: paramsCard[] = generateData();

    setData(result);

    emiter.on("click", (id: string) => {
      setView(id);

      emittedData(generateData());
    });

    return () => {
      emiter.removeListener("click");
    };
  }, []);

  return { data };
};

export default useSelect;
