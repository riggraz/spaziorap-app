import {StyleSheet} from 'react-native';

import {PLAYER_WIDTH, PLAYER_HEIGHT} from '../constants/player';
import {MAIN_COLOR} from '../constants/colors';

const playerStyles = StyleSheet.create({
  player: {
    backgroundColor: 'black',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },

  topBar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    backgroundColor: MAIN_COLOR,

    // borderWidth: 2,
    // borderColor: 'black',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,

    padding: 0,
  },

  topBarButton: {
    marginHorizontal: 12,
  },

  topBarText: {
    color: 'white',
    fontSize: 15,
  },

  embeddedYTPlayer: {
    width: PLAYER_WIDTH,
    height: PLAYER_HEIGHT,
    backgroundColor: 'black',
  },

  loading: {
    position: 'absolute',
    //35 is the loadingPlayer.gif width/2
    left: PLAYER_WIDTH / 2 - 35,
    top: PLAYER_HEIGHT / 2 - 35,
  },
});

export default playerStyles;