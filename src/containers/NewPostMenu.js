import {connect} from 'react-redux';

import NewPostMenuP from '../components/NewPostMenuScreen/NewPostMenuP';

const mapStateToProps = state =>
  ({
    isLoggedIn: state.user.isLoggedIn,
  });

const NewPostMenu = connect(
  mapStateToProps,
  null
)(NewPostMenuP);

export default NewPostMenu;