import React, { Component } from 'react';
import classes from './Section.css';
import Wrapper from '../Wrapper/Wrapper';
import Sprite from '../../assets/sprite.svg';

class cvSection extends Component { 

    state = {
        visibility: true
    }

    toggleSectionHandler = () => {
        this.setState({visibility: !this.state.visibility});
    }

    render() {
        let icon = Sprite + '#icon-chevron-thin-down';
        const contentStyle = {
           backgroundColor: '#FFF'
        }
        if (!this.state.visibility) {
            icon = Sprite + '#icon-chevron-thin-up';
            contentStyle.display = 'none';
        }

        return (
            <Wrapper>
                <div className={classes.SectionHeader} onClick={this.toggleSectionHandler}>
                    <h3>{this.props.title}</h3>
                    <svg className={classes.SectionHeaderIcon}>
                        <use xlinkHref={icon}></use>
                    </svg>
                </div>
                
                <main style={contentStyle}>
                    {this.props.children}
                </main>
            </Wrapper>
        )
    }
}
export default cvSection;