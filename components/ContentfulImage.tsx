import Image, { ImageLoaderProps, ImageProps } from "next/image";
import { useState } from "react";

const SHIMMER_IMAGE_DATA =
  "data:image/svg+xml;base64,Cjxzdmcgd2lkdGg9IjcwMCIgaGVpZ2h0PSI0NzUiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImciPgogICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRjZGNkY2IiBvZmZzZXQ9IjIwJSIgLz4KICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0YwRjBGMCIgb2Zmc2V0PSI1MCUiIC8+CiAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGNkY2RjYiIG9mZnNldD0iNzAlIiAvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjcwMCIgaGVpZ2h0PSI0NzUiIGZpbGw9IiNGNkY2RjYiIC8+CiAgPHJlY3QgaWQ9InIiIHdpZHRoPSI3MDAiIGhlaWdodD0iNDc1IiBmaWxsPSJ1cmwoI2cpIiAvPgogIDxhbmltYXRlIHhsaW5rOmhyZWY9IiNyIiBhdHRyaWJ1dGVOYW1lPSJ4IiBmcm9tPSItNzAwIiB0bz0iNzAwIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgIC8+Cjwvc3ZnPg==";

type TContentfulImageFormat = "jpg" | "png" | "webp" | "gif" | "orig";
type TContentfulImageFit = "pad" | "fill" | "scale" | "crop" | "thumb";

export interface IContentfulImageProps
  extends Omit<ImageProps, "src" | "placeholder"> {
  format?: TContentfulImageFormat;
  fit?: TContentfulImageFit;
  placeholder?: ImageProps["placeholder"];
  blurDataURL?: ImageProps["blurDataURL"];
  fallbackFormat?: TContentfulImageFormat;
  src?: ImageProps["src"];
  keepWidthAndHeight?: boolean;
}

interface IContentfulImageLoaderProps extends Omit<ImageLoaderProps, "width"> {
  height?: string | number;
  width?: string | number;
  format?: TContentfulImageFormat;
  fit?: TContentfulImageFit;
  aspectRatio?: number;
}

const contentfulImageLoader = ({
  src,
  width,
  height,
  fit,
  quality = 75,
  format = "webp",
}: IContentfulImageLoaderProps) => {
  const shouldFill = src.split(".").pop()?.toLowerCase().trim() === "svg";
  const shouldAppendQuery = src.includes("?");

  let url = `${src}${shouldAppendQuery ? "&" : "?"}q=${quality}`;

  if (width) url += `&w=${width}`;
  if (height) url += `&h=${height}`;
  if (format !== "orig") url += `&fm=${format}`;
  if (shouldFill) url += "&fit=fill";
  else if (fit) url += `&fit=${fit}`;
  return url;
};

const ContentfulImage = ({
  fit,
  format = "webp",
  fallbackFormat = "jpg",
  placeholder = "blur",
  blurDataURL = SHIMMER_IMAGE_DATA,
  keepWidthAndHeight = false,
  ...rest
}: IContentfulImageProps) => {
  const [hasFormatError, setHasFormatError] = useState<boolean>(false);
  const src = rest.src ? rest.src : "/img/placeholder.png";
  const alt = src === "/img/placeholder.png" ? "placeholder" : rest.alt;

  const imageProps = {
    ...rest,
    placeholder,
    blurDataURL,
    src: typeof src === "string" && src.startsWith("//") ? `http:${src}` : src,
    alt,
    loader: (props: IContentfulImageLoaderProps) =>
      contentfulImageLoader({
        ...props,
        fit,
        format: hasFormatError ? fallbackFormat : format,
        // not sure if we have usecases where width and height
        // is needed in the loader. Use layout intrinsic for px ctrl
        ...(keepWidthAndHeight && { width: rest.width, height: rest.height }),
      }),
    onError: () => setHasFormatError(true),
  };
  return <Image {...imageProps} alt={imageProps.alt} />;
};

export default ContentfulImage;
