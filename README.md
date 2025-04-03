# Currency Exchange Backend

This project is the backend of a currency exchange application. It allows users to record transactions, manage business balances, and store data in Google Sheets spreadsheet.

## Table of Content

1. [Installation](#instalation)
2. [Usage](#usage)
3. [Features](#features)
4. [Built with](#built-with)
5. [Contact](#contact)

## Instalation 
**Requeriments**
- Node
- PostgreSQL
- Google Sheets API enabled

**Steps**
1. Clone the repository:
   
```bash
git clone https://github.com/MaximoFC/currency-exchange-backend.git
```

2. Navigate to the project directory:

```bash
cd currency-exchange-backend
```

3. Install dependencies:

```bash
npm install
```

4. Create a ``.env`` file and set the following variables:

```
DATABASE_URL:your_postgresql_url
GOOGLE_SHEETS_ID:your_google_sheets_id
PORT=4000
```

5. Start the server:

```
npm run dev
```

## Usage
The backend exposes an API with the following endpoints:
**Clients**
- **GET /clients** → Retrieves all clients
- **POST /clients** → Adds a new client

**Transactions**
- **GET /transactions** → Records a currency exchange transaction
- **POST /transactions** → Retrieves the transaction history

## Features
- Client management
- Currency exchange transactions
- Automatic business balance updates
- Transaction storage in Google Sheets

## Built with
- Node.js
- Express.js
- PostgreSQL
- Google Sheets API
- Axios

## Contact
👨🏻‍💻 **Máximo Callejas**
- **Email:** maximofcallejas@gmail.com
- **GitHub:** [https://github.com/MaximoFC](https://github.com/MaximoFC)
