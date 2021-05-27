from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired
from app.models import Donation, db


class DonationForm(FlaskForm):
    amount = StringField('Amount', validators=[DataRequired()])
    user_id = StringField('User ID', validators=[DataRequired()])
    project_id = StringField('Project ID', validators=[DataRequired()])
