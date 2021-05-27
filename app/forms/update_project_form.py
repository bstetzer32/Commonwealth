from flask_wtf import FlaskForm
from wtforms import StringField, SelectField, TextAreaField, IntegerField
from wtforms.validators import DataRequired
from app.models import Project, City, State, db


# states = State.query.filter(State.name.desc()).all()
# states_list = list(zip(states, states))


class UpdateProjectForm(FlaskForm):
    id = StringField('Id', validators=[DataRequired()])
    title = StringField('Title', validators=[DataRequired()])
    tagline = TextAreaField('Tagline', validators=[DataRequired()])
    description = TextAreaField('Description', validators=[DataRequired()])
    goal = StringField('Goal', validators=[DataRequired()])
    image_url = StringField('Image URL')
    user_id = StringField('User Id', validators=[DataRequired()])
