# Innova Client

## Links
[Live site link](https://innova-yamin39.web.app/)

[Server side repo link](https://github.com/Yamin39/innova-server)

## Overview

- **Project Concept**: Innova is a hotel booking platform allowing users to register, log in, and book rooms. Users can also leave reviews and manage their bookings.
- **Problem Solved**: This project simplifies the process of booking hotel rooms and managing reservations, ensuring a seamless experience for travelers.
- **Technologies Used**: HTML, CSS, JavaScript, ReactJS, Firebase, Tailwind CSS, Daisy UI.
- **Best Features**:
  - User authentication with Email-Password and Google login options.
  - Users can browse and book various types of rooms.
  - Users can leave reviews, which are showcased on the home page.

## Setup Process

To run the project locally, follow these steps:

1. **Clone the repository**:
```bash
git clone https://github.com/Yamin39/innova-client.git
```

2. **Navigate to the project directory**:
```bash
cd innova-client
```

3. **Install dependencies**:
```bash
npm install
```

4. **Set up Firebase credentials**: Create a .env.local file and add your Firebase credentials
```javascript
VITE_APIKEY=yourAPIKEY
VITE_AUTHDOMAIN=yourAUTHDOMAIN
VITE_PROJECTID=yourPROJECTID
VITE_STORAGEBUCKET=yourSTORAGEBUCKET
VITE_MESSAGINGSENDERID=yourMESSAGINGSENDERID
VITE_APPID=yourAPPID
```

5. **Run the project**:
```bash
npm run dev
```
