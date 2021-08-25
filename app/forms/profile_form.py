from flask_wtf import FlaskForm
from wtforms import StringField


class ProfileForm(FlaskForm):
    username = StringField('username')
    email = StringField('email')
    password = StringField('password')