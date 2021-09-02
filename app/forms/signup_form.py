from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import InputRequired, Email, Length, ValidationError
from app.models import User


def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError('Email address is already in use.')


def username_exists(form, field):
    # Checking if username is already in use
    username = field.data
    user = User.query.filter(User.username == username).first()
    if user:
        raise ValidationError('Username is already in use.')


class SignUpForm(FlaskForm):
    username = StringField(
        'username', validators=[
                                    InputRequired(), 
                                    username_exists, 
                                    Length(min=3, max=40)
                                ])
    email = StringField('email', validators=[
                                                InputRequired(), 
                                                user_exists, 
                                                Email(), 
                                                Length(min=6, max=128)
                                            ])
    password = StringField('password', validators=[
                                                    InputRequired(), 
                                                    Length(min=6, max=128)
                                                  ])
