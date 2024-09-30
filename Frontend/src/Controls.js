import React from 'react';

function Controls({ clearAllToggles }) {
    return (
        <div className="controls">
            <button onClick={clearAllToggles}>Turn Off All Toggles</button>
        </div>
    );
}

export default Controls;