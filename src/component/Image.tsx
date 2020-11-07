import React from 'react';
import { ImageStyle, StyleSheet } from 'react-native';
import FitImage from 'react-native-fit-image';

interface Props {
  source: any;
  style?: ImageStyle;
  indicator?: any;
  originalWidth?: any;
  originalHeight?: any;
  indicatorColor?: any;
  indicatorSize?: any;
}
const Image = (props: Props) => {
  const {
    source,
    originalWidth,
    originalHeight,
    indicator,
    indicatorColor,
    indicatorSize,
  } = props;

  const selfProps = {
    originalWidth,
    originalHeight,
    indicator,
    indicatorColor,
    indicatorSize,
  };

  return (
    <FitImage
      resizeMode="cover"
      source={source}
      {...selfProps}
      style={styles.fitImage}
    />
  );
};
var styles = StyleSheet.create({
  fitImage: {
    borderRadius: 20,
  },
  fitImageWithSize: {
    height: 100,
    width: 30,
    borderRadius :10
  },
});

export default Image;
