# Terry Chic Beauty House 💇‍♀️✨  
A full-stack beauty salon management system built with **React**, **Flask**, and **MySQL**.  
This project provides an intuitive interface for clients and admin users to manage bookings, services, staff, and salon operations efficiently.

## 🚀 Features

### ⭐ Client-Side (Frontend)
- Modern, responsive UI built with **React + HTML/CSS**
- Browse salon services  
- Book appointments  
- View available beauticians  
- User authentication & login  
- Mobile-friendly layout  

### ⭐ Server-Side (Backend – Flask)
- RESTful API built using **Flask**
- Secure user authentication (login/register)
- Appointment booking API
- Service & staff management
- Database queries and data validation
- Error handling & JSON responses

### ⭐ Database (MySQL)
- Stores users, services, bookings, and stylist details
- Well-structured relational schema
- Supports CRUD operations for all major features

---

## 🛠️ Tech Stack

### **Frontend**
- React.js  
- HTML5  
- CSS3  
- Axios (for API requests)  
- React Router  

### **Backend**
- Python Flask  
- Flask-CORS  
- Flask-MySQL  
- JWT Authentication (if used)

### **Database**
- MySQL

---

## 📁 Project Structure

<<<<<<< HEAD
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

yaml
Copy code

---

## ⚙️ Installation & Setup

### **1. Clone the Repository**

```bash
git clone https://github.com/Aggie-stack/terry-chic-beauty-house.git
cd terry-chic-beauty-house
🚀 Frontend Setup (React)
powershell
Copy code
cd client
npm install
npm start
The React app will run on:
👉 http://localhost:3000

🔥 Backend Setup (Flask)
Create a virtual environment:
bash
Copy code
cd server
python3 -m venv env
source env/bin/activate    # Mac/Linux
env\Scripts\activate       # Windows
Install dependencies:
nginx
Copy code
pip install -r requirements.txt
Run Flask server:
nginx
Copy code
python app.py
The API will run on:
👉 http://localhost:5000

🗄️ Database Setup (MySQL)
Create a database:

sql
Copy code
CREATE DATABASE salon_db;
Import your SQL schema file (if any).

Update database credentials inside config.py:

python
Copy code
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

🧪 Testing
Use Postman or Thunder Client to test API routes

Run frontend & backend concurrently for full functionality

📸 Screenshots (Optional)
Add screenshots of:

UI pages

API responses

Dashboard

📜 License
This project is licensed under the MIT License.

🙌 Author
Agatha "Aggie-stack" Rukwaro
Full-stack developer passionate about building sleek, functional web applications.

⭐ Support
If you find this project helpful, please star the repository 🌟

yaml
Copy code
# Want me to push this README to your GitHub automatically?
I can generate the exact commands for you — just say **“yes”**.






=======
>>>>>>> 5ebc4f614a1073a05e98edfbc284ffcc751f24e4
<<<<<<< HEAD
=======
>>>>>>> origin/main

