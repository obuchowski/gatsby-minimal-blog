import React from 'react';
import propTypes from 'prop-types';

const developers = require('./developers.json');

export const Header = ({developerId, projectGit}) => {

    const {contact, link, name} = developers.find((developer) => developerId === developer.id);

    return (
        <>
            <div>
                Developer: <a rel="noreferrer" target="_blank" href={link}>{name}</a>
            </div>
            <div>
                Github project Link: <a rel="noreferrer" target="_blank" href={projectGit}>{projectGit}</a>
            </div>
            <div>
                Contact: <a rel="noreferrer" target="_blank" href={`mailto:${contact}`}>{contact}</a>
            </div>
        </>
    )
};

Header.propTypes = {
    developerId: propTypes.number.isRequired,
    projectGit: propTypes.string.isRequired
}