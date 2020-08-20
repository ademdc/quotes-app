import React, { useEffect } from 'react';
import {
  View,
  Image,
  StyleSheet,
  FlatList,
  Text,
  ScrollView
} from 'react-native';

import { useDispatch } from 'react-redux';
import { FEELINGS } from '../data/data';

import GridTile from '../components/GridTile';

const FeelingScreen = props => {
  const dispatch = useDispatch();
  // const quote = props.navigation.getParam('quote')

  useEffect(() => {
    
  }, [dispatch]);

  return (
    <View style={styles.screen}>
			<FlatList 
				data={FEELINGS} 
				numColumns={2}
				renderItem={(itemData) => <GridTile navigation={props.navigation} itemData={itemData} />}
			/>
		</View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  quoteTextContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  },
  quoteImageContainer: {
    width: '100%',
    height: 200
  },
  quoteImage: {
    width: '100%',
    height: '100%'
  },
  quoteAuthor: {

  },
  quoteText: {
    textAlign: 'center',
    fontFamily: 'ibm-plex-thin',
    fontSize: 30,
    paddingVertical: 20,
    paddingHorizontal: 10
  },
  masnicaLogoContainer: {
    height: 100,
    width:  100
  }
});

export default FeelingScreen;
