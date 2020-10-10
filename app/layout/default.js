import React from 'react';
import PropTypes from 'prop-types';

import {
    Layout,
    ThemeProvider,
} from 'airframe-react-lib';

import config from './../../config';

import './../styles/bootstrap.scss';
import './../styles/main.scss';
import './../styles/plugins.scss';

import {
    RoutedNavbars,
    RoutedSidebars,
} from './../routes';

const favIcons = [
    { rel: 'icon', type: 'image/x-icon', href: require('./../images/favicons/favicon.ico') },

    { rel: 'apple-touch-icon', sizes: '180x180', href: require('./../images/favicons/apple-touch-icon.png') },

    { rel: 'icon', type: 'image/png', sizes: '32x32', href: require('./../images/favicons/favicon-32x32.png') },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: require('./../images/favicons/favicon-16x16.png') }
];

class AppLayout extends React.Component {
    static propTypes = {
        children: PropTypes.node.isRequired
    }

    render() {
        const { children } = this.props;

        return (
            <ThemeProvider initialStyle="dark" initialColor="primary">
                <Layout sidebarSlim favIcons={ favIcons }
                siteDescription = {config.siteDescription}
                siteKeywords = {config.siteKeywords}
                siteTitle = {config.siteTitle}
                siteCannonicalUrl = {config.siteCannonicalUrl}
                >
                    { /* --------- Navbar ----------- */ }
                    <Layout.Navbar>
                        <RoutedNavbars />
                    </Layout.Navbar>
                    { /* -------- Sidebar ------------*/ }
                    <Layout.Sidebar>
                        <RoutedSidebars />
                    </Layout.Sidebar>

                    { /* -------- Content ------------*/ }
                    <Layout.Content>
                        { children }
                    </Layout.Content>
                </Layout>
            </ThemeProvider>
        );
    }
}

export default AppLayout;
