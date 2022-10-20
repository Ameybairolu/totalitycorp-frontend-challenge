# Clone of apple.com's Homepage

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Problem Statement

In this assignment, the challenge was to choose one of the following websites and replicate only the home page.

1. [Starbucks](https://www.starbucks.com/)
2. [Tesla](https://www.tesla.com/)
3. [Twitter](https://twitter.com/home)
4. [LinkedIn](https://www.linkedin.com/feed/)
5. [EA (Electronic Arts)](https://www.ea.com/en-gb)
6. [Apple](https://www.apple.com/)
7. [Opensea](https://opensea.io/)

I decided to go with Apple's website as it doesn't have any major loading states. \
The resources can hence be completely hardcoded, which is quite helpful in a project that needs to be completed within a few days.

## Approach

### Details about basic Project Setup

It was mentioned in the Assignment that we aren't allowed to use additional libraries. \

I have just used prettier, eslint and prop-types libraries for code formatting.

### Folder and File Structure

There is a way in which I like to organize files, folders, and therefore, components that I use in my project.

1. There are 3 main Directories

    - assets \
       This is the folder that stores images (in any format, like SVG, PNG, JPG, etc.)
    - commonComponents \
       This folder has those components which will be used by different feature specific components
    - features \
       This folder stores folders containing components and their containers based on the feature that each folder represents.

2. constant-data.js \
   This file has the data stored which are hardcoded.

### Logic in App.js

-   There is a minor logic which is being handle by a useState state 'isLargeDevice', which is being set by the useEffect hook in the component.
-   We need this state to inform the child components about the screen width.
-   This helps in keeping the page responsive.

### Feature 1: The Navigation Bar

1. Inside the features folder, there's a folder named 'navBar'.
2. The container component in this folder only employs the components from the component folder.
3. The components folder in the 'navBar' folder, contains 2 components.
    - navLinks component
    - searchBar component

#### NavLinks Component

The navLinks component takes care of objectives as follow:

1. Based on the screen-size, we need to display navbar options from Store to Support
2. In small screens, these options go inside a sidebar.
3. In large screens, these options are always there on the navbar unless the user clicks on the search icon.
4. The prop 'isLargeDevice' helps display these options when required.
5. When the user clicks on the search icon, these options' opacity is reduced to 0, giving room to the search bar component. (Note: The CSS class 'opacity-0' is being set conditionally)
6. The state 'isHamburgerActive' helps display the SideMenu when true.
    - To set this state to true, click on the hamburger icon.
7. The state 'isSearchBarActive' helps display the SearchBar component.
8. The state 'isSearchBarActive' also helps display QuickLinks list. \
    - If the screen-size is big, and if 'isSearchBarActive' is true, the component displays QuickLinks right below the SearchBar component.
    - If the screen-size is small, and if 'isSearchBarActive' is false, the navbar options are displayed in the SideMenu.
    - If the screen-size is small, and if 'isSearchBarActive' is true, the QuickLinks list is displayed in the SideMenu.

###### Note:

1. To display navbar links, this component uses LinkWithIcon and LinkWithText components from commonComponents.
2. The HamburgerIconLink component simply contains jsx for the HamburgerIcon. \
   This component belongs strictly to the NavLinks component, as Hamburger Icons are normally found in NavBar. This component therefore is in the same folder as the NavLinks, as it basically is just a link.

#### SearchBar Component

1. This component only contains jsx for the SearchBar.
2. This component also belongs only to the NavBar. There this component is placed in the components folder of the NavBar feature.
3. Unlike HamburgerIconLink, this is not a link. This has different functionality. And hence, this has been placed a bit separately.
4. There is a minor logic being handled by this component.
    - In apple's homepage, when the device width is big, there is a cross visible right next to the search input.
    - When the device width is small, the cross is no more visible.
    - The component checks if there is a function passed to it 'onInputFocus', which helps decide whether or not to display the cross.
