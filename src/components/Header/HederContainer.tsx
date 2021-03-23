import React from "react";
import Header from "./Heder";
import axios from "axios";
import {InitialStateType, setAuthUserData} from "../../redux/auth-reducer";
import {connect} from "react-redux";


class HeaderContainer extends React.Component<any> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data;
                    this.props.setAuthUserData(id, email, login);
                }
            });
    }

    render() {
        return <Header {...this.props.state} />
    }
}

const mapStateToProps = (state: InitialStateType) => ({
    isAuth: state.isAuth,
    login: state.login
})
export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);