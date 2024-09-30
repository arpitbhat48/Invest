import React from 'react';

function Controls({ clearAllToggles }) {
    return (
        <div className="controls">
            <button onClick={clearAllToggles}>Close All Stocks</button>
            <button>Turn on Owned Stocks</button>
        </div>
    );
}

export default Controls;