import React from 'react';
import faker from 'faker/locale/en_US';
import {
    Container
} from 'airframe-react-lib';
import { setupPage } from 'airframe-react-lib';

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
