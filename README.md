<p align="center"><img src="https://github.com/MostafaRastegar/mr-react-native-starter/raw/main/mr-react-native-starter.jpg" alt="BoxBouncing"/></p>
<h1 align="center" style="color:#008ee5;">mr-react-native-starter</h1>
<h3 align="center" style="color:#666666;">Start your project the easiest way</h3>
<p align="center" style="font-weight: 900">
    Highly flexible , High scalability ,Redux , Axios , Redux-thunk , Redux-persist, Styled-components , ESlint and Prettier
</div>

This project is based on the [Expo](https://reactnative.dev/docs/getting-started 'Expo'). Therefore, you can refer to its documentation to install **react-native** and **Expo**.

In this structure, we tried to bring you a good experience by combining different technologies.

## The main structure is as follows:

- **`components`**
  - **`Common`** _general components_
  - **`Screens`** _partials and styles for every main screen_
- **`screens`** _main screen pages_
- **`helpers`** _utils and javascript helpers_
- **`constants`**
  - **`theme`** _config global colors and styles_
  - **`endpoints`** _object of endpoints servieces_
- **`store`** _redux repository for every main screen_

## installation:

Assuming that you have [Node 12 LTS](https://nodejs.org/en/download/ 'Node 12 LTS') or greater installed, you can use npm to install the Expo CLI command line utility:

_Install eslint, prettier and editor config plugins into your IDE_

1. `npm install -g expo-cli`

2. `npm install –g react-native-cli`

3. `git clone https://github.com/MostafaRastegar/mr-react-native-starter.git`

4. `cd mr-react-native-starter`

5. `npm install`

6. `npm run web` or `npm run android` or `npm run ios`

## document:

### Store structures:

You create a folder for each main part of the reducer, for example, the users' folder used in the Redux store.

#### Users structures:

- **store**
  - **users**
    - **actions**
    - **effects**
    - **reducers**
    - **services**
    - **types**

#### Introducing types:

Includes an object of all types used in Users actions. Here are three types of typing for each request:

**REQUEST, SUCCESS, FAILURE**

    const types = {
    ...
      GET_ALL_USERS_REQUEST: 'GET_ALL_USERS_REQUEST',
      GET_ALL_USERS_SUCCESS: 'GET_ALL_USERS_SUCCESS',
      GET_ALL_USERS_FAILURE: 'GET_ALL_USERS_FAILURE',
    ...
    };

#### Introducing actions:

Includes an object of all actions used in users side effects
Here are three types of action for each request:
**request, success, failure**

Naming actions are based on what they want to do. For example, when requesting we use get, post, which affects the action name.
To make it easier to use the actions in different parts of the project, the 'actionMaker' helper has been used, in which case each action determines which type it belongs to. And when calling it, you no longer need to pass the type.

    const types = {
    ...
       getAllUsersRequest: actionMaker (types.GET_ALL_USERS_REQUEST),
      getAllUsersSuccess: actionMaker (types.GET_ALL_USERS_SUCCESS),
      getAllUsersFailure: actionMaker (types.GET_ALL_USERS_FAILURE),
    ...
    };

#### Introduction of reducers:

reducers determine the structure of each part of our store. We have here for each request three main parameters
**loading, data, error**

Consider that it responds to requests based on the response it receives from the server.

#### Introducing selectors:

selectors is an object that is responsible for getting data from the store. For example, if you need to read users' data at any time.
You use the following function:
`getAllUsersData`

The naming of this function has three main parts.
**get**: which always comes first in all the values ​​of this object.
**name**: The name of the item mentioned in the store, for example, AllUsers
**Content-type**: which can be **'data', 'loading'**, and other items.

You can read the [reselect](https://github.com/reduxjs/reselect 'reselect') documentation for more.

#### Introduction of services:

Services is an object that lists the requests that are to be made. And we get the **'get', 'post'** operation based on the endpoints we have using **Axios**.
From now on to request. It is enough to call the function of that request from this section.

#### Introducing effects:

effects is an object in which the side-effects of a request are executed by the **async, await** operation, and it specifies what actions are called in order during the request. And what data to transfer to the store. For this part we used **redux-thunk**. If you want, you can use the **redux-saga** and ... with changes.

> Remember that after completing the work, each section must be introduced in the 'index' file located in the store. So you can call them in the components.

**for example:**

    export {default as usersSelectors} from './users/selectors';
    export {default as usersEffects} from './users/effects';
    export {default as usersActions} from './users/actions';
    export {default as usersServices} from './users/services';
    export {default as usersTypes} from './users/types';

## USAGE:

#### How to dispatch action request and get data from the store in a component:

Here we are on the track **~/components/Screens/Users/index.js**
We created a component to display users that displays their list after requesting.
First, we import **usersEffects** and **usersSelectors** objects from the store on the component.

In the **didMount** component, we call a function related to the desired request.

     useEffect (() => {
        dispatch (usersEffects.getAllUsersRequest ());
      }, []);

All steps of extracting to store data in **the store** are handled by **effects**.

_For read the new data from the store_, just call the corresponding **selector**.

**for example:**

      const allUsersData = useSelector ((state) =>
        usersSelectors.getAllUsersData (state),
      );

Finally, after loading is **'false'**, you can display the list of users.
