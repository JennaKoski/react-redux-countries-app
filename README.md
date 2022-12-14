# Countries App

Contries app is made with React and uses Redux toolkit and React Bootstrap. The app shows basic information about countries and you can add them to your favorites by clicking the emoji with heart-eyes.

## APIs

Countries app uses https://restcountries.com/ to show information like languages, population etc. about countries. By clicking "Read more" you will find more info, including current weather of the capital. The weather information comes from https://openweathermap.org/.

## Running the project

To get the weather information from the API, you need to get your own API key from https://openweathermap.org/.

You can fork or clone the project from GitHub.

After that, run command:

### `npm install`

Create .env.local file to project root folder and add following line with your own OpenWeatherMap API key:

### `REACT_APP_WEATHER_API = "YOUR_OWN_WEATHER_API_KEY_HERE"`

Run command:

### `npm start`

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
