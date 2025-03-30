# CondoConvenienceApp
![image alt](https://github.com/Jarukit-Jack/CondoConvenienceApp/blob/408a10b14cb441ef3cde2dadbe2791a749bb8ffd/Screenshot%202025-03-30%20221427.png)
##### You can visit the application using the below 

###### [![](https://assets.appsmith.com/git-sync/Buttons.svg) ](https://app.appsmith.com/applications/67c45521e836f11c3fa21a66/pages/67c45521e836f11c3fa21a68) [![](https://assets.appsmith.com/git-sync/Buttons2.svg)](https://app.appsmith.com/applications/67c45521e836f11c3fa21a66/pages/67c45521e836f11c3fa21a68/edit)

## 🚀Description
CondoConvenienceApp is a management system developed for condominium facilities, aiming to streamline operations such as utility billing, booking amenities, maintenance requests, and parcel tracking. This project was developed as part of the Database System course (01204351) at Kasetsart University. 

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Folder and File Descriptions](#folder-and-file-descriptions)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Links](#links)
- [Tools](#tools)

## Introduction
The CondoConvenienceApp serves as a centralized platform for condominium management, providing both residents and administrators with efficient tools to handle daily tasks. The system supports two user roles:

1. **Residents (User):** Can book amenities, report maintenance issues, view utility bills, and receive parcels.
2. **Administrators (Admin):** Manage bookings, handle maintenance requests, update billing information, and oversee parcel deliveries.

## Features
- **Amenity Booking:** Schedule reservations for facilities like the pool and fitness center.
- **Maintenance Requests:** Report and track the status of maintenance issues within the condominium.
- **Utility Billing:** View and pay utility bills, including electricity, water, and rent.
- **Parcel Tracking:** Receive notifications and manage parcel deliveries.
- **User Management:** Differentiate access levels between residents and administrators.

## Folder and File Descriptions📂 

### Pages Directory

The `pages` directory contains subdirectories, each representing a specific page of the application. Each subdirectory includes queries, widgets, and a JSON file. Notably, subdirectories ending with `_Admin` denote admin pages.

1. **Login**: Handles the login functionality.
2. **Home**: Represents the homepage of the application.
3. **Bill**: Manages payment processes.
4. **Fitbook**: Pertains to fitness booking.
   - `Fitbook1`: Contains the fitness booking agreement.
   - `Fitbook2`: Implements the fitness booking system.
5. **Poolbook**: Pertains to pool booking.
   - `PoolBook1`: Contains the pool booking agreement.
   - `PoolBook2`: Implements the pool booking system.
6. **Repair**: Manages repair reporting.
7. **ContactAdmin**: Provides administrator information.
8. **Parcel**: Handles parcel-related functionalities.
9. **Statistic**: Records statistics for electricity, water, and parcels.

### SampleData Directory

The `SampleData` directory includes sample JSON data files for MongoDB Atlas, organized into collections:

- **`GroupAPP.admin.json`**: Contains admin data.
- **`GroupAPP.condo.json`**: Includes owner and tenant room data.
- **`GroupAPP.gymbooking.json`**: Stores gym booking data.
- **`GroupAPP.parcel_report.json`**: Contains parcel data.
- **`GroupAPP.payment.json`**: Includes bill and payment data.
- **`GroupAPP.poolbooking.json`**: Stores pool booking data.
- **`GroupAPP.repair.json`**: Contains repair data.


## Usage
1. Login to Appsmith first
2. Enter the app : [![](https://assets.appsmith.com/git-sync/Buttons.svg) ](https://app.appsmith.com/applications/67c45521e836f11c3fa21a66/pages/67c45521e836f11c3fa21a68)
3. User Login :User Roles
- Residents: Log in with your resident credentials to book amenities, report issues, and manage bills.
- Administrators: Log in with admin credentials to oversee all operations and manage user requests.
3. There are demonstration video provided on [links](#links)

## Credits
This project is developed by:

1️⃣Napatsanan Damaporn : Student ID 6610502102

2️⃣Jarukit Phonwattananuwong : Student ID 6610505306

3️⃣Boonyapon Boontub : Student ID 6610505454

## License⚠
This project is licensed under the MIT License - see the LICENSE file for details.

## Links🔗
Demo Clip: [Database_12_clip.mov](https://drive.google.com/file/d/1W6suv2Xci0BXEn5t-F0GbdY1VD3DBG6m/view?usp=drive_link)

Slides: [slides.pdf](https://drive.google.com/file/d/15USXTsj4WWtMqhDAQ5cRG975GW2RxqDX/view?usp=drive_link)

## Tools
- **MongoDB Atlas**: A fully-managed cloud database service for deploying, managing, and scaling MongoDB clusters. It serves as the backend database for storing application data securely and efficiently.
- **Appsmith**: An open-source platform for building internal tools rapidly. Appsmith is utilized to create the application's user interface, enabling easy integration with MongoDB Atlas and other data sources.

##### You can visit the application using the below 

###### [![](https://assets.appsmith.com/git-sync/Buttons.svg) ](https://app.appsmith.com/applications/67c45521e836f11c3fa21a66/pages/67c45521e836f11c3fa21a68) [![](https://assets.appsmith.com/git-sync/Buttons2.svg)](https://app.appsmith.com/applications/67c45521e836f11c3fa21a66/pages/67c45521e836f11c3fa21a68/edit)
