import { cards } from "../utils";
import Card from "./card";

const Mid = () => {
  return (
    <div className="w-full py-8 md:py-16 ">
      <div className="min-h-[60vh] md:h-[70vh] flex items-center justify-center w-full px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl w-full place-items-center justify-items-center">
          {cards.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mid;