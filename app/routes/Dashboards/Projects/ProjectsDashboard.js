import React from 'react';
import faker from 'faker/locale/en_US';
import {
    Container
} from './../../../components';
import { setupPage } from './../../../components/Layout/setupPage';

import { HeaderMain } from "../../components/HeaderMain";

const ProjectsDashboard = () => (
    <Container>
        <HeaderMain  title="Projects" className="mb-4 mb-lg-5" />
        <p>
            { faker.lorem.paragraph() }
       </p>
        
    </Container>
);

export default setupPage({
    pageTitle: 'Projects Dashboard'
})(ProjectsDashboard);