from flask import Blueprint, jsonify, request
from app.models import db, Project, City

feed_routes = Blueprint('feed', __name__)

@feed_routes.route('/', methods=['POST'])
def feed():
    data = request.json
    print(request.json)
    type = data['type']
    id = int(data['id'])
    if type == 'home':
        projects = Project.query.all()
    elif type == 'category':
        projects = Project.query.filter(Project.category_id == id)
    elif type == 'region':
        projects = Project.query.filter(Project.state_id == id)
    projects = [project.to_dict() for project in projects]
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
            "description": featured_project['description'],
            "goal": featured_project['goal'],
            "amount_raised": featured_project['amount_raised'],
            "status": featured_project['status'],
            "user": featured_project['user']['fullname'],
        }
    elif (len(projects) == 1):
        featured_project = projects
    else:
        featured_project = {}
    if (len(projects) > 1):
        recommended_projects = sorted(projects, key=featured)[1:9]
        recommended_projects = [{
            "id": project['id'],
            "state_id": project['state_id'],
            "city_id": project['city_id'],
            "title": project['title'],
            "image_url": project['image_url'],
            "description": project['description'],
            "goal": project['goal'],
            "amount_raised": project['amount_raised'],
            "status": project['status'],
            "user": project['user']['fullname'],
        } for project in recommended_projects]
    else:
        recommended_projects = []

    def newest(project):
        return project['id']
    new_projects = sorted(projects, key=newest, reverse=True)
    new_projects = [{
        "id": project['id'],
        "state_id": project['state_id'],
        "city_id": project['city_id'],
        "title": project['title'],
        "image_url": project['image_url'],
        "description": project['description'],
        "goal": project['goal'],
        "amount_raised": project['amount_raised'],
        "status": project['status'],
        "user": project['user']['fullname'],
    } for project in new_projects]
    old_projects = sorted(projects, key=newest, reverse=False)
    old_projects = [{
        "id": project['id'],
        "state_id": project['state_id'],
        "city_id": project['city_id'],
        "title": project['title'],
        "image_url": project['image_url'],
        "description": project['description'],
        "goal": project['goal'],
        "amount_raised": project['amount_raised'],
        "status": project['status'],
        "user": project['user']['fullname'],
    } for project in old_projects]
    return jsonify({'featured_project':featured_project, 'recommended_projects':recommended_projects, 'new_projects':new_projects, 'old_projects':old_projects})
