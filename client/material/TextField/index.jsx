import React from 'react';

class TextField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            focused: false,
            empty: true
        };
    }

    onFocus = () => {
        console.log('focus');
        this.setState({
            focused: true
        })
    }

    onBlur = () => {
        this.setState({
            focused: false,
            empty: this.refs.input.value === ''
        })
    }

    onChange = () => {
        let state = [];
        state[this.props.name] = this.refs.input.value;
        this.props.parent.setState(state);
    }

    render() {
        const inputClassData = ['form-group', 'label-floating']
        if (this.state.focused) {
            inputClassData.push('is-focused');
        }
        if (this.state.empty) {
            inputClassData.push('is-empty');
        }

        if (this.props.hasError) {
            inputClassData.push('has-error');
        }

        return (
            <div  className={inputClassData.join(' ')}>
                <label className="control-label">{this.props.label}</label>
                <input ref="input"
                    onBlur={(e) => { this.onBlur(e) }}
                    onFocus={(e) => { this.onFocus(e) }}
                    onChange={(e) => { this.onChange(e) }}
                    type={this.props.type}
                    className="form-control"
                />
                    <span className="material-input" />
                <span className="help-block">{this.props.hint}</span>
            </div>
        );
    }
}

TextField.defaultProps = {
    type: 'text',
    label: '',
    hint: ''
};

export default TextField;