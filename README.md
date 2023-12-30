# Trivia Game

## Project Overview

This project involves developing an online trivia game using React and Redux. The game consists of a login screen, a game screen, and a feedback screen. The player must log in to start the game, which consists of 5 questions. After answering all questions, the player is redirected to the feedback screen, which displays their score and a button to start a new game.

## Project Requirements

### Login Page

#### 1. Login Screen

**Priority: 0**

Create a login screen with fields for the player's name and email. Ensure the "Play" button is disabled if either of the fields is empty.

**Technical Notes:**
- Set up Redux and Router for future requirements.
- Follow technical guidelines for Redux store configuration.

#### 2. Start the Game

**Priority: 1**

Implement the "Play" button to request a token from the API, redirecting the player to the game screen upon success.

#### 3. Configuration Button

**Priority: 1**

Include a button on the login screen that leads to the game configuration.

**Technical Notes:**
- Implement appropriate Redux actions.

#### 4. Unit Tests for Login Screen

**Priority: 1**

Develop unit tests to achieve 90% coverage for the login screen using React Testing Library.

### Game Screen

#### 5. Header

**Priority: 1**

Create a header displaying player information, including their Gravatar image, name, and score.

#### 6. Game Page

**Priority: 1**

Develop the game page to fetch questions, categories, and answer options from the API. Style the page to highlight correct and incorrect answers.

**Technical Notes:**
- Implement Redux actions for handling game logic.
- Set a timer for each question with a 30-second limit.

#### 7. Answer Styling

**Priority: 2**

Stylize the answers to turn green for correct answers and red for incorrect ones upon selection.

#### 8. Timer

**Priority: 3**

Implement a timer on the game page, limiting each question to a maximum of 30 seconds. Consider unanswered questions as incorrect.

#### 9. Scoring

**Priority: 3**

Update the score when the player selects the correct answer. Consider different difficulty levels for score calculation.

#### 10. Next Question Button

**Priority: 3**

Show a "Next" button after the player answers a question. Clicking it should load the next question.

#### 11. Complete 5 Questions

**Priority: 2**

Ensure the game consists of 5 questions, resetting the timer for each new question. Redirect the player to the feedback screen after answering all questions.

## Code Annotations

### Global State Structure

```jsx
{ 
  player: { 
    name: '', // player's name
    assertions: 0, // number of correct answers
    score: 0, // player's total score
    gravatarEmail: '', // player's Gravatar email
  },
  // other parts of the global state
}
```
## Technologies

- React
- Redux
- Redux Thunk
- React Redux
- React Router
- React Testing Library

## Feedback

Your feedback on the project structure and code annotations is valuable. Feel free to share any suggestions or thoughts you may have.

## Portfolio

Check out my [portfolio](my-folio-weld.vercel.app/) for more of my work!