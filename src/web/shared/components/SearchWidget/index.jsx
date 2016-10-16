import React, {Component} from 'react';


const keyCodes = {
  ENTER: 13,
  ESCAPE: 27,
  UP: 38,
  DOWN: 40
};

export class SearchWidget extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: "",
            title: "",
            placeholder: "SEARCH"
        };
    }

    onChange(e) {
        const input = e.target.value;
        if(input === this.state.value) return;

        this.setState({value: input});
    }

    onKeyDown(e){
        const key = e.which || e.keyCode;
        switch (key) {
            case keyCodes.ENTER:
                this.onClick();
                break;
        }
    }

    onClick() {
        if (!this.state.value) return;

        if (this.props.onSearch) {
            this.props.onSearch(this.state.value);
        }
    }

    render() {
        return (
            <div className="">
                <div className="w3-row">
                    <div className="w3-col s7">
                            <input type="text"
                                className="w3-input w3-border w3-round"
                                title={this.state.title}
                                placeholder={this.state.placeholder}
                                value={this.state.value} 
                                onKeyDown={this.onKeyDown.bind(this)}
                                onChange={this.onChange.bind(this)}
                            />
                    </div>
                    <div className="w3-rest">
                            <input type="button" className="w3-btn w3-round w3-large w3-teal" value="GO" onClick={this.onClick.bind(this)} />
                    </div>
                </div>
            </div>
        );
    }
}