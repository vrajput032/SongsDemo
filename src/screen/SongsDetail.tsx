import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Image from '../component/Image';
import { vh, vw } from '../service/dimension';
import { GenericNavigationProps } from '../navigator/types';
import Track from '../component/Track';
import Similar from '../component/SimilarSongsCard';
import { parser } from '../service/parser';
import TrackPlayer from 'react-native-track-player';
import { connect } from 'react-redux';
import { Dispatch, AnyAction, bindActionCreators } from 'redux';

interface Props extends GenericNavigationProps {
  songsList: Array<any>;
}

const AlbumDetail = (props: any) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackInfo, setTrackInfo] = useState<any>({});
  const [isPlayerInitialize, setPlayerInitialize] = useState(false);
  const {route } = props;
  const {params} = route;
  const {album} = params;


  useEffect(() => {
    setTrackInfo(album);
    console.log('vinay',props)
    console.log({ album });
    return () => {
      TrackPlayer.stop();
      TrackPlayer.destroy();
    };
  }, [album.previewUrl]);

  function playMusic() {
    if (trackInfo.previewUrl) {
      TrackPlayer.setupPlayer().then(async () => {
        // Adds a track to the queue
        await TrackPlayer.add({
          id: trackInfo.trackId,
          url: trackInfo.previewUrl,
          title: trackInfo.trackName,
          artist: trackInfo.artistName,
          //artwork: require('track.png'),
        });

        // Starts playing it
        TrackPlayer.play();
        setIsPlaying(true);
        setPlayerInitialize(true);
      });
    }
  }
  function stopMusic() {
    setIsPlaying(false);
    TrackPlayer.pause();
  }
  function resumeMusic() {
    setIsPlaying(true);
    TrackPlayer.play();
  }
  async function changeTrack(item: any) {
    debugger
    await setTrackInfo(item);
    await TrackPlayer.add({
      id: item.trackId,
      url: item.previewUrl,
      title: item.trackName,
      artist: item.artistName,
    });

    setTimeout(() => {
      playMusic();
    }, 2000);
  }
  return (
    <View style={styles.container}>
      <View style={styles.bannerContainer}>
        <View style={styles.imageStyle}>
          <Image
            source={{
              uri:
                parser(trackInfo.artworkUrl100, 'source/300x300') ||
                parser(album.artworkUrl100, 'source/300x300'),
            }}
          />
        </View>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.heading}>{trackInfo.trackName}</Text>
        <TouchableOpacity style={styles.play} onPress={playMusic}>
          <Text style={styles.playText}>Play</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={props.songsList}
        renderItem={(rowData: any) => (
          <Similar rowData={rowData} handleNavigation={changeTrack} />
        )}
        keyExtractor={(item) => item.trackId}
      />
      {isPlayerInitialize && (
        <Track
          trackName={trackInfo.trackName}
          previewUrl={trackInfo.previewUrl}
          resumeMusic={resumeMusic}
          stopMusic={stopMusic}
          isPlaying={isPlaying}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bannerContainer: {
    height: vh(250),
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    width: 200,
  },
  detailContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: vh(15),
    paddingHorizontal: vw(20),
  },
  heading: {
    fontSize: 29,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  play: {
    marginTop: 20,
    padding: 10,
    borderRadius: 5,
    paddingHorizontal: 30,
    backgroundColor: 'black',
  },
  playText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#fff',
  },
});

const mapStateToProps = (state: any) => ({
  songsList: state.albumReducer.songsList,
});
const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) =>
  bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AlbumDetail);
