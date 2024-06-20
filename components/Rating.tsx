import Image from "next/image";
import RatingIcon from "../public/rating.svg";

type Star = {
  index: number;
  alt: string;
};

const Rating: React.FC<{ rating: number }> = ({ rating }) => {
  const stars: Star[] = [];
  for (let i = 1; i <= rating; i++) {
    stars.push({
      index: i,
      alt: `${i} star rating`,
    });
  }

  return (
    <div className="flex">
      {stars.map((star) => (
        <Image
          key={star.index}
          src={RatingIcon}
          alt={star.alt}
          width={20}
          height={20}
        />
      ))}
    </div>
  );
};

export default Rating;
