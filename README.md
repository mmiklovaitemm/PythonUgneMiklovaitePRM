# Pagėgiai – A Small but Cozy Town

A simple Django web project that presents interesting places in Pagėgiai, Lithuania. The goal is to showcase town history, local landmarks, and beautiful visuals through a clean and interactive website.

## Features

- Admin panel to manage places and upload multiple images.
- Each place has:
  - Title
  - Description
  - Multiple photos
  - Google Maps link
- Image gallery per location.
- "Show on map" button linking to the location.
- Random fun fact generator (JavaScript).
- Responsive design with custom CSS styling.

## Built With

- Python 3 & Django 5
- HTML5, CSS3
- JavaScript (for the random fact button)
- SQLite3 (default Django database)

## Setup Instructions

1. Clone the repository:

```bash
git clone <your-repo-url>
cd project-folder
```

2. Create and activate a virtual environment:

```bash
   python -m venv env
   env\Scripts\activate # On Windows
```

3. Install Django:

```bash
   pip install django
```

4. Run migrations:

```bash
   python manage.py makemigrations
   python manage.py migrate
```

5. Create a superuser:

```bash
   python manage.py createsuperuser
```

6. Start the development server:

```bash
   python manage.py runserver
```

7. Visit the site:

- Admin panel: http://127.0.0.1:8000/admin
- Homepage: http://127.0.0.1:8000/
