# CondoConvenienceApp
![image alt](https://github.com/Jarukit-Jack/CondoConvenienceApp/blob/15332a96d84a8bb4e1769c849b6591daf17acb08/Condo_convenience_Management_System_2.png)
## 🚀Description
CondoConvenienceApp is a management system developed for condominium facilities, aiming to streamline operations such as utility billing, booking amenities, maintenance requests, and parcel tracking. This project was developed as part of the Database System course (01204351-65) at Kasetsart University.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [File description](#folderandfiledescription)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Links](#links)

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

## Folder and File Descriptions 📁

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
1. Enter the app : [![](https://assets.appsmith.com/git-sync/Buttons.svg) ](https://app.appsmith.com/applications/67c45521e836f11c3fa21a66/pages/67c45521e836f11c3fa21a68)
2. User Login :User Roles
- Residents: Log in with your resident credentials to book amenities, report issues, and manage bills.
- Administrators: Log in with admin credentials to oversee all operations and manage user requests.
4. There are demonstration video provided on [links](#links)

## Credits
This project is developed by:

Naphatsanan Damaporn : Student ID 6610502102

Jarukit Phonwattananuwong : Student ID 6610505306

Bunyaporn Boonthap : Student ID 6610505454

## License⚠
This project is licensed under the MIT License - see the LICENSE file for details.

## Links🔗
Demo Clip: [Database_12_clip.mov](https://drive.google.com/file/d/1W6suv2Xci0BXEn5t-F0GbdY1VD3DBG6m/view?usp=drive_link)

Slides: [slides.pdf](https://drive.google.com/file/d/15USXTsj4WWtMqhDAQ5cRG975GW2RxqDX/view?usp=drive_link)

##### You can visit the application using the below 

###### [![](https://assets.appsmith.com/git-sync/Buttons.svg) ](https://app.appsmith.com/applications/67c45521e836f11c3fa21a66/pages/67c45521e836f11c3fa21a68) [![](https://assets.appsmith.com/git-sync/Buttons2.svg)](https://app.appsmith.com/applications/67c45521e836f11c3fa21a66/pages/67c45521e836f11c3fa21a68/edit)
