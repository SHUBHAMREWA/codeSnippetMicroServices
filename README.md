# Code Snippet Microservices Project

# live project -> https://client-code-snippet.onrender.com

## Project Overview

This is a full-stack code snippet sharing application built using microservices architecture. The project is divided into three main components:

1. **Client (Frontend)** - React-based frontend application
2. **Snippet Service** - Backend service for managing code snippets
3. **Comment Service** - Backend service for handling comments

## Architecture Overview

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│                 │    │                 │    │                 │
│   React Client  │    │ Snippet Service │    │ Comment Service │
│   (Port: 5173)  │    │  (Port: 8000)   │    │  (Port: 8001)   │
│                 │    │                 │    │                 │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       │
         │                       │                       │
         ├───────────────────────┼───────────────────────┤
         │                       │                       │
         │         HTTP/REST APIs                        │
         │                                               │
         └───────────────────────────────────────────────┘
```

## Technology Stack

### Frontend (Client)
- **React 19.1.0** - Modern React framework with latest features
- **Vite 7.0.4** - Fast build tool and development server
- **TailwindCSS 4.1.11** - Utility-first CSS framework for styling
- **Axios 1.11.0** - Promise-based HTTP client for API calls
- **ESLint** - Code linting and formatting tools

### Backend Services
- **Node.js** - JavaScript runtime environment
- **Express.js 5.1.0** - Fast and minimal web framework
- **CORS 2.8.5** - Cross-Origin Resource Sharing middleware
- **Nodemon 3.1.10** - Development tool for automatic server restart
- **Crypto** - Built-in Node.js module for generating unique IDs

## Services Architecture

### 1. Snippet Service (Port: 8000)
- **Purpose**: Handle creation and retrieval of code snippets
- **Endpoints**:
  - `POST /api/v1/snippet` - Create a new snippet
  - `GET /api/v1/snippet` - Retrieve all snippets
- **Features**:
  - Unique ID generation using crypto module
  - In-memory data storage
  - CORS enabled for cross-origin requests
  - RESTful API design

### 2. Comment Service (Port: 8001)
- **Purpose**: Manage snippet-specific comments
- **Endpoints**:
  - `POST /api/v1/snippet/:id/comment` - Add a new comment to a snippet
  - `GET /api/v1/snippet/:id/comment` - Get all comments for a specific snippet
- **Features**:
  - Associates comments with specific snippet IDs
  - Unique comment ID generation
  - In-memory comment storage
  - Supports multiple comments per snippet

### 3. Client Application (Port: 5173)
- **Purpose**: User interface for snippet and comment management
- **Features**:
  - Interactive snippet creation form
  - Grid-based snippet display layout
  - Integrated comment system for each snippet
  - Responsive design using TailwindCSS
  - Real-time updates after API operations
  - Modern React hooks implementation

## Project Structure

```
Micro Services/
│
├── README.md                     # Main project documentation
├── .gitignore                    # Git ignore configuration
│
├── client/                       # Frontend React application
│   ├── src/
│   │   ├── componets/            # React components (note: typo in folder name)
│   │   │   ├── CreateSnippet.jsx # Main component for snippet management
│   │   │   ├── Comment.jsx       # Comment functionality component
│   │   │   └── Navbar.jsx        # Navigation header component
│   │   ├── App.jsx               # Root App component
│   │   ├── App.css               # Application-specific styles
│   │   ├── main.jsx              # Application entry point
│   │   └── index.css             # Global CSS styles
│   ├── public/                   # Static assets
│   ├── package.json              # Frontend dependencies and scripts
│   ├── vite.config.js           # Vite configuration
│   ├── eslint.config.js         # ESLint configuration
│   └── index.html               # HTML template
│
├── snippet/                      # Snippet microservice
│   ├── controller/
│   │   └── snippet.js            # Business logic for snippet operations
│   ├── router/
│   │   └── snippet.js            # Route definitions for snippet endpoints
│   ├── database/
│   │   └── data.js               # In-memory data storage
│   ├── index.js                  # Service entry point and server setup
│   └── package.json              # Service dependencies and scripts
│
└── comment/                      # Comment microservice
    ├── controller/
    │   └── comment.js            # Business logic for comment operations
    ├── route/
    │   └── comment.js            # Route definitions for comment endpoints
    ├── database/
    │   └── comments.js           # In-memory comment storage
    ├── index.js                  # Service entry point and server setup
    └── package.json              # Service dependencies and scripts
