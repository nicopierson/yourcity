from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import InputRequired, ValidationError, Length, URL, Optional
from app.models import City


def city_id_exists(form, field):
    """Checking if city id exists

    Args:
        form (FlaskForm): wtf flask form
        field (Integer): id field

    Raises:
        ValidationError: City provided not found
    """
    id = field.data
    city = City.query.filter(City.id == id).first()
    if not city:
        raise ValidationError('City provided not found.')
    
    
def city_exists(form, field):
    """Checking if city exists for both post and put requests

    Args:
        form (FlaskForm): wtf flask form
        field (String): city name

    Raises:
        ValidationError: City provided not found
    """
    name = field.data
    city = City.query.filter(City.name == name).first()
    if 'id' in form.data:
        if city and city.id != form.data['id']:
            raise ValidationError('City name already exists.')
    else:
        if city:
            raise ValidationError('City name already exists.')
    

class CityPostForm(FlaskForm):
    name = StringField('name', 
        validators=[
            InputRequired(), 
            city_exists, 
            Length(min=1, max=80)
        ])
    state = StringField('state', 
        validators=[
            Optional(),
            Length(min=2, max=50)
        ])
    thumbnail_img = StringField('thumbnail_img', 
        validators=[
            Optional(), 
            URL(), 
            Length(min=8, max=800)
        ])
    description = StringField('description', 
        validators=[
            Optional(),
            Length(min=3, max=1200)
        ])
    user_id = IntegerField('user_id', 
        validators=[
            InputRequired()
        ])
    
    
class CityUpdateForm(FlaskForm):
    id = IntegerField('id', 
        validators=[
            InputRequired(), 
            city_id_exists
        ])
    name = StringField('name', 
        validators=[
            InputRequired(), 
            city_exists, 
            Length(min=1, max=80)
        ])
    state = StringField('state', 
        validators=[
            Optional(),
            Length(min=2, max=50)
        ])
    thumbnail_img = StringField('thumbnail_img', 
        validators=[
            Optional(), 
            URL(), 
            Length(min=8, max=800)
        ])
    description = StringField('description', 
        validators=[
            Optional(),
            Length(min=3, max=1200)
        ])
    user_id = IntegerField('user_id', 
        validators=[
            InputRequired()
        ])