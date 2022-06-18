import React from 'react';

import TreeNode from './TreeNode';

const FolderTree = ({data}) => {
    return (
       
        <ul>
          {data.map((tree) => (
            <TreeNode key={tree.id} node={tree} />
          ))}
        </ul>
     
    );
};

export default FolderTree;



