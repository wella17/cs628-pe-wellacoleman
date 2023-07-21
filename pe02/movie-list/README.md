# MovieList App

The MovieList app is a simple React component that displays a list of movies and allows you to filter them by genre. It provides an interactive interface where users can select a genre from a dropdown and view the movies belonging to that genre.

## Input

The input of the MovieList app is an array of movie objects. Each movie object contains the following properties:
- `title`: The title of the movie (string).
- `genre`: The genre of the movie (string).
- `releaseYear`: The release year of the movie (number).

## Process

The MovieList app is built using React and utilizes the useState hook to manage the component's state. Here's how the process works:

1. The MovieList component is rendered, and the initial state is set up.
2. The array of movies is passed as input to the component.
3. The component sets up a state variable `selectedGenre` using the useState hook, which represents the currently selected genre from the dropdown.
4. The component defines a function `handleGenreChange` that is triggered when the user selects a genre from the dropdown. This function updates the `selectedGenre` state based on the user's selection.
5. The component defines a function `handleMovieClick` that is called when a movie is clicked. It displays an alert with the movie title.
6. The component renders the list of movies dynamically based on the selected genre. It filters the movie array to display only the movies that match the selected genre.
7. The component uses JSX to structure and display the movie list, including the movie title, genre, and release year.

## Output

The output of the MovieList app is a user interface that displays a list of movies. The output consists of the following elements:

1. A heading with the text "Movie List."
2. A dropdown menu labeled "Filter by Genre," allowing the user to select a genre to filter the movies.
3. A list of movies dynamically rendered based on the selected genre. Each movie item displays the movie title, genre, and release year.
4. When a movie is clicked, an alert is shown with the movie title.

The output is interactive and allows users to filter movies by genre and view movie details.

The MovieList app provides a simple and customizable way to display and filter a list of movies using React components and state management.
