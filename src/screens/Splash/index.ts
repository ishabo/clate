import Splash from './Splash';

import { connect } from 'react-redux';
import { onAppStart } from 'services/starter/actions/index';

const mapDispatchToState = { onAppStart };

export default connect(
  null,
  mapDispatchToState,
)(Splash);
