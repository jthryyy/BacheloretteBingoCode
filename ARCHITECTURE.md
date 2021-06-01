# Bingo card
Use CSS grid to make the 5X5 square
    -> put Free square in the middle
    -> make a new component for all the squares to display the phrase from your list

list of phrases
    Context API
    state will probably look like
        {
            listOfAllPhrases,
            listOf24SelectedPhrases,
            listOfSelectedItems -> you'll need need an algorithm to determine when they get a bingo
        }
        actions/dispatch
            - randomizeSelection
            - addItemToSelectedList
            - clearSelectedList
            - isBingo: boolean
            - toggleModal
        check if there is a bingo

Create a component modal to display when they get a bingo
    - have a button to randomize the card and start over

Main page with the bingo card
    <main page>
        <Modal> -> hide, but then show it when there is a bingo
        {isBingo && <modal>}
        <bingo grid>
            map<bingo squares>

folder structure
src
--+ app.js
--+ index.js
--+ components
    --+ pages
        --+ tasks
--+ context
    --+ bingoCardContext

square indexes
|  0 |  1 |  2 |  3 |  4 |
|  5 |  6 |  7 |  8 |  9 |
| 10 | 11 | 12 | 13 | 14 |
| 15 | 16 | 17 | 18 | 19 |
| 20 | 21 | 22 | 23 | 24 |

client side rendering (Single page apps (SPA)) vs server side rendering

HTTP requests
    get data from back end to front end

serverside rendering
    each page, -> make HTTP requests for each page
    routes GET /tasks - tasks.html + tasks.js
    
react
    1 html page
    -> react-router-dom > mocks the server routing on the frontend

https://localhost.com/tasks/ -> json
https://localhost.com/ -> index.html

client-side rendering -> reactjs
all 1 html page -> payload will be really long -> initla render will be really long
    -> code spliting -> you need this for huge web apps

next.js -> serverside render -> use react
server-side -> smaller page payloads -> hide js

embedded -> hardware programming
systems -> computer software
webdev
    frontend -> UI / UX
        UX
            - visual design
            - features to make using apps more intuitive and easy to learn how to use
            - rounded corner -> sharp corner
    backend -> algorithms and databases
data science -> python / C++