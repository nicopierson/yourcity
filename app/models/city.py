from app.models import db
from sqlalchemy.sql import func


class City(db.Model):
    __tablename__ = 'cities'
    
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), nullable=False, unique=True)
    state = db.Column(db.String(50))
    thumbnail_img = db.Column(db.String(500))
    description = db.Column(db.String(1200))
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    created_at = db.Column(db.DateTime(timezone=True), nullable=False, 
                           server_default=func.now(), onupdate=func.now())
    updated_at = db.Column(db.DateTime(timezone=True), nullable=False, 
                           server_default=func.now(), onupdate=func.now())
    
    user_relation = db.relationship('User', back_populates='city_relation')
    insight_relation = db.relationship('Insight', back_populates='city_relation',
                                       cascade='all, delete-orphan')
    
    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'thumbnail_img': self.thumbnail_img,
            'description': self.description,
            'user_id': self.user_id,
            'created_at': self.created_at,
            'updated_at': self.updated_at,
        }