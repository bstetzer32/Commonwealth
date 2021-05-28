from flask import Blueprint, jsonify, session, request
from app.models import User, Project, db, Category
from app.forms import LoginForm
from app.forms import SignUpForm
from flask_login import current_user, login_user, logout_user, login_required
from flask import request
search_route = Blueprint('search', __name__)


@search_route.route('/', methods=["GET", "POST"])
def search():
    data = request.json
    state = data['state']
    city = data['city']
    inputs = data['inputs']
    category = Category.query.filter_by(name=data['category']).first()

    if (category):
        if (state):
            if (city):
                projects = Project.query.filter(
                    Project.title.ilike('%' + inputs + '%')).filter_by(
                        category_id=category.id, state=state,
                        city=city,
                ).limit(20)
                return {
                    'projects': [project.to_dict() for project in projects]
                }

            projects = Project.query.filter(
                Project.title.ilike('%' + inputs + '%')).filter_by(
                    category=category, state=state,
            ).limit(20)
            return {'projects': [project.to_dict() for project in projects]}

        projects = Project.query.filter(
            Project.title.ilike('%' + inputs + '%')).filter_by(
                category=category,
        ).limit(20)
        return {'projects': [project.to_dict() for project in projects]}

    elif (state):
        if(city):
            projects = Project.query.filter(
                Project.title.ilike('%' + inputs + '%')).filter_by(
                    state=state, city=city,
            ).limit(20)
            return {'projects': [project.to_dict() for project in projects]}

        projects = Project.query.filter(
            Project.title.ilike('%' + inputs + '%')).filter_by(
                state=state,
        ).limit(20)
        return {'projects': [project.to_dict() for project in projects]}

    elif (city):
        projects = Project.query.filter(
            Project.title.ilike('%' + inputs + '%')).filter_by(
                city=city,
        ).limit(20)
        return {'projects': [project.to_dict() for project in projects]}

    projects = Project.query.filter(
        Project.title.ilike('%' + inputs + '%')
    ).limit(20)
    return {'projects': [project.to_dict() for project in projects]}
