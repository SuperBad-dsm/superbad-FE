import { TwsPng } from "@/assets/icons";
import { font, theme } from "@/utils/function/color/constant";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

interface ProductProps {
  img: string;
  price: number;
  content: string;
}

export default function Product({ img, price, content }: ProductProps) {
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        source={{ uri: img }}
        width={115}
        height={135}
        borderRadius={8}
        alt="이미지없음"
      />
      <Text style={[font.body["14-semibold"], { color: theme.color.white }]}>
        {price}원
      </Text>
      <Text style={[font.body["14-medium"], { color: theme.color.GRAY[400] }]}>
        {content}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 115,
  },
});