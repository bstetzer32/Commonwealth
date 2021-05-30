from flask import Blueprint, jsonify, request
from app.models import db, Project, City

feed_routes = Blueprint('feed', __name__)


@feed_routes.route('/', methods=['POST'])
def feed():
    data = request.json
    type = data['type']
    id = int(data['id'])
    if type == 'home':
        projects = Project.query.order_by(
            Project.amount_raised.desc()
            ).limit(10)
        projects_new = Project.query.order_by(
            Project.created_at.desc()
        ).limit(20)
        projects_old = Project.query.order_by(
            Project.created_at.asc()
        ).limit(20)
    elif type == 'category':
        projects = Project.query.filter(Project.category_id == id).order_by(
            Project.amount_raised.desc()
        ).limit(10)
        projects_new = Project.query.filter(Project.category_id == id).order_by(
            Project.created_at.desc()
        ).limit(20)
        projects_old = Project.query.filter(Project.category_id == id).order_by(
            Project.created_at.asc()
        ).limit(20)
    elif type == 'region':
        projects = Project.query.filter(Project.city_id == id).order_by(
            Project.amount_raised.desc()
        ).limit(10)
        projects_new = Project.query.filter(Project.city_id == id).order_by(
            Project.created_at.desc()
        ).limit(20)
        projects_old = Project.query.filter(Project.city_id == id).order_by(
            Project.created_at.asc()
        ).limit(20)
    projects = [project.to_dict() for project in projects]
    projects_new = [project.to_dict() for project in projects_new]
    projects_old = [project.to_dict() for project in projects_old]

    def featured(project):
        return project['amount_raised']

    if (len(projects) > 1):
        featured_project = sorted(projects, key=featured)[0]
        featured_project = {
            "id": featured_project['id'],
            "state_id": featured_project['state_id'],
            "city_id": featured_project['city_id'],
            "title": featured_project['title'],
            "image_url": featured_project['image_url'],
            "tagline": featured_project['tagline'],
            "goal": featured_project['goal'],
            "amount_raised": featured_project['amount_raised'],
            "status": featured_project['status'],
            "user": featured_project['user']['fullname'],
        }
    elif (len(projects) == 1):
        featured_project = projects[0]
        featured_project = {
            "id": featured_project['id'],
            "state_id": featured_project['state_id'],
            "city_id": featured_project['city_id'],
            "title": featured_project['title'],
            "image_url": featured_project['image_url'],
            "tagline": featured_project['tagline'],
            "goal": featured_project['goal'],
            "amount_raised": featured_project['amount_raised'],
            "status": featured_project['status'],
            "user": featured_project['user']['fullname'],
        }
    else:
        featured_project = None
    if (len(projects) > 1):
        recommended_projects = sorted(projects, key=featured)[1:10]
        recommended_projects = [{
            "id": project['id'],
            "state_id": project['state_id'],
            "city_id": project['city_id'],
            "title": project['title'],
            "image_url": project['image_url'],
            "tagline": project['tagline'],
            "goal": project['goal'],
            "amount_raised": project['amount_raised'],
            "status": project['status'],
            "user": project['user']['fullname'],
        } for project in recommended_projects]
    else:
        recommended_projects = []
    new_projects = [{
        "id": project['id'],
        "state_id": project['state_id'],
        "city_id": project['city_id'],
        "title": project['title'],
        "image_url": project['image_url'],
        "tagline": project['tagline'],
        "goal": project['goal'],
        "amount_raised": project['amount_raised'],
        "status": project['status'],
        "user": project['user']['fullname'],
    } for project in projects_new]
    old_projects = [{
        "id": project['id'],
        "state_id": project['state_id'],
        "city_id": project['city_id'],
        "title": project['title'],
        "image_url": project['image_url'],
        "tagline": project['tagline'],
        "goal": project['goal'],
        "amount_raised": project['amount_raised'],
        "status": project['status'],
        "user": project['user']['fullname'],
    } for project in projects_old]
    return jsonify({'featured_project': featured_project, 'recommended_projects': recommended_projects, 'new_projects': new_projects, 'old_projects': old_projects})
