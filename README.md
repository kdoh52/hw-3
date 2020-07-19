# 03 JavaScript: Password Generator

This website is intended to generate secure passwords according to user preferences for length and character types.

The function to generate the password involves 5 steps:

1. Setting up arrays
I started by setting up empty arrays for the password and the pool from which characters can be chosen from. Then, I set up an array for each character type (lowercase, uppercase, numbers, special) that included every possible character in the appropriate category.

2. Prompting for length
The next step involved connecting a variable to a prompt, asking the user how many characters they would like the password to be. If the input is below 8, above 128, or not a number, the application will notify the user and prompt them to start over.

3. Confirming character types
This step was created with a series of "confirms", systematically asking which types to include in the password. For each category that is allowed by the user, its corresponding array is appended to the pool array. If the user denies all character types, the application will notify the user and prompt them to start over.

4. Appending from pool randomly
Once all character types and the length have been decided, the program randomly appends from the pool array to the password array as many times as is specified in the length.

5. Displaying the password
Finally, the password is created by joining the array into a string with no spaces or commas. It is then returned to the function and shown on screen for the user to copy.
