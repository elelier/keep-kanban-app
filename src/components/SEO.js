import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ title, description }) => (
    <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Helmet>
);

export default SEO;
