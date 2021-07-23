import PropTypes from "prop-types";
import React from "react";

function TabPanel(props) {
    const {children, value, index } = props;


    return (
        <div
            role="tabpanel"
            hidden={value !== index}

        >
            <div> {children}</div>
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};


export default TabPanel