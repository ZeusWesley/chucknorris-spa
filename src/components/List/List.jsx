import React from 'react'
import {connect} from "react-redux"
import {Link} from 'react-router-dom'
import Navbar from '../partial/Navbar.jsx'
import {fetchCategories} from "../../actions/Categories";
import "./List.scss"

class List extends React.Component {

    componentWillMount() {
        this.props.dispatch(fetchCategories());
    }

    render() {
            return (
                <div className="List">
                    <Navbar/>
                    <div className="Content p-m">
                        <table>
                            <tbody>
                            {this.props.categories.list ? this.props.categories.list.map((category, i) => (
                                <tr key={i}>
                                    <td  className="category"><Link to={'/detail/' + category}>{category}</Link></td>
                                </tr>
                            )) : null}
                            </tbody>
                        </table>
                    </div>
                </div>
            )
        }
}

const mapStateToProps = state => (
    {categories: state.categories}
);

export default connect(mapStateToProps)(List)
