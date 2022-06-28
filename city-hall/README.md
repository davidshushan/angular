# CityHall

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.3.

## SPA App
this is a SPA App with multiple pages and routing.
this app have sub-routing of the root page (4200 | home)
we can move from one page to another by pressing the the menu buttons:

## Home screen:
![Screenshot1](https://user-images.githubusercontent.com/93195038/176243220-00d79703-1fea-4a56-bd0c-be8594f1f70b.jpg)

#### in the resident-list path we can see the cards of our dummy-Data-resident-list.
##
##
### as we can see here:
###
![Screenshot2](https://user-images.githubusercontent.com/93195038/176243729-d2606f63-2320-4270-bf32-badf013f34a8.jpg)
### and the rest are here:
###
![Screenshot3](https://user-images.githubusercontent.com/93195038/176243744-4345141d-bb11-4eac-8774-1541da96a579.jpg)



## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Edit

we can also edit each card individualy by pressing it 
from resident-list.

and then entering the card-edit section.
(in the project it is called: resident-detail )

in resident-detail we can change the fields of this item
using the input belong.
### note: making any change of the card will automaticly uppdate it on the database. (resident-list)

![Screenshot4](https://user-images.githubusercontent.com/93195038/176245037-964cbc4c-5771-4226-9233-75a4613bb6a8.jpg)


## Employees:

in this section we can see the employees-list as a table.
odd indexes (even rows) - will be darker
also an Employee with a monthly salary smaller than < 3000 will be marked in red color, the rest will be in blue.

![Screenshot5](https://user-images.githubusercontent.com/93195038/176246841-41c1a29f-efec-45be-9984-bd2438242548.jpg)


## last one - Businesses:


in this section we can see the Businesses-list as a table.
odd indexes (even rows) - will be darker
also a Business with an  average monthly profit smaller than < 5000 will be marked in red color, the rest will be in blue.

### as we can see here:


![Screenshot6](https://user-images.githubusercontent.com/93195038/176246961-d4d26ca5-f308-41cf-9b90-018a1a4b4bea.jpg)





## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
