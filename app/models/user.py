from .db import db
from sqlalchemy.sql import func
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(128), nullable=False, unique=True)
    hashed_password = db.Column(db.String(128), nullable=False)
    bio = db.Column(db.String(500))
    location = db.Column(db.String(100))
    site = db.Column(db.String(100))
    created_at = db.Column(db.DateTime(timezone=True), nullable=False, 
                           server_default=func.now(), onupdate=func.now())
    updated_at = db.Column(db.DateTime(timezone=True), nullable=False, 
                           server_default=func.now(), onupdate=func.now())

    city_relation = db.relationship('City', back_populates='user_relation')
    insight_relation = db.relationship('Insight', back_populates='user_relation',
                                       cascade='all, delete-orphan')

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'created_at': self.created_at,
            'num': self.number_insights(),
        }
        
    def number_insights(self):
        return len(self.insight_relation)
        
    def profile_to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'bio': self.bio,
            'location': self.location,
            'site': self.site,
            'insights_count': self.number_insights(),
            'created_at': self.created_at,
            'updated_at': self.updated_at,
        }
