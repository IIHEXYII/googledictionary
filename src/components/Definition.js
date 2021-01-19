import React from 'react';
import Synonym from './Synonym';

const Definition = (props) => {
    const { definition, example, synonyms } = props;
    console.log(props);
    return (
        <>
            <p>Definition: {definition}</p>
            <p>Example: {example}</p>
            
            {synonyms?.length > 0 ? (
                <div>
                    {synonyms.map((synonym, idx) => (
                        <Synonym key={idx} synonym={synonym} />
                    ))}
                </div>

            ): null}
        </>
    );
};

export default Definition;