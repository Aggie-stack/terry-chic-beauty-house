from flask_marshmallow import Marshmallow
from .models import Booking, Service, Testimonial, Post

ma = Marshmallow()

class BookingSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Booking
        load_instance = True

class ServiceSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Service
        load_instance = True

class TestimonialSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Testimonial
        load_instance = True

class PostSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Post
        load_instance = True
