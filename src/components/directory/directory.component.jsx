import React, {Component} from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component.jsx';
import DIRECTORY_DATA from './directory.data.jsx';

class DirectoryMenu extends Component {
    constructor(){
        super();
        this.state={
            sections: DIRECTORY_DATA,
        }
    }

    render(){
        return (
        <div className = 'directory-menu'>
            {
                this.state.sections.map(({title,id, imageUrl, size}) =>(
                    <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
                ))
            }
        </div>
        );
    };
}

export default DirectoryMenu;