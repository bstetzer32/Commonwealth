from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User


def user_exists(form, field):
    print("Checking if user exits", field.data)
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError("User is already registered.")


class SignUpForm(FlaskForm):
    username = StringField('username', validators=[DataRequired()])
    fullname = StringField('fullname', validators=[DataRequired()])
    email = StringField('email', validators=[DataRequired(), user_exists])
    address_1 = StringField('Street Address', validators=[DataRequired()])
    address_2 = StringField('Street Address Line 2')
    city = StringField(
        'City', validators=[DataRequired()])
    st = StringField('State', validators=[DataRequired()])

    zipcode = StringField('Zipcode', validators=[DataRequired()])
    password = StringField('password', validators=[DataRequired()])
