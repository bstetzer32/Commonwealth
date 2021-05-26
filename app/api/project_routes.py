from flask import Blueprint, jsonify
from app.models import Project, db
from app.forms import ProjectForm
from app.utils.validate import validate_location

project_routes = Blueprint('project', __name__)


def validation_errors_to_error_messages(validation_errors):
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


@project_routes.route('/', methods=['POST'])
def create_project():
    form = ProjectForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    location = {'address_1': form.data['address_1'],
                'address_2': form.data['address_2'],
                'city': form.data['city'],
                'state': form.data['state'],
                'zipcode': form.data['zipcode']
                }
    validate_address = validate_location(location)
    if 'Error' in validate_address:
        return validate_address
    else:
        form.data['address_1'] = validate_address['address_1']
        form.data['address_2'] = validate_address['address_2']
        form.data['city'] = validate_address['city']
        form.data['state'] = validate_address['state']
        form.data['zipcode'] = validate_address['zipcode']

    if form.validate_on_submit():
        project = Project(
            title=form.data['title'],
            description=form.data['description'],
            address_1=form.data['address_1'],
            address_2=form.data['address_2'],
            city=form.data['city'],
            state=form.data['state'],
            zipcode=form.data['zipcode']
        )
        db.session.add(project)
        db.session.commit()
        return project.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}


@project_routes.route('/<int:id>')
def get_project(id):
    project = Project.query.get(id)
    return project.to_dict()
