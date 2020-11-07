import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
interface Props {
  isPlaying: boolean;
  trackName: string;
  previewUrl: string;
  resumeMusic: () => void;
  stopMusic: () => void;
}

const Track = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.trackName}>{props.trackName}</Text>
      <TouchableOpacity
        onPress={props.isPlaying ? props.stopMusic : props.resumeMusic}>
        <Text style={styles.trackName}>
          {props.isPlaying ? 'Stop' : 'Play'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 50,
    borderTopColor: '#ddd',
    borderWidth: 1,
    paddingHorizontal: 15,
    backgroundColor: '#ddd',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  trackName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
});
export default Track;
