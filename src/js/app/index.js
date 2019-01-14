import React, { Component } from 'react';
import { withCookies, Cookies } from 'react-cookie';

class App extends React.Component {

    render()
    {
        return <div>Hello world</div>
    }
}

export default withCookies(App);
