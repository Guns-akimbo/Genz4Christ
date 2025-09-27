type CardProps = {
  title: string;
  description: string;
  image: string;
};

const Card = ({ title, description, image }: CardProps) => {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`, opacity: 1.9,
      }}
      className={`bg-red-500 cursor-pointer h-[380px] w-[300px] shadow-md rounded-2xl p-6 flex flex-col justify-end pb-8 gap-4 hover:shadow-lg transition-shadow  bg-cover bg-center `}
    >
      <div className="relative z-10 space-y-2">
        <h2 className="text-lg font-semibold text-white">{title}</h2>
        <p className="text-white text-sm ">{description}</p>
      </div>
    </div>
  );
};

export default Card;
