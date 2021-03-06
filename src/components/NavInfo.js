/**
 * Created by kevin on 16-4-5.
 */
import React from 'react';


import IconButton from 'material-ui/lib/icon-button';

import PersonIcon from 'material-ui/lib/svg-icons/social/person';

import TranslateIcon from 'material-ui/lib/svg-icons/action/translate';

import Search from './Search';
import Notifications from './Notifications';
import UserAvatar from './UserAvatar';


export default class NavInfo extends React.Component {
    state = {
        isLogin: false
    };
    componentDidMount = ()=> {
        window.autoHideNavBar();
    };
    static propTypes={
        openLoginDialog:React.PropTypes.func.isRequired
    }
    render() {
        const {openLoginDialog} = this.props;
        return (
            <div className="u-navinfo">
                <div className="container">
                    <h1>Zhejiang Normal University JudgeOnline</h1>
                    <ul className="list-float u-tools">
                        <li><Search /></li>
                        <li>
                            <div className="item">
                                <IconButton>
                                    <TranslateIcon />
                                </IconButton>
                            </div>
                        </li>

                        <li style={{display:this.state.isLogin?'block':'none'}}>
                            <Notifications/>
                        </li>
                        <li style={{display:this.state.isLogin?'block':'none'}}>
                            <UserAvatar />
                        </li>
                        <li style={{display:!this.state.isLogin?'block':'none'}}>
                            <IconButton className="item"
                                        onTouchTap={openLoginDialog}><PersonIcon/></IconButton>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }

}