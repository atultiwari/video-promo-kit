import { Folder, Still } from "remotion";
import { CAROUSEL_SIZE, CAROUSEL_SLIDE_COUNT, CarouselSlide } from "./carousel/Carousel";
import promo from "./data/promo.json";
import { ThumbnailVariant } from "./thumbnails/ThumbnailVariant";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Folder name="Thumbnails">
        {promo.thumbnails.map((t) => (
          <Still key={t.id} id={t.id} component={ThumbnailVariant} width={1280} height={720} defaultProps={{ thumbId: t.id }} />
        ))}
      </Folder>
      <Folder name="Carousel">
        {Array.from({ length: CAROUSEL_SLIDE_COUNT }).map((_, i) => (
          <Still
            key={i}
            id={`carousel-${String(i + 1).padStart(2, "0")}`}
            component={CarouselSlide}
            width={CAROUSEL_SIZE.width}
            height={CAROUSEL_SIZE.height}
            defaultProps={{ index: i }}
          />
        ))}
      </Folder>
    </>
  );
};