```

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager
- Modern web browser

### Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd "Micro Services"
   ```

2. **Setup Client (Frontend)**:
   ```bash
   cd client
   npm install
   npm run dev
   ```
   The client will be available at `http://localhost:5173`

3. **Setup Snippet Service** (in a new terminal):
   ```bash
   cd snippet
   npm install
   npm run dev
   ```
   The service will run on `http://localhost:8000`

4. **Setup Comment Service** (in a new terminal):
   ```bash
   cd comment
   npm install
   npm run dev
   ```
   The service will run on `http://localhost:8001`

### Running the Application
After starting all three services, you can access the application at `http://localhost:5173`. The frontend will communicate with both backend services automatically.

## API Documentation

### Snippet Service API (Port: 8000)

#### Create Snippet
- **Method**: POST
- **URL**: `http://localhost:8000/api/v1/snippet`
- **Request Body**: 
  ```json
  {
    "title": "Example Snippet",
    "code": "console.log('Hello World');"
  }
  ```
- **Response**: 
  ```json
  {
    "message": "snippet created",
    "snippet": {
      "id": "a1b2c3d4e5f6",
      "title": "Example Snippet",
      "code": "console.log('Hello World');"
    },
    "success": true
  }
  ```

#### Get All Snippets
- **Method**: GET
- **URL**: `http://localhost:8000/api/v1/snippet`
- **Response**: Object containing all snippets with their IDs as keys
  ```json
  {
    "a1b2c3d4e5f6": {
      "id": "a1b2c3d4e5f6",
      "title": "Example Snippet",
      "code": "console.log('Hello World');"
    }
  }
  ```

### Comment Service API (Port: 8001)

#### Add Comment
- **Method**: POST
- **URL**: `http://localhost:8001/api/v1/snippet/:id/comment`
- **Request Body**: 
  ```json
  {
    "text": "This is a great code snippet!"
  }
  ```
- **Response**: 
  ```json
  {
    "message": "comment Added",
    "comment": {
      "commnetId": "x1y2z3a4b5",
      "text": "This is a great code snippet!"
    },
    "success": true
  }
  ```

#### Get Comments by Snippet ID
- **Method**: GET
- **URL**: `http://localhost:8001/api/v1/snippet/:id/comment`
- **Response**: Array of comments for the specified snippet
  ```json
  [
    {
      "commnetId": "x1y2z3a4b5",
      "text": "This is a great code snippet!"
    }
  ]
  ```

## Features

### Implemented Features
- ✅ **Code Snippet Management**: Create and view code snippets
- ✅ **Comment System**: Add and view comments for each snippet
- ✅ **Responsive Design**: Mobile-friendly user interface
- ✅ **Real-time Updates**: Automatic refresh after operations
- ✅ **Microservices Architecture**: Separate services for different functionalities
- ✅ **CORS Support**: Cross-origin requests enabled
- ✅ **Modern Tech Stack**: Latest versions of React, Node.js, and related tools

### Current Limitations
- **Data Persistence**: Uses in-memory storage (data lost on server restart)
- **Authentication**: No user authentication or authorization system
- **Validation**: Limited input validation and sanitization
- **Error Handling**: Basic error handling implementation
- **Testing**: No unit or integration tests implemented
- **Security**: No security measures beyond basic CORS

### Potential Improvements

#### Backend Enhancements
- **Database Integration**: Add MongoDB or PostgreSQL for data persistence
- **Authentication System**: Implement JWT-based user authentication
- **Input Validation**: Add comprehensive validation using libraries like Joi
- **Error Handling**: Implement global error handling middleware
- **API Rate Limiting**: Add rate limiting to prevent abuse
- **Logging**: Implement structured logging with Winston or similar
- **Health Checks**: Add health check endpoints for monitoring

