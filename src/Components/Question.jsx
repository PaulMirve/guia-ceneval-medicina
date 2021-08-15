import React from 'react';
import { Card, CardContent, FormControl, Typography, RadioGroup, Radio, FormControlLabel, Icon, Paper } from '@material-ui/core';

export default function Question({question, options, answer, explanation, answers, isValidating}) {
    return (
        <div>
            <Card key={index} style={{ marginTop: '20px' }}>
                        <CardContent>
                            <Typography style={!isValidating ? { color: 'black' } : isValidating && answers[index] === answer ? { color: 'green' } : { color: "red" }} gutterBottom variant="h5" component="h3">{index + 1}) {question}</Typography>
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
        </div>
    )
}
