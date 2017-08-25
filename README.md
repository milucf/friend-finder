# friend-finder

## Overview

This is a compatibility-based "FriendFinder" application -- basically a dating app. This full-stack site will take in results your users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match.

This app using Express to handle routing.

## How It Works

In order to not messig with a certain database; the data in this app is as an array of objects. But you can develop it and connect it to your desired database

Once you long in, you should answer 10 survey questions. Each answer should be on a scale of 1 to 5 based on how much the user agrees or disagrees with a question.

After submitting survey's qustions the following formula is being used to determine the user's most compatible friend 

*  compare the difference between current user's scores against those from other users, question by question.
    * Example:
        * User 1: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`
        * User 2: `[3, 2, 6, 4, 5, 1, 2, 5, 4, 1]`
        * Total Difference: **2 + 1 + 2 = 5**

Remember that the absolute value of the differences is bieng used. Put another way: no negative solutions.

The closest match will be the user with the least amount of difference.

## Demo

to view a demo of this app go to [Friend Finder](https://afternoon-ocean-44938.herokuapp.com)

