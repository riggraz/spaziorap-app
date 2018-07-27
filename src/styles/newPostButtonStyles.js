import {StyleSheet} from 'react-native';

const newPostButtonStyles = StyleSheet.create({
  container: {
    width: '90%',

    backgroundColor: '#fefefe',
    borderColor: '#cbcbcb',
    borderWidth: 1,
    borderRadius: 70,
    

    alignSelf: 'center',
    marginTop: 12,
    marginBottom: 12,
    padding: 24,
  },
  
  title: {
    fontSize: 24,
    color: '#95190C',
    fontWeight: 'bold',
    textAlign: 'center',

    marginTop: 0,
  },

  emoji: {
    fontSize: 48,
    textAlign: 'center',

    marginBottom: 0,
  },
});

export default newPostButtonStyles;