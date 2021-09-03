from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import InputRequired, ValidationError, Email, Length, URL, Optional
from app.models import User


def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if not user:
        raise ValidationError('Email provided not found.')


def password_matches(form, field):
    # Checking if password matches
    password = field.data
    email = form.data['email']
    user = User.query.filter(User.email == email).first()
    if not user:
        raise ValidationError('No such user exists.')
    if not user.check_password(password):
        raise ValidationError('Password was incorrect.')


class LoginForm(FlaskForm):
    email = StringField('email', 
        validators=[
            InputRequired(), 
            user_exists, 
            Email(), 
            Length(min=6, max=128)
        ])
    password = StringField('password', 
        validators=[
            InputRequired(), 
            password_matches, 
            Length(min=6, max=128)
        ])
    profile_img = StringField('profile_img', 
        validators=[
            Optional(),
            URL(),
            Length(min=1, max=500)
        ])
    bio = StringField('bio', 
        validators=[
            Optional(),
            Length(min=1, max=250),
        ])
    location = StringField('location', 
        validators=[
            Optional(),
            Length(min=1, max=50),
        ])
    site = StringField('site', 
        validators=[
            Optional(),
            Length(min=1, max=80),
        ])
