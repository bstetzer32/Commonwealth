from flask import Blueprint, jsonify, session, request
from app.models import User, Project, db
from app.forms import LoginForm
from app.forms import SignUpForm
from flask_login import current_user, login_user, logout_user, login_required
from flask import request
search_route = Blueprint('search', __name__)


@search_route.route('/', methods=["GET", "POST"])
def search():
    data = request.json
    print("------------------", data)
    category = data['category']
    print("--------------------", category)
    state = data['state']
    city = data['city']
    inputs = data['inputs']

    if (category):
        if (state):
            if (city):
                projects = Project.query.filter(
                    Project.title.ilike('%' + inputs + '%')).filter_by(
                        category=category, state=state,
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

        projects = Project.query.filter(
            Project.title.ilike('%' + inputs + '%')).filter_by(
                state=state,
        ).all()
        return {'projects': [project.to_dict() for project in projects]}

    elif (city):
        projects = Project.query.filter(
            Project.title.ilike('%' + inputs + '%')).filter_by(
                city=city,
        ).all()
        return {'projects': [project.to_dict() for project in projects]}

    projects = Project.query.filter(
        Project.title.ilike('%' + inputs + '%')
    ).all()
    # return {"Finished": projects}
    print("------------------", [project.to_dict() for project in projects])
    return {'projects': [project.to_dict() for project in projects]}
