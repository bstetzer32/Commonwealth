# Commonwealth

A community initiative crowdfunding site, influenced by Kickstarter

Live Site: [commonwealth](https://github.com/bstetzer32/Commonwealth/wiki)

## Technologies Used:

    * Python
    * Flask
    * SQLAlchemy
    * HTML
    * CSS
    * Javascript
    * React
    * Redux
    * Postgres

## Features and Functionality:

    * User Authentication - Users are able to securely sign-up, log-in, or use demo to test functionality.

    * Projects - A user may create, edit, or delete a project they have created.

    * Donations - A user may make a donation to a specific project.

    * Categories - All projects can be sorted and searched by their tagged category.

    * Search - All project can be searched by title, city, state, and or category.

## Backend Query to search database conditionally by category, and/or city, and/or state, and/or title

        ```
            if (category):
        if (state):
            if (city):
                projects = Project.query.filter(
                    Project.title.ilike('%' + inputs + '%')).filter_by(
                        category_id=category.id, state=state,
                        city=city,
                ).all()
                return {
                    'projects': [project.to_dict() for project in projects]
                }

            projects = Project.query.filter(
                Project.title.ilike('%' + inputs + '%')).filter_by(
                    category=category, state=state,
            )
            return {'projects': [project.to_dict() for project in projects]}

        projects = Project.query.filter(
            Project.title.ilike('%' + inputs + '%')).filter_by(
                category=category,
        )
        return {'projects': [project.to_dict() for project in projects]}

    elif (state):
        if(city):
            projects = Project.query.filter(
                Project.title.ilike('%' + inputs + '%')).filter_by(
                    state=state, city=city,
            ).all()
            return {'projects': [project.to_dict() for project in projects]}

        ```

![demo-gif](https://i.gyazo.com/1e5130a31889654c65e3bfcdfd92b5f5.gif)

## Future Features:

    * Likes - A user may like a project adding another filterable query based on popularity.

    * Credit Card Payments - Add a validation of payment form and ability to run the info.

    * Account - A user may view their account info and add to a balance.

    * Contact Link - A user will be able to get in communication with a projects creator.

### Please see wiki pages for further documentation
