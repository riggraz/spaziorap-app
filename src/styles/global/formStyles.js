import {StyleSheet} from 'react-native';

const formStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eeeeee',
  },

  center: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  label: {
    fontSize: 20,

    marginTop: 8,
    marginLeft: 16,
    marginRight: 16,

    textAlign: 'center',
  },

  input: {
    width: '90%',

    backgroundColor: 'white',
    borderRadius: 16,

    marginLeft: 16,
    marginRight: 16,
    marginBottom: 8,
    padding: 8,

    fontSize: 18,

    textAlign: 'center',
  },

  button: {
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 16,

    backgroundColor: '#95190C',

    borderRadius: 16,
  },

  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,

    padding: 8,
  },

  touchableText: {
    color: 'black',
    fontSize: 15,
    textAlign: 'center',
    textDecorationLine: 'underline',

    marginTop: 8,
    marginBottom: 8,
  },

  redLabel: {
    color: 'red',

    fontSize: 20,

    marginTop: 8,
    marginLeft: 16,
    marginRight: 16,

    textAlign: 'center',
  },

  pickerWrapper: {
    width: '90%',

    backgroundColor: 'white',
    borderRadius: 16,

    marginLeft: 16,
    marginRight: 16,
    marginBottom: 8,
  },

  picker: {
    width: '90%',
    padding: 8,
    
    alignSelf: 'center',
  },

  marginBottomButton: {
    marginBottom: 128,
  },
});

export default formStyles;