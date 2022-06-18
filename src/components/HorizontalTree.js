
import React from 'react';
import { Tree, TreeNode } from 'react-organizational-chart';
import NodeArticle from './NodeArticle';

const HorizontalTree = () => {
    return (
        <div className='col-span-4 pt-5'>
            <div className='w-6/12'>

            <Tree lineWidth={'2px'}   lineColor={'#A1AAB1'} lineBorderRadius={'10px'} label={<NodeArticle />}>
            <TreeNode label={<NodeArticle />}>
            <TreeNode label={<NodeArticle />} />
            <TreeNode label={<NodeArticle />} />
            </TreeNode>
            <TreeNode label={<NodeArticle />}>
            </TreeNode>
            <TreeNode label={<NodeArticle />}></TreeNode>
            </Tree>
            </div>
        </div>
    );
};

export default HorizontalTree;