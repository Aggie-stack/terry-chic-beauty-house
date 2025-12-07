from flask import Flask, request, jsonify
from flask_cors import CORS
from models import db, Booking, Service, Testimonial, Post
from schemas import ma, BookingSchema, ServiceSchema, TestimonialSchema, PostSchema
import os
from flask_migrate import Migrate
import datetime
import requests
from requests_oauthlib import OAuth1
import urllib.parse

app = Flask(__name__)
CORS(app, supports_credentials=True)

# ---------------- DATABASE ----------------
basedir = os.path.abspath(os.path.dirname(__file__))
db_file = os.path.join(basedir, "salon.db")
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + db_file
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)
ma.init_app(app)
migrate = Migrate(app, db)

# ---------------- SCHEMAS ----------------
booking_schema = BookingSchema()
bookings_schema = BookingSchema(many=True)
service_schema = ServiceSchema(many=True)
testimonial_schema = TestimonialSchema(many=True)
post_schema = PostSchema(many=True)

# ---------------- PESAPAL CONFIG ----------------
PESAPAL_CONSUMER_KEY = os.environ.get("PESAPAL_CONSUMER_KEY", "0Lsux7h1QLSPMDqiNE/cALq+vDrkpm51")
PESAPAL_CONSUMER_SECRET = os.environ.get("PESAPAL_CONSUMER_SECRET", "t+MxgyNRh43nVjzwGRELq/rNM=")
PESAPAL_CALLBACK_URL = os.environ.get("PESAPAL_CALLBACK_URL", "http://localhost:5000/api/payment-callback")
PESAPAL_BASE_URL = "https://demo.pesapal.com/api/PostPesapalDirectOrderV4"

# ---------------- HOME ----------------
@app.route("/")
def home():
    return jsonify({"message": "Welcome to Terry's Salon API"})

@app.route("/api/health")
def health():
    return jsonify({"status": "ok"})

# ---------------- BOOKINGS ----------------
@app.route("/api/bookings", methods=["POST"])
def create_booking():
    try:
        json_data = request.get_json()
        if not json_data:
            return jsonify({"error": "No input data provided"}), 400

        name = json_data.get("name")
        email = json_data.get("email", "")
        phone = json_data.get("phone")
        service = json_data.get("service")
        booking_time = json_data.get("datetime")
        price = json_data.get("price")
        notes = json_data.get("notes", "")

        if not name or not phone or not service or not booking_time or not price:
            return jsonify({"error": "Please provide name, phone, service, date/time, and price"}), 400

        booking = Booking(
            name=name,
            email=email,
            phone=phone,
            service=service,
            booking_time=booking_time,
            price=price,
            notes=notes
        )

        db.session.add(booking)
        db.session.commit()

        # Create Pesapal payment URL
        payment_url = create_pesapal_payment(
            amount=price,
            first_name=name.split()[0],
            last_name=name.split()[-1] if len(name.split()) > 1 else "",
            email=email,
            phone_number=phone,
            reference=str(booking.id)
        )

        return jsonify({
            "booking": BookingSchema().dump(booking),
            "payment_url": payment_url
        }), 201

    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route("/api/bookings", methods=["GET"])
def list_bookings():
    all_b = Booking.query.order_by(Booking.id.desc()).all()
    return jsonify(bookings_schema.dump(all_b))

# ---------------- SERVICES ----------------
@app.route("/api/services", methods=["GET"])
def get_services():
    items = Service.query.all()
    return jsonify(service_schema.dump(items))

# ---------------- TESTIMONIALS ----------------
@app.route("/api/testimonials", methods=["GET", "POST", "OPTIONS"])
def testimonials():
    if request.method == "OPTIONS":
        return jsonify({"status": "ok"}), 200

    if request.method == "GET":
        items = Testimonial.query.order_by(Testimonial.id.desc()).all()
        return jsonify(testimonial_schema.dump(items))

    if request.method == "POST":
        data = request.get_json()
        if not data or "name" not in data or "text" not in data:
            return jsonify({"error": "Name and text are required"}), 400

        testimonial = Testimonial(
            name=data["name"],
            text=data["text"]
        )
        db.session.add(testimonial)
        db.session.commit()

        return TestimonialSchema().jsonify(testimonial), 201

# ---------------- POSTS ----------------
@app.route("/api/posts", methods=["GET"])
def get_posts():
    items = Post.query.order_by(Post.id.desc()).all()
    return jsonify(post_schema.dump(items))

@app.route("/api/posts/<int:post_id>", methods=["GET"])
def get_post(post_id):
    p = Post.query.get_or_404(post_id)
    return PostSchema().jsonify(p)

# ---------------- PESAPAL PAYMENT FUNCTION ----------------
def create_pesapal_payment(amount, first_name, last_name, email, phone_number, reference):
    try:
        utc_time = datetime.datetime.utcnow().strftime("%Y-%m-%dT%H:%M:%S")
        xml_payload = f"""
            <PesapalDirectOrderInfo 
                xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                xmlns:xsd="http://www.w3.org/2001/XMLSchema"
                Amount="{amount}"
                Description="Salon Booking Payment"
                Type="MERCHANT"
                Reference="{reference}"
                FirstName="{first_name}"
                LastName="{last_name}"
                Email="{email}"
                PhoneNumber="{phone_number}"
                Currency="KES"
                CallbackURL="{PESAPAL_CALLBACK_URL}" />
        """

        oauth = OAuth1(
            client_key=PESAPAL_CONSUMER_KEY,
            client_secret=PESAPAL_CONSUMER_SECRET,
            signature_type='query'
        )

        params = {'pesapal_request_data': xml_payload}
        response_url = PESAPAL_BASE_URL + '?' + urllib.parse.urlencode(params)
        r = requests.Request('GET', response_url, auth=oauth).prepare()
        return r.url
    except Exception as e:
        return f"Error generating Pesapal URL: {e}"

# ---------------- RUN ----------------
if __name__ == "__main__":
    with app.app_context():
        db.create_all()
    app.run(debug=True, port=5000)
