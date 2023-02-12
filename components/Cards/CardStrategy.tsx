import { FC } from "react";

interface CardStrategyProps {
  title: string;
  subtitle: string;
  number: number;
  position?: string;
}

const CardStrategy: FC<CardStrategyProps> = ({
  title,
  subtitle,
  number,
  position,
}) => {
  return (
    <div className={`p-8 shadow-card ${position}`}>
      <div className="flex items-center">
        <div className="pr-8">
          <p className="flex items-center justify-center w-8 h-8 p-8 text-2xl rounded-full bg-orange bg-opacity-20 text-orange">
            {number}
          </p>
        </div>
        <div className="flex flex-col">
          <h4 className="mb-2">{title}</h4>
          <p>{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default CardStrategy;
