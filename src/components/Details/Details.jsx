import React from 'react';
import Navbar from "../partial/Navbar";
import {connect} from "react-redux";

import {getDetail} from "../../actions/Categories";

class Details extends React.Component {

    componentDidMount() {
        this.getJoke(this.props);
    }

    render() {
        return (
            <div className="Details">
                <Navbar/>
                {
                    this.props.detail.value ?
                    <div className="Content p-m">
                        <img src={this.props.detail.icon_url}  />
                        <h1>{this.props.match.params.category}</h1>
                        <p>{this.props.detail.value}</p>
                        <button onClick={() => {this.getJoke(this.props)}} className="btn bg-primary">next joke</button>
                    </div>
                    : null
                }
            </div>
        )
    }

    getJoke(props) {
        let category = props.match.params.category;
        props.dispatch(getDetail(category));
    }

}

const mapStateToProps = state => (
    {
        detail: state.categories.detail
    }
);

export default connect(mapStateToProps)(Details)



