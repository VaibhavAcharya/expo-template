import { Image as ExpoImage } from "expo-image";
import React from "react";
import { StyleProp, ImageStyle } from "react-native";
import { cn } from "@/utils/styling";

export type ImageProps = {
  className?: string;
  style?: StyleProp<ImageStyle>;
} & Omit<React.ComponentProps<typeof ExpoImage>, "style">;

export function Image({ className, style, ...props }: ImageProps) {
  return (
    <ExpoImage
      className={cn(className)}
      style={style}
      contentFit={props.contentFit ?? "cover"}
      transition={props.transition ?? 200}
      {...props}
    />
  );
}