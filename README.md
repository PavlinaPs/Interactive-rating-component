# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

[](./screenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom variables
- ARIA attributes
- Flexbox
- JavaScript
- all is vanilla


### What I learned

In this challenge, I used a lot what I've learned from Kevin Powell's YouTube videos, especially from "Create a Design System with CSS - Web Development Course" solving the Frontend Mentor's Space tourism website challenge.

Keeping in mind from freeCodeCamp challenges, that "client's mood swings are pretty common", I use custom variables everywhere I can. This way I can change given property globally throughout the css file.

I use ARIA attributes as CSS selectors. I figured using these attributes is a win win situation. Not only I can select elements with them, which I would have to select somehow anyway, they are helping assistive technologies.

I tried to improve accessibility by using ChromeVox screen reader. In this challenge I found out, that adding a period at the end of sentence in <span> ment only for screen reader makes the screen reader pause between elements. Have not figured out though, how to make it pause a little between elements where period is not ment to be there.

I also considered to add "skip-to-content" button after tab is pushed but I decided against it in this challenge. I would be a lot alike Kevin Powell's code which is not fair and not what is this challenge about. But, I think it is an important topic and web pages should have improved keyboard access.

In JavaScript I had to make sure, that it is possible to select only one button. I considered using radio buttons, but as of now I don't see any advantage of it. After a new click event, all rating buttons are first set to false.

Another corner case came up - what if submit is pushed before any button is selected. I solved this with a built-in alert only, because I thing this is a designer's decision how the real pop-up should look.

I am very happy I can learn from solving Frontend Mentor's challenges.

### Continued development

I see a lot of room for improvement. In the near future I will be focusing more on:
- flexbox, to make sure it does what I need it to do on the first try,
- I need to learn more about selector choices,
- and start using libraries.
Most of all, I need to get faster in coding.

### Useful resources

- (https://youtu.be/lRaL-8qZ0mM) - Create a Design System with CSS - Web Development Course. Kevin Powell is great!

## Author

- Frontend Mentor - https://www.frontendmentor.io/profile/PavlinaPs
- GitHub - https://github.com/PavlinaPs

## Acknowledgments

As I wrote above, I am inspired and take guidance from Kevin Powell. I also like Ania Kubow's JavaScript retro games video. 
