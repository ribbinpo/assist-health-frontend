import React from 'react';

type topicProp ={
    topicName: string,
};

const topictrainer = ( { topicName }: topicProp ) => {
    return (
        <div className="pt-1 pr-4 text-xl font-medium text-red-800"> {topicName} </div>
    );
};

export { topictrainer as Topictrainer }