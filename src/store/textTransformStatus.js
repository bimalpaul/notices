const TRANSFORM_VALUE_LOAD = 'TRANSFORM_VALUE_LOAD';
const TRANSFORM_VALUE_SUCCESS = 'TRANSFORM_VALUE_SUCCESS';
const TRANSFORM_VALUE_ERROR = 'TRANSFORM_VALUE_ERROR';

const initialTextTransformStatusState = {
    isLoading: false,
    successTransformingValue: false,
    failureTransformingValue: false,
};

export default function textTransformStatus(state = initialTextTransformStatusState, {type}) {
    switch (type) {
        case TRANSFORM_VALUE_LOAD:
            return {
                isLoading: true,
                successTransformingValue: false,
                failureTransformingValue: false
            };
        case TRANSFORM_VALUE_SUCCESS:
            return {
                isLoading: false,
                successTransformingValue: true,
                failureTransformingValue: false
            };
        case TRANSFORM_VALUE_ERROR:
            return {
                isLoading: false,
                failureTransformingValue: true,
                successTransformingValue: false
            };
        default:
            return state;
    }
}
