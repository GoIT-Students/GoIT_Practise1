import { Image } from "./ImageCard.styled";

export const ImageCard = (props) => {
  return (
    <div>
      <Image src={props.src} alt={props.alt} />
    </div>
  );
};
