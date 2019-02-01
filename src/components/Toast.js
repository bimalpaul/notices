import React, {Component} from 'react'
import '../styles/Toast.css';

export default class Toast extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentValue: '',
            loadingToastVisible: false,
            successToastVisible: false,
            failureToastVisible: false,
            mode: ''
        };
        this.onLoadingDismiss = this.onLoadingDismiss.bind(this);
        this.onSuccessDismiss = this.onSuccessDismiss.bind(this);
        this.onFailureDismiss = this.onFailureDismiss.bind(this);
    }

    render() {
        return (
            <div className="TextTransformer-container">
                {this.renderLoadingToast(this.state.loadingToastVisible)}
                {this.renderSuccessToast(this.state.successToastVisible, this.state.mode)}
                {this.renderFailureToast(this.state.failureToastVisible, this.state.mode)}
            </div>

        )
    }

    componentDidUpdate = (prevProps) => {
        if (prevProps !== this.props) {
            this.setState({
                loadingToastVisible: this.props.isTransformLoading,
                successToastVisible: this.props.successTransformingValue,
                failureToastVisible: this.props.failureTransformingValue,
                mode: this.props.mode
            });
        }
    }


    renderLoadingToast = (isLoading) => {
        return isLoading ? (
            <div className="row w-25 p-3 transformToast loadingToast rounded">
                <div className="col-11 text-left">Loading</div>
                <div className="col-1">
                    <button className="rounded bg-transparent border-0" onClick={this.onLoadingDismiss}>x</button>
                </div>
            </div>
        ) : null;
    }

    renderSuccessToast = (successTransformingValue, mode) => {
        return successTransformingValue && mode ? (
            <div className="row w-25 p-3 transformToast successToast rounded">
                <div className="col-11 text-left">Success Loading {this.styleMode(mode)}</div>
                <div className="col-1">
                    <button className="rounded bg-transparent border-0" onClick={this.onSuccessDismiss}>x</button>
                </div>
            </div>
        ) : null;
    }

    renderFailureToast = (failureTransformingValue, mode) => {
        return failureTransformingValue && mode ? (
            <div className="row w-25 p-3 transformToast failureToast rounded">
                <div className="col-11 text-left">Error Loading {this.styleMode(mode)}</div>
                <div className="col-1">
                    <button className="rounded bg-transparent border-0" onClick={this.onFailureDismiss}>x</button>
                </div>
            </div>
        ) : null;
    }

    styleMode = (mode) => {
        if (mode === 'lowercase') return mode;
        return mode.toUpperCase();
    }

    onLoadingDismiss = () => dispatch => {
        this.setState({loadingToastVisible: false});
    }

    onSuccessDismiss = () => {
        this.setState({successToastVisible: false});
    }

    onFailureDismiss = () => {
        this.setState({failureToastVisible: false});
    }
}
