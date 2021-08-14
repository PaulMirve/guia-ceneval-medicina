export default class Question {
    constructor(question, options = [], answer, explanation) {
        this.question = question;
        this.options = options;
        this.answer = answer;
        this.explanation = explanation;
    }
}