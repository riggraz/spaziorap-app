import {connect} from 'react-redux';

import NewButtonP from '../components/NewButtonP';

const mapStateToProps = state =>
  ({
    isUserLoggedIn: state.user.isLoggedIn,
  });

const NewButton = connect(
  mapStateToProps,
  null,
)(NewButtonP);

export default NewButton;