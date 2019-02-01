import {connect} from 'react-redux';
import Toast from '../components/Toast';

const mapStateToProps = state => ({
    isTransformLoading: state.textTransformStatus.isLoading,
    successTransformingValue: state.textTransformStatus.successTransformingValue,
    failureTransformingValue: state.textTransformStatus.failureTransformingValue
});

export default connect(mapStateToProps)(Toast);
