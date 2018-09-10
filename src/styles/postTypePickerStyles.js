import {StyleSheet} from 'react-native';
import { MAIN_COLOR } from '../constants/colors';

const postTypePickerStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },

  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 16,
  },

  selectable: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 8,
    marginHorizontal: 4,
    borderRadius: 16,
  },

  selected: {
    color: MAIN_COLOR,
    backgroundColor: 'white',
  },

  notSelected: {
    color: 'white',
    backgroundColor: MAIN_COLOR,
  },
});

export default postTypePickerStyles;