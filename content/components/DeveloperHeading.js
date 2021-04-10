import React from 'react';
import propTypes from 'prop-types';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './Developers.css';

const developers = require('./developers.json');

export const DeveloperHeading = ({developerId, children}) => {
    const {linkedin, image, name } = developers.find((developer) => developerId === developer.id);

    return (
        <div className="page-wrapper">
            <div className="left">
                <img alt={name + ' developer photo'} className={'developer-img'} src={'/' + image}></img>
            </div>
            <div className="right">
                <a className={'linkedin'} rel="noreferrer" target="_blank" href={linkedin}><LinkedInIcon />My LinkedIn</a>
                {children}
            </div>
        </div>
    )
};

DeveloperHeading.propTypes = {
    developerId: propTypes.number.isRequired
}