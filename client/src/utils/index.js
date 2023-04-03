import { surpriseMePrompts } from '../constants';

export function getRandomPrompt(prompt) {
    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
    const randomPrompt = surpriseMePrompts[randomIndex];

    // Avoid to get the same prompt 2 times in a row
    if(randomPrompt === prompt) return getRandomPrompt(prompt);

    return randomPrompt;
}