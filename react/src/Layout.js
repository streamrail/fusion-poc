import React, { Component } from 'react';
import {
    Switch,
    Route,
  } from "react-router-dom";
import { withRouter } from "react-router";  
import { FusionLayout } from "@ironsrc/fusion-ui/native/react"
import PerformanceReport from './PerformanceReport';
import CustomReports from './CustomReports';
import Advertisers from './Advertisers';
import Campaigns from './Campaigns';
import Deals from './Deals';
import BundleIDs from './BundleIDs';

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            layout: {
                userName: "Fusion User",
                scrollTopOnRouteChange: true,
                state: {
                    title: ""
                },
                menuItems,
                headerPrimaryMenuItems,
                headerSecondaryMenuItems
            }
        }
    }

    menuItemClick(e) {
        if (!e.redirect) {
            return;
        }
        e.openNewTab ?
            window.open(e.redirect, "_blank") :
            this.props.history.push(e.redirect);
    }

    updateLayoutTitle(title) {
        this.setState({layout: {...this.state.layout, state:{title} }})
    }

    render() {
        return (
            <FusionLayout config={this.state.layout} menuItemClick={this.menuItemClick.bind(this)}>
                <div>
                    <Switch>
                        <Route path="/report">
                            <PerformanceReport updateLayoutTitle={this.updateLayoutTitle.bind(this)} />
                        </Route>
                        <Route path="/custom-reports">
                            <CustomReports updateLayoutTitle={this.updateLayoutTitle.bind(this)}/>
                        </Route>
                        <Route path="/advertisers">
                            <Advertisers updateLayoutTitle={this.updateLayoutTitle.bind(this)}/>
                        </Route>
                        <Route path="/campaigns">
                            <Campaigns updateLayoutTitle={this.updateLayoutTitle.bind(this)}/>
                        </Route>
                        <Route path="/deals">
                            <Deals updateLayoutTitle={this.updateLayoutTitle.bind(this)}/>
                        </Route>
                        <Route path="/app-lists">
                            <BundleIDs updateLayoutTitle={this.updateLayoutTitle.bind(this)}/>
                        </Route>
                    </Switch>
                </div>
            </FusionLayout>
        );
    }
}

const headerPrimaryMenuItems = [
    {
        name: "IronSource",
        cssClass: "is-user-menu-item",
        redirect: "https://www.ironsrc.com/",
        openNewTab: true
    }
];

const headerSecondaryMenuItems = [
    {
        name: "Knowledge Center",
        cssClass: "is-user-menu-item",
        redirect: "https://www.ironsrc.com/",
        openNewTab: true
    },
    {
        name: "Download SDK",
        cssClass: "is-user-menu-item",
        redirect: "https://www.ironsrc.com/",
        openNewTab: true
    },
    {
        name: "Contact Us",
        cssClass: "is-user-menu-item",
        redirect: "https://www.ironsrc.com/",
        openNewTab: true
    }
];

const menuItems = [
    {
        name: "Reports",
        icon: "bar-chart",
        children: [
            {
                name: "Performance",
                redirect: "/report",
                cssClass: "is-user-menu-last-child-item"
            },
            {
                name: "Custom Reports",
                redirect: "/custom-reports",
                cssClass: "is-user-menu-last-child-item"
            }
        ]
    },
    {
        icon: "spaceship",
        name: "Demand",
        children: [
            {
                name: "Advertisers",
                redirect: "/advertisers",
                cssClass: "is-user-menu-last-child-item"
            },
            {
                name: "Campaigns",
                redirect: "/campaigns",
                cssClass: "is-user-menu-last-child-item"
            },
            {
                name: "Deals",
                redirect: "/deals",
                cssClass: "is-user-menu-last-child-item"
            }
        ]
    },
    {
        icon: "apps",
        name: "Manage",
        children: [
            {
                name: "Bundle IDs",
                redirect: "/app-lists",
                cssClass: "is-user-menu-last-child-item"
            },
            {
                name: "Device IDs",
                redirect: "/device-id-lists",
                cssClass: "is-user-menu-last-child-item"
            },
            {
                name: "IPs",
                redirect: "/ip-lists",
                cssClass: "is-user-menu-last-child-item"
            }
        ]
    }
];

export default withRouter(Layout);