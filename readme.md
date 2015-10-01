*The end is nigh!*
The Zombie to English translator!


## The Rules

The following rules were implemented from the skeleton:

1) lower-case "r" at the end of words replaced with "rh".
2) an "a" or "A" is replaced with "hra".
3) the starts of sentences are capitalized (the "start of a sentence" is any occurrence of ".!?", followed by a space, followed by a letter.)
4) "e" or "E" is replaced by "rr"
5) "i" or "I" is replaced by "rrRr"
6) "o" or "O" is replaced by "rrrRr"
7) "u" or "U" is replaced by "rrrrRr"
8) "r" or "R" is replaced by "RR"


There following custom rules were added:
9) Zombies aren't complicated creatures.  Remove specified special characters from string
10) Zombies cant use numbers, replace instances of numbers with the string 'brains' and then zombify

## The Tests
#In zombSpec.js

Rules 1-10 all use the following:
Test 'expect(transformedContent).toBe(expectedContent)' when applying the appropriate translation rule including all edge cases I was able to think of when developing my functions;

Test 'expect(transformedContent).toEqual(expectedContent);'
"should not choke on an empty string as input"

Test 'expect(transformedContent).toBeDefined();'
"inputs should always be defined, even when left blank"


Notes:  I never did get rule 9 or 10 to work in the index.html interface. Tests pass just fine and debug would indicate that the actions are being performed.  This was a last minute adjustment as I read the removed statement as removing the 10 rule requirement not the removal of the individual function requirement and ended up having to write two more rules plus tests when I went to turn in the assignment at the last minute.
