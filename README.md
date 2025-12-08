# Terry Chic Beauty House 💇‍♀️✨
A full-stack beauty salon management system built with **React**, **Flask**, and **MySQL**.  
Manage bookings, services, staff, and salon operations efficiently with a sleek and responsive interface.

---

## 🚀 Features

### Client-Side (Frontend)
- Modern, responsive UI built with **React + HTML/CSS**
- Browse salon services
- Book appointments
- View available beauticians
- User authentication
- Mobile-friendly layout

### Server-Side (Backend – Flask)
- RESTful API with **Flask**
- Secure user login and registration
- Appointment booking API
- Service & staff management
- Error handling & JSON responses

### Database (MySQL)
- Stores users, services, bookings, and staff details
- Relational schema supporting CRUD operations

---

## 🛠️ Tech Stack
- **Frontend:** React, HTML5, CSS3, Axios, React Router  
- **Backend:** Python Flask, Flask-CORS, Flask-MySQL  
- **Database:** MySQL

---

## 📁 Project Structure

Salon/
├── client/ # React frontend
│ ├── public/
│ ├── src/
│ └── package.json
│
└── server/ # Flask backend
├── app.py
├── routes/
├── models/
├── config.py
└── requirements.txt

---

## ⚙️ Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/Aggie-stack/terry-chic-beauty-house.git
cd terry-chic-beauty-house
2. Frontend (React)
bash
cd client
npm install
npm run dev
Runs on: http://localhost:3000

3. Backend (Flask)
cd server
pipenv install && pipenv shell
export FLASK_APP=app.py
export FLASK_RUN_PORT=5555
python app.py
API runs on: http://localhost:5000

4. Database (MySQL)
sql
CREATE DATABASE salon_db;
Import your SQL schema if needed

Update credentials in config.py:

python
DB_HOST = "localhost"
DB_USER = "root"
DB_PASSWORD = "yourpassword"
DB_NAME = "salon_db"
🔗 API Endpoints (Examples)
Method	Endpoint	Description
GET	/services	Fetch all salon services
POST	/login	User login
POST	/register	Create new user
POST	/book	Book an appointment
GET	/staff	List beauticians

 License
MIT License

 Author
Agatha "Aggie-stack" Rukwaro
Full-stack developer passionate about building functional web applications.
