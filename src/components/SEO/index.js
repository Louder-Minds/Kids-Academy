import React from 'react';

import Helmet from 'react-helmet';

const SEO = ({ title, lang = 'nl' }) => {
    let text = '';
    if (title === undefined) {
        text = 'KidsAcademy';
    } else {
        text = `KidsAcademy | ${title}`;
    }
    return (
        <Helmet
            title={text}
            meta={[
                { name: 'description', content: 'Sample' },
                { name: 'keywords', content: 'sample, something' },
            ]}
        >
            <html lang={lang} />
        </Helmet>
    );
};

export default SEO;
