import { Card, CardCanvas, CardPanel, CardTitle } from "@zephyr3D/react";
import { useRouter } from "next/router";
import React, { ReactNode, useState } from "react";

export type componentCard = {
  id: string;
  title: string;
  description: string;
  model: ReactNode;
  link: string;
};

interface ComponentCardProps {
  component: componentCard;
}

const ComponentCard: React.FC<ComponentCardProps> = ({ component }) => {
  const [showDescription, setShowDescription] = useState(false);
    const router = useRouter();
  return (
    <Card
      onMouseEnter={() => setShowDescription(true)}
      onMouseLeave={() => setShowDescription(false)}
      onClick={() => router.push(component.link)}
      id={component.id}
      className="flex flex-col items-center justify-center h-96 w-96"
    >
      <CardPanel className={`flex flex-col items-center justify-center gap-2 rounded-xl p-5 h-full backdrop-blur-md shadow-lg hover:-translate-y-3 hover:cursor-pointer transition duration-500 ease-in-out`}>
        <CardCanvas className="w-full">{component.model}</CardCanvas>
        <div className="flex flex-col items-center justify-center text-center w-full h-full px-14 dark:bg-slate-700/10 dark:backdrop-blur-lg gap-3 absolute z-20 opacity-85">
          <CardTitle
            className={`text-2xl transition duration-700 ease-in-out ${
              showDescription ? `-translate-y-8` : `translate-y-0`
            }`}
          >
            {component.title}
          </CardTitle>
          <div  className={`absolute ${showDescription ? `translate-y-5 opacity-100` : `translate-y-0 opacity-0`} transition duration-500 ease-in-out`}>
            <p className={`text-sm p-5`}>{component.description}</p>
          </div>
        </div>
      </CardPanel>
    </Card>
  );
};

export default ComponentCard;
