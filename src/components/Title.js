import React from 'react';

class Title extends React.Component {
    render() {
        return (
            <div>
                <h1 className="display-4 text-center">Weather Radar</h1>
                <p className="text-center">Find out the temperature, conditions and more ...</p>
            </div>
        );
    }
}

export default Title;