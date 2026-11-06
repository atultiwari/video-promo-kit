import carousel from "../data/carousel.json";
import { CarouselFrame, SLIDE_SIZE, type CarouselFormat, type CarouselMeta } from "./CarouselFrame";
import { SLIDE_KINDS } from "./Slides";

const { slides, format: rawFormat, ...meta } = carousel;
export const CAROUSEL_FORMAT: CarouselFormat = rawFormat === "portrait" ? "portrait" : "square";
export const CAROUSEL_SIZE = SLIDE_SIZE[CAROUSEL_FORMAT];

/** One carousel slide (1:1 or 4:5 per carousel.json "format"), chosen by index. */
export const CarouselSlide: React.FC<{ index: number }> = ({ index }) => {
  const s = slides[index];
  if (!s) throw new Error(`No carousel slide at index ${index}`);
  const kind = SLIDE_KINDS[s.kind];
  if (!kind) throw new Error(`Unknown carousel slide kind "${s.kind}"`);
  const { Cmp, mood, heat } = kind;
  return (
    <CarouselFrame meta={meta as CarouselMeta} index={index} total={slides.length} mood={mood} heat={heat} format={CAROUSEL_FORMAT}>
      <Cmp s={s} meta={meta as CarouselMeta} />
    </CarouselFrame>
  );
};

export const CAROUSEL_SLIDE_COUNT = slides.length;
