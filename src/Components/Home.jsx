import { Card, CardContent, FormControl, Typography, RadioGroup, Radio, FormControlLabel, Button, Icon, Paper } from '@material-ui/core';
import { Check, Clear } from '@material-ui/icons';
import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import questions from '../Files/questions';

export default function Home() {
    const [answers, setAnswers] = useState([]);
    const [isValidating, setIsValidating] = useState(false);
    let { part } = useParams();

    const selectValue = (value, index) => {
        let ans = answers;
        ans[index] = value;
        setAnswers([...ans]);
    };

    const validateAnswers = () => {
        window.scrollTo(0, 0);
        setIsValidating(true);
    };

    const tryAgainButton = () => {
        window.scrollTo(0, 0);
        setAnswers([]);
        setIsValidating(false);
    }

    const getQuestionNumber = (index) => {
        let number;
        if (part > 1) {
            number = index + 1 + ((part - 1) * 20);
        } else {
            number = index + 1;
        }
        return number
    }
    return (
        <div>
            {questions.slice((part - 1) * 20, part * 20).map((q, index) => {
                const { question, options, answer, explanation } = q;
                return (
                    <Card key={index} style={{ marginTop: '20px' }}>
                        <CardContent>
                            <Typography style={!isValidating ? { color: 'black' } : isValidating && answers[index] === answer ? { color: 'green' } : { color: "red" }} gutterBottom variant="h5" component="h3"> {getQuestionNumber(index)}) {question}</Typography>
                            <FormControl component="fieldset">
                                <RadioGroup aria-label="gender" name="gender1">
                                    {
                                        options.map((option, i) => {
                                            return (
                                                <div key={i}>
                                                    <FormControlLabel disabled={isValidating} value={option} control={<Radio checked={answers[index] === option} onClick={() => selectValue(option, index)} />} label={option} />
                                                    {isValidating && option === answers[index] && answers[index] !== answer ? <Icon><Clear /></Icon> : null}
                                                    {isValidating && option === answer ? <Icon><Check /></Icon> : null}
                                                </div>
                                            );
                                        })
                                    }
                                </RadioGroup>
                            </FormControl>
                            {isValidating ?
                                <Paper elevation={0} variant='outlined' style={{ padding: '10px' }}>
                                    <h4>Respuesta:  {answer}</h4>
                                    {explanation}
                                </Paper> : null}
                        </CardContent>
                    </Card>
                );
            })}
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
                {!isValidating ? <Button onClick={validateAnswers} variant="contained" color="primary">Validar respuestas</Button> : null}
                {isValidating ? <Button onClick={tryAgainButton} style={{ marginLeft: '10px' }} variant="contained" color="primary">Volver a intentar</Button> : null}

            </div>
        </div>
    )
}
