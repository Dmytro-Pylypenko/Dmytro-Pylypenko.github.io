import React from 'react';
import Profile from './Profile';
import * as Axios from "axios";
import { connect } from 'react-redux';
import { setUserProfile } from '../../Redux/profile-reduser';
import { withRouter } from 'react-router-dom';


class ProfileContainer extends React.Component {

    componentDidMount() {
        debugger;

        Axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {

                this.props.setUserProfile(response.data)

            });
    }



    render() {

        return (
            <div>
                <Profile {... this.props} profile={this.props.profile} />
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

let WithUrlDataComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUserProfile })(WithUrlDataComponent);