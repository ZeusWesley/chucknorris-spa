import React from 'react';
import {connect} from "react-redux";
import Navbar from '../partial/Navbar.jsx';
import  "./list.css";

class List extends React.Component {

    render() {
        return (
            <div className="List">
                <Navbar/>

                <div className="Content p-m">
                    <table>
                        <tr>
                            <td className="category">
                                {/*{ this.props.test }*/}
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        )
    }
}

// function mapStateToProp(state) {
//     return {
//         test: state.test.value
//     }
// }

export default List
