import React, { Component, Fragment } from 'react';
import classes from './CustomList.css';
import Sprite from '../../assets/sprite.svg';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import Spinner from '../Spinner/Spinner';
import Project from '../Project/Project';

class cvList extends Component {
    
    state = {
        project: null, 
        showingProject: false
    }
    
    showProjectHandler = (event) => {
        this.setState({project: this.props.object[event.target.id]});
        this.setState({showingProject: true});
    }

    hideProjectHandler = () => {
        this.setState({project: null});
        this.setState({showingProject: false});
    }

    renderButton = (index) => {
        if (this.props.object) {
            return <Button id={index} clicked={(event)=>this.showProjectHandler(event)}>VER PROYECTO</Button>
        }
    }
    
    render() {
        let icon = Sprite + '#icon-chevron-small-right';
        let lista;
        if (this.props.items)
        {
            const project = this.state.project ?  <Project project={this.state.project} closed ={this.hideProjectHandler}/> : <Spinner />
            
            let modal;
            if (this.props.object) {
                modal = (
                    <Modal show={this.state.showingProject} modalClosed={this.hideProjectHandler}>
                        {project}
                    </Modal>  
                )
            }

            lista = 
                <Fragment>
                    <ul> 
                    { this.props.items.map( (item, index) => <li key={index}><svg className={classes.ListIcon}><use xlinkHref={icon}></use></svg>
                        {item} { this.renderButton(index) }</li>) }
                    </ul>                          
                    { modal }
                </Fragment>
        }

        return (  
            <div className={classes.List}>             
                {lista}  
            </div>              
        )
    }
    
}
export default cvList;