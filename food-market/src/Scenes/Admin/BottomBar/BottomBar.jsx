import React from 'react';
import './BottomBar.scss';
import {ReactComponent as AddIcon} from '../../../assets/Images/icons/add-icon.svg';
import {ReactComponent as Logo} from '../../../assets/Images/logo.svg';
import {ReactComponent as EditIcon} from '../../../assets/Images/icons/edit-icon.svg';
import {ReactComponent as SaveIcon} from '../../../assets/Images/icons/save-icon.svg';
import {ReactComponent as DeleteIcon} from '../../../assets/Images/icons/delete-icon.svg';
import {Link} from 'react-router-dom';

const BottomBar = ()=>{
    return(
        <div className='BottomBar'>
            <div className="BottomBar-item">
                <AddIcon/>
            </div>
            <div className="BottomBar-item">
                <DeleteIcon/>
            </div>
            <div className="BottomBar-item-logo BottomBar-item">
                <Link to ={'/a/recipe'}>
                    <Logo/>
                </Link>
            </div>
            <div className="BottomBar-item">
                <EditIcon/>
            </div>
        </div>
    )
};
export default BottomBar;