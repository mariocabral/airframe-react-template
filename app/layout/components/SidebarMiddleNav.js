import React from 'react';

import { SidebarMenu } from 'airframe-react-lib';

export const SidebarMiddleNav = () => (
    <SidebarMenu>
        <SidebarMenu.Item
            icon={<i className="fa fa-fw fa-home"></i>}
            title="Dashboards"
        >
            <SidebarMenu.Item title="Projects" to='/dashboards/projects' exact />
        </SidebarMenu.Item>
        { /* -------- Layouts ---------*/ }
    </SidebarMenu >
);
