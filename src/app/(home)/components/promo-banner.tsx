import Image, { ImageProps } from "next/image";

const PromoBanner = ({ alt, ...props }: ImageProps) => {
  return (
    <Image
      sizes="100wv"
      width={0}
      height={0}
      className="h-auto w-full px-5"
      alt={alt}
      priority={true} // {false} | {true}
      {...props}
    />
  );
};

export default PromoBanner;
