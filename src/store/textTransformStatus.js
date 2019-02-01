const TRANSFORM_VALUE_LOAD = 'TRANSFORM_VALUE_LOAD';
const TRANSFORM_VALUE_SUCCESS = 'TRANSFORM_VALUE_SUCCESS';
const TRANSFORM_VALUE_ERROR = 'TRANSFORM_VALUE_ERROR';

const initialTextTransformStatusState = {
    isLoading: false,
    successTransformingValue: false,
    failureTransformingValue: false,
    mode: ''
};

export default function textTransformStatus(state = initialTextTransformStatusState, {type, mode}) {
    switch (type) {
        case TRANSFORM_VALUE_LOAD:
            return {
                isLoading: true,
                successTransformingValue: false,
                failureTransformingValue: false,
                mode: mode
            };
        case TRANSFORM_VALUE_SUCCESS:
            return {
                isLoading: false,
                successTransformingValue: true,
                failureTransformingValue: false,
                mode: mode
            };
        case TRANSFORM_VALUE_ERROR:
            return {
                isLoading: false,
                failureTransformingValue: true,
                successTransformingValue: false,
                mode: mode
            };
        default:
            return state;
    }
}
