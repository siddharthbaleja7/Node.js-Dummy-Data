## API Documentation

### Base URL
`http://localhost:3000/api`

### Endpoints

#### Get All Data
- **Method**: GET
- **URL**: `/data`
- **Description**: Fetches all the dummy data.

#### Filter Data
- **Method**: GET
- **URL**: `/data/filter?key=KEY&value=VALUE`
- **Description**: Fetches data filtered by the specified key and value.
- **Example**: `/data/filter?key=name&value=John`

#### Sort Data
- **Method**: GET
- **URL**: `/data/sort?key=KEY&order=asc|desc`
- **Description**: Fetches data sorted by the specified key in ascending or descending order.
- **Example**: `/data/sort?key=age&order=asc`
# Node.js-Dummy-Data
