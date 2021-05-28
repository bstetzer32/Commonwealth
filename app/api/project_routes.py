from flask import Blueprint, jsonify, request, session
from app.models import Project, db, State, City, Category, Donation
from app.forms import ProjectForm, UpdateProjectForm
from app.utils.validate import validate_location
from datetime import date
from dateutil.relativedelta import relativedelta

project_routes = Blueprint('project', __name__)


def validation_errors_to_error_messages(validation_errors):
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


def contributor_formatter(c_list):
    count = 0
    ids = []
    for i in range(len(c_list)):
        if(c_list[i]['user_id'] in ids):
            continue
        ids.append(c_list[i]['user_id'])
        count += 1
    return count


@project_routes.route('', methods=['POST'])
def create_project():
    form = ProjectForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    location = {
        'address_1': form.data['address_1'],
        'address_2': form.data['address_2'],
        'city': form.data['city'],
        'state': form.data['st'],
        'zipcode': form.data['zipcode']
    }
    validate_address = validate_location(location)
    if 'Error' in validate_address:
        return validate_address
    else:
        form.data['address_1'] = validate_address['Address1']
        form.data['address_2'] = validate_address['Address2']
        form.data['city'] = validate_address['City']
        form.data['zipcode'] = validate_address['Zip5']

    state = State.query.filter_by(name=form.data['st']).first()
    category = Category.query.filter_by(name=form.data['category']).first()
    city = City.query.filter_by(name=form.data['city']).first()

    if form.validate_on_submit():
        project = Project(
            title=form.data['title'],
            tagline=form.data['tagline'],
            image_url=form.data['image_url'],
            description=form.data['description'],
            goal=int(form.data['goal']),
            address_1=form.data['address_1'],
            address_2=form.data['address_2'],
            city=form.data['city'],
            state=form.data['st'],
            zipcode=int(form.data['zipcode']),
            state_id=int(state.id),
            city_id=city.id,
            category_id=int(category.id),
            user_id=int(form.data['user_id']),
            created_at=date.today(),
            expiration_date=date.today() + relativedelta(months=+6)
        )
        db.session.add(project)
        db.session.commit()
        return project.to_dict()

    return {'errors': validation_errors_to_error_messages(form.errors)}


@project_routes.route('/<int:id>')
def get_project(id):
    project = Project.query.get(id)
    return project.to_dict()


@project_routes.route('', methods=['PUT'])
def update_project():
    form = UpdateProjectForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    data = request.json
    project = Project.query.get(int(data['id']))
    if form.validate_on_submit() and project.user_id == int(data['user_id']):
        project.image_url = form.data['image_url']
        project.title = form.data['title']
        project.tagline = form.data['tagline']
        project.description = form.data['description']
        project.goal = int(form.data['goal'])
        db.session.add(project)
        db.session.commit()
    return project.to_dict()


@project_routes.route('/<int:id>', methods=["DELETE"])
def delete_project(id):
    project = Project.query.get(id)
    db.session.delete(project)
    db.session.commit()
    return {}


@project_routes.route('/<int:id>/donations')
def get_project_donations(id):
    contributors = Donation.query.filter_by(project_id=id).all()
    c_list = [
        contributor.to_super_simple_dict() for contributor in contributors]
    topContributors = Donation.query.filter_by(project_id=id).order_by(
        Donation.amount.desc()).limit(3)
    tc_list = [
        contributor.to_simple_dict() for contributor in topContributors
    ]
    return {'number': contributor_formatter(c_list),
            'topContributors': tc_list}