#### Frontend Enhancements
- **Loading States**: Add loading indicators during API calls
- **Error Boundaries**: Implement React error boundaries
- **Form Validation**: Add client-side form validation
- **Code Highlighting**: Implement syntax highlighting for code snippets
- **Search Functionality**: Add search and filter capabilities
- **Pagination**: Implement pagination for large datasets

#### DevOps & Infrastructure
- **Containerization**: Add Docker support for easy deployment
- **CI/CD Pipeline**: Implement automated testing and deployment
- **Environment Configuration**: Use environment variables for configuration
- **Load Balancing**: Add load balancer for multiple service instances
- **Monitoring**: Implement application monitoring and alerting

## Development Guidelines

### Code Standards
- Use ES6+ JavaScript features consistently
- Implement proper error handling patterns
- Follow RESTful API design principles
- Use meaningful variable and function names
- Maintain consistent code formatting
- Write self-documenting code with appropriate comments

### Best Practices
- **Separation of Concerns**: Keep business logic separate from routing
- **DRY Principle**: Don't repeat yourself - create reusable functions
- **Error Handling**: Always handle errors gracefully
- **Security**: Validate and sanitize all inputs
- **Performance**: Optimize database queries and API responses
- **Documentation**: Keep README files and code comments updated

### Environment Configuration
Currently, configurations are hardcoded. Consider using environment variables:
- Database connection strings
- Server port numbers
- API base URLs
- CORS origin settings
- Authentication secrets

## Troubleshooting

### Common Issues

1. **Port Already in Use**
   - **Problem**: Service won't start due to port conflict
   - **Solution**: Change port numbers in service files or stop conflicting processes

2. **CORS Errors**
   - **Problem**: Frontend can't communicate with backend services
   - **Solution**: Ensure CORS is enabled in all backend services

3. **Service Not Responding**
   - **Problem**: API calls fail or timeout
   - **Solution**: Verify all three services are running and accessible

4. **Data Not Persisting**
   - **Problem**: Data disappears after server restart
   - **Solution**: This is expected behavior with in-memory storage

5. **Dependencies Issues**
   - **Problem**: npm install fails or packages are missing
   - **Solution**: Delete node_modules and package-lock.json, then run npm install

### Debug Tips
- Check browser console for frontend JavaScript errors
- Monitor server console logs for backend errors
- Use browser Network tab to inspect API requests/responses
- Verify API endpoints are accessible using tools like Postman
- Ensure JSON formatting is correct in API requests
- Check that all required fields are provided in API calls

## Testing the Application

### Manual Testing Steps
1. **Start all services** as described in the setup section
2. **Open the frontend** at `http://localhost:5173`
3. **Create a snippet**: Fill in title and code, then submit
4. **Verify snippet appears** in the grid below the form
5. **Add comments**: Click show button and add comments to snippets
6. **Verify comments appear** and are associated with correct snippets

### API Testing with curl
```bash
# Test snippet creation
curl -X POST http://localhost:8000/api/v1/snippet \
  -H "Content-Type: application/json" \
  -d '{"title":"Test","code":"console.log('test');"}

# Test getting all snippets
curl http://localhost:8000/api/v1/snippet

# Test adding comment (replace SNIPPET_ID with actual ID)
curl -X POST http://localhost:8001/api/v1/snippet/SNIPPET_ID/comment \
  -H "Content-Type: application/json" \
  -d '{"text":"Great snippet!"}'

# Test getting comments (replace SNIPPET_ID with actual ID)
curl http://localhost:8001/api/v1/snippet/SNIPPET_ID/comment
```

## Contributing

### Development Workflow
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

### Code Review Checklist
- [ ] Code follows established patterns
- [ ] All functions have appropriate error handling
- [ ] API endpoints return consistent response formats
- [ ] Frontend components are properly structured
- [ ] No hardcoded values (use constants/config)
- [ ] Code is properly commented
- [ ] Manual testing completed

## License

This project is created for educational and demonstration purposes. It showcases microservices architecture principles and modern web development practices using Node.js, Express.js, and React.

## Contact

For questions, suggestions, or contributions, please create an issue in the repository or contact the development team.

---

**Note**: This project demonstrates a basic microservices architecture and is suitable for learning purposes. For production use, additional features like authentication, data persistence, comprehensive error handling, and security measures should be implemented.
