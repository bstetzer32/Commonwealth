from flask_wtf import FlaskForm
from wtforms import StringField, SelectField, TextAreaField, IntegerField
from wtforms.validators import DataRequired
from app.models import Project, City, State, db


# states = State.query.filter(State.name.desc()).all()
# states_list = list(zip(states, states))


class ProjectForm(FlaskForm):
    title = StringField('Title', validators=[DataRequired()])
    description = TextAreaField('Description', validators=[DataRequired()])
    goal = StringField('Goal', validators=[DataRequired()])
    image = StringField('Image URL')
    address_1 = StringField('Street Address', validators=[DataRequired()])
    address_2 = StringField('Street Address Line 2')
    city = StringField(
        'City', validators=[DataRequired()])
    st = StringField('State', validators=[DataRequired()])
    category = StringField('Category', validators=[DataRequired()])
    # category_id = IntegerField('Category', validators=[DataRequired()])
    zipcode = StringField('Zipcode', validators=[DataRequired()])
    user_id = StringField('User Id', validators=[DataRequired()])
