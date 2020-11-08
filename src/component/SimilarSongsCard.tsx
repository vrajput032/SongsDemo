import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import { vw, fullWidth } from '../service/dimension';
import Image from './Image';
import { parser } from '../service/parser';
interface Props {
  rowData: { item: any; index: number };
  handleNavigation: (album: any) => void;
}

const SimilarSongsCard = React.memo(function Card(props: Props) {
  const {rowData} = props
  const {item} =  rowData 
  const {trackName= ''} = item
  return (
    <TouchableOpacity
      onPress={() => props.handleNavigation(props.rowData.item)}
      style={styles.container}>
      <View style={styles.imageStyle}>
        <Image
          source={{
            uri: parser(props.rowData.item.artworkUrl100, 'source/100x100'),
          }}
        />
      </View>
      <Text
        numberOfLines={1}
        style={
          styles.title
        }>{`${trackName.toUpperCase()}`}</Text>
    </TouchableOpacity>
  );
});

export default SimilarSongsCard;

const styles = StyleSheet.create({
  container: {
    width: fullWidth,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 5,
    borderTopWidth: 0.5,
    borderTopColor: '#ddd',
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  imageStyle: {
    backgroundColor: 'red',
    borderRadius: 5,
    height: vw(60),
    width: vw(60),
  },
  title: {
    marginLeft: 10,
    fontSize: vw(16),
    width: vw(250),
    fontWeight: 'bold',
  },
});
