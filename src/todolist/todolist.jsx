import React from 'react';
import Toselect from './toselect';

const Todolist = ({ lists,onChecklist,delList }) => {
    
    return lists.map((list) => (
        <Toselect key={list.id} list={list}  onChecklist={onChecklist} delList={delList} />
    ));           
}

export default Todolist;