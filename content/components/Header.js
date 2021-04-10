import React from 'react';
import propTypes from 'prop-types';

const developers = require('./developers.json');

export const Header = ({developerId, projectGit}) => {

    const {contact, linked, name} = developers.find((developer) => developerId === developer.id);

    return (
        <>
            <div>
                Developer: <a href={linked}>{name}</a>
            </div>
            <div>
                Github project Link: <a href={projectGit}>{projectGit}</a>
            </div>
            <div>
                Contact: <a href={`mailto:${contact}`}>{contact}</a>
            </div>
        </>
    )
};

Header.propTypes = {
    developerId: propTypes.number.isRequired,
    projects: propTypes.string.isRequired
}