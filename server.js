const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

// 1. Setup the connection to your MySQL database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Your_MySQL_Password', // Change this to your actual MySQL password
    database: 'sbic_bus_db'
});

// 2. Connect to the database
db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL: ' + err.stack);
        return;
    }
    console.log('Connected to SBIC Database as ID ' + db.threadId);
});

// 3. API Route to save a new booking
app.post('/api/save-booking', (req, res) => {
    const { name, phone, email, destination, km, seats, total } = req.body;
    
    const sql = "INSERT INTO bookings (passenger_name, phone_number, email, destination, distance_km, booked_seats, total_fare) VALUES (?, ?, ?, ?, ?, ?, ?)";
    
    db.query(sql, [name, phone, email, destination, km, seats, total], (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(200).send({ message: "Booking saved successfully!", id: result.insertId });
    });
});

// 4. Start the server on Port 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(SBIC Server is running on http://localhost:${PORT});
});
