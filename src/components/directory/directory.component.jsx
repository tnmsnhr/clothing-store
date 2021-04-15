import React, { Component } from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySection } from '../../redux/directory/directory.selector';

const  Directory=({section})=>{

        return (
            <div className="directory-menu">
                {section.map(({id, ...sectionProps})=><MenuItem key={id} {...sectionProps}/>)}
            </div>
        )
}

const mapStateToProps= createStructuredSelector({
  section: selectDirectorySection
})

export default connect(mapStateToProps)(Directory);
