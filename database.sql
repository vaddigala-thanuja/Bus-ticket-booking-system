-- Create the Database for SBIC
CREATE DATABASE IF NOT EXISTS sbic_bus_db;
USE sbic_bus_db;

-- 1. Table to store customer bookings
CREATE TABLE IF NOT EXISTS bookings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    passenger_name VARCHAR(100) NOT NULL,
    phone_number VARCHAR(15) NOT NULL,
    email VARCHAR(100),
    destination VARCHAR(50),
    distance_km INT,
    booked_seats VARCHAR(50), -- Example: "1, 2, 5"
    total_fare INT,
    booking_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. Table for Admin and Driver Information
CREATE TABLE IF NOT EXISTS admin_data (
    admin_id INT PRIMARY KEY,
    admin_password VARCHAR(20) DEFAULT '123ABCDZ',
    driver_name VARCHAR(50) DEFAULT 'Rajesh Kumar',
    driver_contact VARCHAR(15) DEFAULT '9876543210',
    bus_number VARCHAR(20) DEFAULT 'MH-01-SB-2026'
);

-- Insert default admin information
INSERT INTO admin_data (admin_id) VALUES (1) 
ON DUPLICATE KEY UPDATE admin_id=admin_id;
