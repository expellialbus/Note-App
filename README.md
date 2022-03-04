# Take A Note

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to run the app?

In the project direct, to install depencencies, you can run the following command:

### `npm install`

Since the app uses a **json-server**, before starting the app you should first run the **json-server** via following command in the project directory:

### `npx json-server --watch data/db.json --port 8000`

You can change both the _port_ and _endpoint url_ inside the [config.js](https://github.com/recep-yildirim/Note-App/blob/master/src/config.js) to make the app compatible with your own database.

After run the json-server, to execute the app, you can run the following command in the project directory:

### `npm start`

The command runs the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

You will also see any lint errors in the console.

## What does the app do?

As its name suggests, this is a note keeping app. It basically allows you to add, delete, update and view notes. It has a responsive design, namely, you can use it in which device you desire. For any issue you have run into, please do not be shame an open up and issue or you can make a pull request as you wish.

<details>
    <summary><a href="https://github.com/recep-yildirim/Note-App/tree/master/screenshots">App's user interfaces</a></summary>
    <ul>
      <details>
        <summary>Notes Page</summary>
        <img alt="Notes Page" src="https://github.com/recep-yildirim/Note-App/blob/master/screenshots/notes.png">
      </details>
      <details>
        <summary>Create Note Page</summary>
        <img alt="Create Note Page" src="https://github.com/recep-yildirim/Note-App/blob/master/screenshots/create.png">
      </details>  
      <details>
        <summary>Edit Note Card</summary>
        <img alt="Edit Note Card" src="https://github.com/recep-yildirim/Note-App/blob/master/screenshots/edit.png">
      </details>       
    <ul>
</details>

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
