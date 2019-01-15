import { connect } from 'react-redux';
import { IStoreState } from 'store/reducers';
import Navigation, { IProps } from './Navigation';

const mapStateToProps = (state: IStoreState): Partial<IProps> => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(Navigation);
