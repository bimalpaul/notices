import {connect} from 'react-redux';
import Toast from '../components/Toast';

const mapStateToProps = (state, props) => ({
    isTransformLoading: state.textTransformStatus.isLoading,
    successTransformingValue: state.textTransformStatus.successTransformingValue,
    failureTransformingValue: state.textTransformStatus.failureTransformingValue,
    mode: state.textTransformStatus.mode
});

export default connect(mapStateToProps)(Toast);
