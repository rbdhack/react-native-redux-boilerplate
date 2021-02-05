import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Test from './component';
import { togglePressed } from '../modules/app';

const mapStateToProps = ({ app }) => ({
  isPressed: app.isPressed,
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    togglePressed,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps, null, {})(Test);
