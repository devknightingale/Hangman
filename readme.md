# Hangman Game
A very simple, (somewhat incomplete) Hangman game built with HTML, CSS, and Javascript.
I didn't focus too much on appearances or responsive design, as this project was mainly started to test my ability to build an interactive site with Javascript without following a tutorial.

## What I learned

- While the syntax is different, I used a lot of the skills I learned from building my first project in C# to help me with building this one in JS.
- Sometimes, my first instinct on how to accomplish a certain thing does not actually work, and so I have to adjust my approach and try out different ways to accomplish the same task.
- I spent a lot of time looking up syntax, methods, functions etc - JS is unfamiliar to me in comparison to C#, and often I'd find I knew how I would have approached something in C#, but didn't know how it was done in Javascript.
  - For example, one thing I wanted to do with this was to have a "lives" display, where each incorrect guess would reduce your life by one until the game was over. My first instinct on trying to create this in CSS and JS was to create a function that would remove one of the ".lives" div from the page when the life was spent. I'm sure there was something I might have been doing wrong with that, but every time I attempted to do it that way, it either wouldn't work at all, or it would remove all three lives at the same time. I also tried changing the className of these divs to a separate class I had made where display was set to "none". Again, I ran into the issue that it either didn't work at all, or it would hide all three. So I rewrote the function again, and instead changed it to simply use "(element).style.visibility = 'hidden'". Finally, it worked as expected.
  - Again, I'm not sure why the first two attempts didn't work as expected. There may have been some strange underlying behavior that I wasn't aware of when I wrote the code, or maybe I accidentally did something incorrectly with the variables, or - any number of things. But, I do know that trying to fix this issue forced me to think of multiple approaches to solving the same problem, and I think that's a good skill to hone in general.

## What I'd Do Differently Next Time

- Most certainly, have a better plan in place for how I wanted the site to look like and how it functioned.
  - One of the issues I ran into with responsiveness was that, when I started this project, I really had no idea how I would get from point A to point B with making a Hangman game. I'd never made anything in Javascript besides a todo list following a tutorial, and I'd certainly not ever coded any kind of games. So there were several points in the project where I was sort of jumping from one thing to another, adding and removing things to figure out how they worked, without really thinking of how it was structured as a whole because I was so focused on "just making things work". That sort of very spread-out approach to trying to build this was a detriment to the structure of the page, and by the end once I had gotten things to "work", I realized that my HTML code was not really structured well to work on the responsiveness.
- Look into Typescript:
  - One of the other issues I ran into is that C# and JS are different in the ways that variables are declared. I learned to code in C#, did my first big project in C#, and have been practicing DSA problems on Leetcode in C#. So often throughout the project I would declare a variable and realize that Javascript wouldn't accept "int n" for example as a variable. I'd have to constantly go back and change things. I'm sure that there are advantages to having a more loosely typed language, but I think I would feel a bit more comfortable working with Typescript as it would be more similar to C#.

## What I want to do next

- Expand my knowledge of Javascript
- Try out Typescript
- Look into React or Next.js
- Try to build a simple full-stack application
