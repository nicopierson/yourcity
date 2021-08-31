from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, ValidationError, Length
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
    """Checking if city exists

    Args:
        form (FlaskForm): wtf flask form
        field (String): city name

    Raises:
        ValidationError: City provided not found
    """
    name = field.data
    city = City.query.filter(City.name == name).first()
    if not city:
        raise ValidationError('City name already exists.')
    

class CityPostForm(FlaskForm):
    name = StringField('name', validators=[DataRequired(), city_exists, Length(min=1, max=80)])
    state = StringField('state', validators=[Length(min=0, max=50)])
    thumbnail_img = StringField('thumbnail_img', validators=Length(min=0, max=800))
    description = StringField('description', validators=[Length(min=0, max=1200)])
    user_id = IntegerField('user_id', validators=[DataRequired()])
    
    
class CityUpdateForm(FlaskForm):
    id = IntegerField('id', validators=[DataRequired(), city_id_exists])
    name = StringField('name', validators=[DataRequired(), Length(min=1, max=80)])
    state = StringField('state', validators=[Length(min=0, max=50)])
    thumbnail_img = StringField('thumbnail_img', validators=[Length(min=0, max=800)])
    description = StringField('description', validators=[Length(min=0, max=1200)])
    user_id = IntegerField('user_id', validators=[DataRequired()])