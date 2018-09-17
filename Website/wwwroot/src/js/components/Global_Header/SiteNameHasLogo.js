﻿import React from 'react';
import ReactDom from 'react-dom';

class SiteNameHasLogo extends React.Component {
    render() {
        return (
            <a className="navbar-brand" href="/">
                <img src={this.props.globalHeader.siteLogo.url} title={this.props.globalHeader.siteName} />
                {this.props.globalHeader.siteName}
            </a>
        );
    }
}

export default SiteNameHasLogo;