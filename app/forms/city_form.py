from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired


class CityPostForm(FlaskForm):
    name = StringField('name', validators=[DataRequired()])
    state = StringField('state')
    thumbnail_img = StringField('thumbnail_img')
    description = StringField('description')
    user_id = IntegerField('user_id', validators=[DataRequired()])
    
    
class CityUpdateForm(FlaskForm):
    id = IntegerField('id', validators=[DataRequired()])
    name = StringField('name', validators=[DataRequired()])
    state = StringField('state')
    thumbnail_img = StringField('thumbnail_img')
    description = StringField('description')
    user_id = IntegerField('user_id', validators=[DataRequired()])