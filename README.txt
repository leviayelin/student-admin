# Project: student admin
-------------------------------

## About

- creating a form with input field, that take student data such as name, age, major and email.

- the enter date then will be saved in browser local storage for letter data pick use or display 

- the data will display as a card list in grid format 

-------------------------------

## notes 

- creating delete feature to each student data card, by using logic of passing state.

seprate functionalty :

> StudentForm - hold the loaclstorage 
> CardList - mange the loop & pass state 
> Card - function as to UI 

+ at CardList, the meaning of passing state meant thet,
that for this feature is only act as an object of connecting between components. as an understanding this can be apply to all components in other aspect.

+ the filter method work better for react than the use of splice, becouse of the virtual DOM re-rendering as a result of state change splice only mutate and modifie the original object/array but not create a new 
like filter does.

-------------------------------

## next time 

1.	local storage :

  - edit - enabling editing exiting data
  - delete - remove/delete exiting data

2. user interface - creating page flow:

  - search field
  - main page display (student card data, by new added).
