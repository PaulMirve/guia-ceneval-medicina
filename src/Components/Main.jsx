import { Button, ButtonGroup } from '@material-ui/core';
import React from 'react';
import sections from '../Files/sections';
import questions from '../Files/questions';
import history from '../history';

export default function Main() {
    const getButtons = () => {
        let buttonsArray = [];
        for (let i = 0; i < Math.ceil(questions.length / 20); i++) {
            buttonsArray.push(`Parte ${i + 1}`);
        }
        console.log(buttonsArray);
        return buttonsArray;
    }
    return (
        <div style={{ padding: '20px' }}>
            {
                sections.map((section, index) => {
                    return (
                        <div style={{ textAlign: 'center' }} key={index}>
                            <h1 style={{ fontWeight: 300 }}>{section.name}</h1>
                            <hr />
                            <ButtonGroup fullWidth orientation='vertical'>
                                {
                                    getButtons().map((button, i) => {
                                        return <Button onClick={() => history.push(`/section/${section.sectionNumber}/part/${i + 1}`)} fullWidth variant="outlined" color="default" key={button}>{button}</Button>
                                    })
                                }
                            </ButtonGroup>
                        </div>
                    )
                })
            }
        </div>
    )
}
