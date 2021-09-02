from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.fields.core import IntegerField
from wtforms.validators import InputRequired, ValidationError, Email, Length
from app.models import User


def email_exists(form, field):
    # TODO check the functionality
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if 'id' in form.data:
        if user and user.id != form.data['id']:
            raise ValidationError('Email address is already in use.')
    else:
        if user:
            raise ValidationError('Email address is already in use.')


def profile_exists(form, field):
    # TODO check the functionality
    # Checking if profile is already in use
    username = field.data
    user = User.query.filter(User.username == username).first()
    if 'id' in form.data:
        if user and user.id != form.data['id']:
            raise ValidationError('Username is already in use.')
    else:
        if user:
            raise ValidationError('Username is already in use.')
    

class ProfileForm(FlaskForm):
    id = IntegerField('id', validators=[InputRequired()])
    username = StringField('username', validators=[
                                InputRequired(), 
                                profile_exists, 
                                Length(min=1, max=40)
                            ])
    email = StringField('email', validators=[
                                                InputRequired(), 
                                                email_exists, 
                                                Email(), 
                                                Length(min=1, max=255)
                                            ])
    password = StringField('password', validators=[
                                                    InputRequired(), 
                                                    Length(min=1, max=255)
                                                  ])