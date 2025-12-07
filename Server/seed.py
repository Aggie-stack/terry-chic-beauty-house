from app import app
from models import db, Service, Testimonial, Post

with app.app_context():
    # Create tables if they don't exist
    db.create_all()

    # Seed Services
    if Service.query.count() == 0:
        services = [
            Service(title="Women's Haircut", price="KSh 800", description="Consultation, cut and style."),
            Service(title="Men's Haircut", price="KSh 400", description="Precision cut and styling."),
            Service(title="Hair Color", price="KSh 2500+", description="Full color, highlights, or gloss."),
            Service(title="Blowout & Styling", price="KSh 700", description="Wash and blow-dry styling."),
            Service(title="Deep Treatment", price="KSh 1200", description="Moisture & repair treatment."),
        ]
        db.session.bulk_save_objects(services)

    # Seed Testimonials
    if Testimonial.query.count() == 0:
        testimonials = [
            Testimonial(name="Anna", text="Amazing service — my hair never looked better!"),
            Testimonial(name="Peter", text="Professional staff and relaxing atmosphere."),
        ]
        db.session.bulk_save_objects(testimonials)

    # Seed Posts
    if Post.query.count() == 0:
        posts = [
            Post(title="At-home hair care tips", excerpt="Keep color fresh longer with a few small tricks.", content="Full article content here..."),
            Post(title="What to expect in your first visit", excerpt="A friendly guide for first-time guests.", content="Full article content here..."),
        ]
        db.session.bulk_save_objects(posts)

    db.session.commit()
    print("✅ Seed complete")
