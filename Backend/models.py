"""Models for pixly app"""

from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Image(db.Model):
    """Image table"""

    __tablename__ = "images"

    id = db.Column( 
        db.Integer,
        primary_key=True,
        autoincrement=True)

    title = db.Column( 
        db.Text,
        nullable=False)

    filename = db.Column( 
        db.Text,
        nullable=False)

    path = db.Column( 
        db.Text,
        nullable=False)

####### These below come from exif data

    Make = db.Column(
        db.Text
    )

    Model = db.Column(
        db.Text
    )

    Software = db.Column(
        db.Text
    )

    DateTime = db.Column(
        db.DateTime
    )


    def serialize(self):
        return {
            'id': self.id,
            'name': self.title,
            'filename': self.filename,
            'path': self.path,
            'Make': self.Make,
            'Model': self.Model,
            'Software': self.Software,
            'DateTime': self.DateTime,
        }
        
 
def connect_db(app):
    """Connect to database."""

    db.app = app
    db.init_app(app)