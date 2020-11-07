/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import SongsCard from '../component/SongsCard';
import { GenericNavigationProps } from '../navigator/types';
import { connect } from 'react-redux';
import { getAlbumList } from '../redux/action';
import { Dispatch, AnyAction, bindActionCreators } from 'redux';
import { vh } from '../service/dimension';

interface Props extends GenericNavigationProps {
  songsList: Array<any>;
  getAlbumList: () => void;
}

const SongsList = (props: Props) => {
  
  useEffect(() => {
    getAlbum();
  }, []);
  const getAlbum = async () => {
    props.getAlbumList();
  };
  function pushToDetails(album: any): void {
    props.navigation.navigate('SongsDetail', { album });
  }
  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={{paddingTop:vh(60)}}
        data={props.songsList}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={(rowData: any) => (
          <SongsCard rowData={rowData} pushToDetails={pushToDetails} />
        )}
        keyExtractor={(item) => item.trackId}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'black',
    // marginTop: 20,
    alignItems: 'center',
  },
});
const mapStateToProps = (state: any) => ({
  songsList: state.albumReducer.songsList,
});
const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) =>
  bindActionCreators({ getAlbumList }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SongsList);
