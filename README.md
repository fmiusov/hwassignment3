# Password Generator

## A BootCamp Project By Jayson Duff

- [x] Create a password generator in javascript that meets user specifications
- [x] Address edge cases for the length prompt
- [x] Add extra accessibility using hover text tips and a copy to clipboard button

## How it Works

The main operating function of the program is `generatePassword()`, which is called anytime the user clicks the red **Generate Password** button. This function asks the user a series of questions (first an open prompt of length and then 4 yes/no confirms). The answers to those questions determines which combination of array variables is dumped into an empty master array - variable `passwordSelection`.

Then, a for loop iterates over the now populated `passwordSelection` using `random()` methods off a `Math` object to determine which index value to pull into the currently generating password, saved in variable `customPassword`. Finally, this variable is converted from an array into a string and input into a read-only text box for the user via the `writePassword()`.

Additional functions were added for accessibility, which include hover text for the buttons to explain their use as well as the addition of a copy-to-clipboard button for user convenience.

## Developer Takeaways

1. The biggest hassle was all the edge cases resulting from giving the user too much control via the length prompt

2. A better design would have no prompts, opting instead for number selector that the user controls with up and down
   arrows. The confirm alerts could be replaced with radio buttons or check boxes, so that the user could go back and change their mind. This would also allow the user to generate multiple passwords without having to wonder which parameters were set.

3. Converting strings to arrays and concatenating those arrays into a blank array was not as simple as I thought. Several method calls were attempted before settling on `concat()`. A big eureka moment came with the decision to use `join("")` to eliminate all the commas when converting the finished array back to a string.

4. Restricting the character length became an important factor after test user tried to generate a 100k character long password and crashed the browser. Character length restricted to a max of 30 characters.

## Gallery

![Password Generation Prompt and Hover Text](../images/PasswordGen_PromptAndHoverText.PNG)
**Password Generation Prompt and Hover Text**

![Password Error Message](../images/PasswordGen_ErrorMessage.PNG)
**Password Error Message**

![Password Generation Complete](../images/PasswordGen_Complete.PNG)
**Password Generation Complete**

![Password Copy Button Clicked](../images/PasswordGen_AfterCopy.PNG)
**Password Copy Button Clicked**
