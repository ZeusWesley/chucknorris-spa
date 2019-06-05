import React from 'react'
import {connect} from "react-redux"
import Navbar from '../partial/Navbar.jsx'
import {bindActionCreators} from 'redux'
import {loadCategories, fetchCategories} from "../../actions/Categories";
import "./List.scss"

class List extends React.Component {

    render() {
        return (
            <div className="List">
                <Navbar/>

                <div className="Content p-m">
                    <table>
                        <tbody>
                        {this.props}
                        {this.props.categories.map((category, i) => (
                            <tr>
                                <td className="category">{category.title}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

// const mapStateToProps = state => (
//     {categories: state.categories}
// );

function mapStateToProps(state) {
    const {selectedSubreddit, postsBySubreddit} = state;
    const {isFetching, lastUpdated, items: posts} = postsBySubreddit[selectedSubreddit] || { isFetching: true, items: []};

    return {
        selectedSubreddit,
        posts,
        isFetching,
        lastUpdated
    }
}

// const mapDispatchToProps = dispatch => bindActionCreators({fetchCategories}, dispatch);

export default connect(mapStateToProps)(List)
