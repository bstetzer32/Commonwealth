from flask import Blueprint, jsonify
from app.models import db, State

state_routes = Blueprint('states', __name__)


@state_routes.route('')
def all_states():
    states = State.query.all()
    state_info = [state.to_dict() for state in states]
    list = [{'id': info['id'], 'name':info['name']} for info in state_info]
    return jsonify(list)


@state_routes.route('/:id')
def one_state():
    state = State.query.get(id)
    return state.to_dict()
