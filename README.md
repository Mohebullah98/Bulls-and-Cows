# Bulls-and-Cows
LeetCode Problem #299

You are playing the __Bulls and Cows__ game with your friend.

You write down a secret number and ask your friend to guess what the number is. When your friend makes a guess, you provide a hint with the following info:

- The number of "bulls", which are digits in the guess that are in the correct position.
- The number of "cows", which are digits in the guess that are in your secret number but are located in the wrong position. Specifically, the non-bull digits in the guess that could be rearranged such that they become bulls.
Given the secret number ```secret``` and your friend's guess ```guess```, return the hint for your friend's guess.

The hint should be formatted as ```"xAyB"```, where ```x``` is the number of bulls and ```y``` is the number of cows. Note that both ```secret``` and ```guess``` may contain duplicate digits.

__Example 1:__
```
Input: secret = "1807", guess = "7810"
Output: "1A3B"
Explanation: Bulls are connected with a '|' and cows are boxed in brackets:
"[1]8[0][7]"
    |
"[7]8[1][0]"
```

__Example 2:__
```
Input: secret = "1123", guess = "0111"
Output: "1A1B"
Explanation: Bulls are connected with a '|' and cows are boxed in brackets:
"[1]123"        "[1]123"
    |      or       |
  "01[1]1"        "011[1]"
Note that only one of the two unmatched 1s is counted as a cow since the non-bull digits can only be rearranged to allow one 1 to be a bull.
```
