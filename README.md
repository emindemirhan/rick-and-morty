# Rick and Morty Characters List and Details Page

## [Website Live Link]()

## Project Features:

- **Characters List:** Presents a list of all characters, allowing users to easily navigate and select a specific character.
- **Character Detail View:** Displays detailed information about a selected Rick and Morty character.
- **Episode List:** Shows a list of the last episodes the selected character appeared in, along with their information.
- **Pagination:** Allows users to easily navigate through characters and episodes by dividing them into pages.
- **Sorting:** Offers the ability to sort characters by name, type, gender, and status.

## API Usage

#### Fetch all Characters

```http
  GET https://rickandmortyapi.com/api/character
```

| Path       | Query                     | type     | Purpose of usage   |
| :--------- | :------------------------ | :------- | :----------------- |
| /character |                           |          | Get All Characters |
| /character | `?name=rick&status=alive` | `string` | Filter Characters. |

#### Fetch item detail

```http
  GET https://rickandmortyapi.com/api/character/${id}
```

| Path       | Paramater | Query    | Purpose of usage              |
| :--------- | :-------- | :------- | :---------------------------- |
| /character | `id`      | `string` | Get Single Character Details. |

## Route Structure

The project consists of 2 pages. There is a `http://localhost:4200/character` characters list page in the main directory. There is character detail page for the each character details character/{id} `http://localhost:4200/character/1` directory.

## Project Setup

To run the project locally, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory using the command line.
3. Run `npm install` to install the project dependencies.
4. Run `npm start` to start the development server.
5. Open your browser and visit `http://localhost:4200/` to view the application.

### Clone The Project

1. Clone the repository to your local machine using the following command:

```bash
  https://github.com/emindemirhan/rick-and-morty.git
```
