from flask import Blueprint, jsonify, session, request
from app.models import User, Project, db
from app.forms import LoginForm
from app.forms import SignUpForm
from flask_login import current_user, login_user, logout_user, login_required

search_route = Blueprint('search', __name__)

@search_route.route('/', methods=["GET", "POST"])
def search(category, state, city, input):
    if (category):
        if (state):
            if (city):
                projects = Project.query.filter(
                    Project.title.ilike('%' + input + '%')).filter_by(
                        category=category, state=state,
                        city=city,
                )
                return {
                    'projects': [project.to_dict() for project in projects]
                }

            projects = Project.query.filter(
                Project.title.ilike('%' + input + '%')).filter_by(
                    category=category, state=state,
            )
            return {'projects': [project.to_dict() for project in projects]}

        projects = Project.query.filter(
            Project.title.ilike('%' + input + '%')).filter_by(
                category=category,
        )
        return {'projects': [project.to_dict() for project in projects]}

    elif (state):
        if(city):
            projects = Project.query.filter(
                Project.title.ilike('%' + input + '%')).filter_by(
                    state=state, city=city,
            )
            return {'projects': [project.to_dict() for project in projects]}

        projects = Project.query.filter(
            Project.title.ilike('%' + input + '%')).filter_by(
                state=state,
        )
        return {'projects': [project.to_dict() for project in projects]}

    elif (city):
        projects = Project.query.filter(
            Project.title.ilike('%' + input + '%')).filter_by(
                city=city,
        )
        return {'projects': [project.to_dict() for project in projects]}

    projects = Project.query.filter(
        Project.title.ilike('%' + input + '%')
    )
    return {'projects': [project.to_dict() for project in projects]}
