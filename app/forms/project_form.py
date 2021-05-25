from flask_wtf import FlaskForm
from wtforms import StringField, SelectField, TextAreaField, IntegerField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import Project, City, State, db


# states = State.query.filter(State.name.desc()).all()
# states_list = list(zip(states, states))


class ProjectForm(FlaskForm):
    title = StringField('Title', validators=[DataRequired()])
    description = TextAreaField('Description', validators=[DataRequired()])
    goal = IntegerField('Goal', validators=[DataRequired()])
    image = StringField('Image URL')
    address_1 = StringField('Street Address', validators=[DataRequired()])
    address_2 = StringField('Street Address Line 2')
    city = SelectField(
        'City', validators=[DataRequired()])
    state = SelectField('State', validators=[DataRequired()])
    zipcode = IntegerField('Zipcode', validators=[DataRequired()])
