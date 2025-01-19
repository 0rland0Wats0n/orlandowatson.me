import React from 'react';

const OnenoteOnlineDetails = () =>
    <span className="font--normal">
        while on the onenote team i worked on several features and projects. these included:
        <ul>
            <li>implementing page-level search for notebooks</li>
            <li>implementing page-level at-mentions for notebooks</li>
            <li>contributing to livesite health and uptime by performing on-call engineer duties</li>
        </ul>
    </span>

const ACSPhoneDetails = () =>
    <span className="font--normal">
        i worked with the API team to build, test, document and publish the first version of <a href="https://www.npmjs.com/package/@azure/communication-phone-numbers" 
            className="color--blue text--underline"
            target='_blank'
            rel='noreferrer'
        >
            @azure/communication-phone-numbers
        </a>.
        this library exposes azure's phone number administration capabilities through a javascript sdk.
    </span>

const ACSSMSDetails = () =>
    <span className="font--normal">
        i worked with the API team to build, test, document and publish the first version of <a href="https://www.npmjs.com/package/@azure/communication-sms" 
            className="color--blue text--underline"
            target='_blank'
            rel='noreferrer'
        >
            @azure/communication-sms
        </a>.
        this library exposes azure's sms capabilities through a javascript sdk.
    </span>

const ACSRoomsDetails = () =>
    <span className="font--normal">
        i worked on building, testing, documenting and publishing both the asp.net rest api and javascript azure sdk for <a href="https://www.npmjs.com/package/@azure/communication-rooms" 
            className="color--blue text--underline"
            target='_blank'
            rel='noreferrer'
        >
            @azure/communication-rooms
        </a>.
    </span>

const SenecaDetails = () =>
    <span className="font--normal">
        created a custom wordpress theme based on figma designs for the <a href="https://senecafoa.org/" 
            className="color--white text--underline"
            target='_blank'
            rel='noreferrer'
        >
            senecafoa.org
        </a> website.
    </span>

export {
    OnenoteOnlineDetails,
    ACSPhoneDetails,
    ACSSMSDetails,
    ACSRoomsDetails,
    SenecaDetails
}
