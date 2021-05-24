from flask import Blueprint, jsonify
from app.models import db, Category

category_routes = Blueprint('categories', __name__)


@category_routes.route('/')
def all_categories():
    categories = Category.query.all()
    return {'categories': [category.to_dict() for category in categories]}


@category_routes.route('/<int:id>')
def one_category():
    category = Category.query.get(id)
    return category.to_dict()
