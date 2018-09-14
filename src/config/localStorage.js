import {AsyncStorage} from 'react-native';

/*
  Save key-value pair in AsyncStorage.
  On success returns value written, on error returns false.
*/
export const saveValueByKey = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
    return value;
  } catch (error) {
    return false;
  }
}

/*
  Load value associated with key from AsyncStorage.
  On success returns value loaded, on error returns undefined.
*/
export const loadValueByKey = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value;
  } catch (error) {
    return undefined;
  }
}

/*
  Delete value of key from AsyncStorage.
  On success returns true, on error returns false.
*/
export const deleteValueByKey = key => {
  try {
    AsyncStorage.removeItem(key);
    return true;
  } catch (error) {
    return false;
  }
}