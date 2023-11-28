# CampusMarket 

## Overview

The CampusMarket project is a collaborative project by Sambridhi Deo and Manisha Basnet, developed as part of our sophomore seminar project. This web application is designed to provide a platform for buying and selling items within the campus community. The project utilizes Django, HTML, Tailwind CSS, and SQLite3 database.
<div style="display: flex; justify-content: space-between;">
    <img src="media/tools/django.png" alt="Django" width="100" height="50" style="margin-right: 10px;">
    <img src="media/tools/html.png" alt="HTML" width="100" height="50" style="margin-right: 10px;">
    <img src="media/tools/css.png" alt="Tailwind CSS" width="100" height="50" style="margin-right: 10px;">
    <img src="media/tools/sqlite.jpg" alt="SQLite" width="100" height="50">
</div>



## Project Structure

The project is organized into the following directories:

- **conversation**: Contains the code related to user conversations.
- **core**: Core functionalities and settings for the project.
- **dashboard**: Handles the main dashboard of the user.
- **item**: Manages items and their details.
- **media**: Stores media files such as images.
- **puddle**: A directory for all components.
- **static**: Static files like CSS.

## How to Run the Project

To run the CampusMarket project locally, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/campusmarket.git
    ```

2. Navigate to the project directory:

    ```bash
    cd campusmarket
    ```

3. Install the required dependencies:

    ```bash
    pip install -r requirements.txt
    ```

4. Apply migrations:

    ```bash
    python manage.py migrate
    ```

5. Run the development server:

    ```bash
    python manage.py runserver
    ```

6. Open your browser and go to [http://localhost:8000/](http://localhost:8000/) to view the CampusMarket application.



## Contributors

| Sambridhi Deo                      | Manisha Basnet                    |
| ----------------------------------- | --------------------------------- |
| <img src="media/sam.jpeg" width="150">   | <img src="media/manisha.jpg" width="150"> |
