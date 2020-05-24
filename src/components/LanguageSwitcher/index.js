import React from 'react';
import { IntlContextConsumer, changeLocale } from 'gatsby-plugin-intl';

const languageName = {
    en: 'EN',
    nl: 'NL',
};

const Language = () => (
    <IntlContextConsumer>
        {({ languages, language: currentLocale }) => (
            <div
                style={{
                    backgroundColor: 'rgba(0,0,0,0.1)',
                    padding: '5px 0',
                    width: '78px',
                }}
            >
                {languages.map((language) => (
                    <a
                        key={language}
                        onClick={() => changeLocale(language)}
                        style={{
                            backgroundColor:
                                currentLocale === language ? `#14b09c` : `none`,
                            margin: 10,
                            cursor: `pointer`,
                            padding: '5px 10px',
                            margin: '0',
                        }}
                    >
                        {languageName[language]}
                    </a>
                ))}
            </div>
        )}
    </IntlContextConsumer>
);

export default Language;
