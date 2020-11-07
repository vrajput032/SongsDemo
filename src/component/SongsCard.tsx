import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { vw, fullWidth, vh } from '../service/dimension';
import Image from './Image';
import { parser } from '../service/parser';

interface Props {
  rowData: { item: any; index: number };
  pushToDetails: (item: any) => void;
}

const SongsCard = React.memo(function Card(props: Props) {
  let name = props.rowData.item?.trackName?.toUpperCase()
  return (
    <TouchableOpacity
      onPress={() => props.pushToDetails(props.rowData.item)}
      style={styles.container}>
      <Image
        source={{
          uri: parser(props.rowData.item.artworkUrl100, 'source/300x300'),
        }}
        style={styles.imageStyle}
        data-test="Album-card-component"
      />
      <Text
        style={styles.title}
        numberOfLines={1}>
        {`${name}`}</Text>
    </TouchableOpacity>
  );
});

export default SongsCard;

const styles = StyleSheet.create({
  container: {
    width: fullWidth / 2 - 30,
    marginHorizontal: 5,
    marginVertical: 15,
    borderRadius: 5
  },
  imageStyle: {
    borderRadius: 15,
    height: vw(150),
    width: vw(150),
  },
  title: {
    marginTop: 15,
    color:'white',
    fontSize: vw(16),
    alignSelf:'center',
    fontWeight: 'bold',
  },
});
