# WISHLIST GIFTING - PROJECT DOCUMENTATION

## INTRODUCTION

**Wishlist Gifting** is a modern, user-friendly collaborative platform designed to streamline the creation and management of digital wishlists. Suitable for birthdays, weddings, anniversaries, and special occasions, it offers seamless wishlist creation, intelligent image extraction from product URLs, and AI-powered placeholder image generation when needed. Users can easily share their wishlists with friends and family, who can reserve items to prevent duplicate gifts. The platform features secure JWT-based authentication, real-time email notifications for gift reservations, and a responsive, premium user interface built with modern web technologies. Its flexibility, ease of use, and powerful features make it an ideal choice for individuals seeking an efficient and collaborative gifting solution.

---

## SCENARIO-BASED CASE STUDY

### Meet Sarah, a Young Professional Planning Her Dream Wedding

Sarah, a busy professional, is planning her upcoming wedding and needs an efficient way to manage her gift registry. With hundreds of friends and family members to coordinate with, Sarah discovers **Wishlist Gifting**, a comprehensive web application designed to simplify the wishlist and gift management process.

#### User Journey with Wishlist Gifting:

**User Registration and Authentication**
Sarah registers an account on Wishlist Gifting, providing her email and creating a secure password. She logs in securely using JWT authentication, ensuring her personal data and preferences remain private and protected.

**Wishlist Creation and Management**
Sarah creates a new wishlist for her wedding and easily customizes it with a title and description. She can view all her wishlists in one dashboard and manage them effortlessly.

**Intelligent Product Addition**
Instead of manually uploading images, Sarah simply pastes product URLs from e-commerce websites. The platform automatically extracts professional product images from these URLs. If extraction fails, she can enable AI-powered image generation using Google's Gemini or Imagen models to create beautiful placeholder images that match the product description.

**Collaborative Sharing**
Sarah generates a shareable link for her wedding wishlist and distributes it to friends and family via email and social media. Her guests can access the wishlist without needing to create an account.

**Gift Reservation System**
When a guest finds an item they want to gift, they simply click "Reserve" to prevent duplicate gifts. The platform tracks reservations and displays which items are reserved and by whom.

**Real-Time Notifications**
Sarah receives instant email notifications whenever a guest reserves an item, keeping her informed about who is contributing to her wishlist and what gifts have been secured.

**Sarah's Experience**
Thanks to Wishlist Gifting, Sarah can focus on wedding planning without the stress of coordinating gifts. She has full visibility over who is contributing what, eliminates the risk of duplicate gifts, and maintains organized wishlists for different occasions. Wishlist Gifting has become an indispensable tool in Sarah's event planning, helping her achieve her organizational goals with ease and confidence.

---

## SYSTEM REQUIREMENTS

### Software Requirements

These are the essential tools and platforms required to develop, test, and run the application efficiently.

- **Operating System**: Windows 10/11, macOS, or Linux — Supports cross-platform development and testing.
- **Node.js** (v16 or above): Provides the runtime environment for building and managing frontend logic and powers the server-side logic and handles API routing.
- **npm** (v8 or above): A package manager required to install dependencies for React and related libraries.
- **React.js** (v19.2.4): A JavaScript library for building dynamic and responsive user interfaces.
- **Vite**: A modern frontend build tool for fast development and optimized production builds.
- **Browser**: Google Chrome / Firefox (latest version) — For rendering and testing the UI in real-time.
- **Express.js** (v5.2.1): A lightweight web framework for building RESTful APIs.
- **MongoDB**: A NoSQL database used to store wishlists, items, users, and reservations data.
- **Postman**: Tool for testing APIs during development.
- **Visual Studio Code**: Preferred code editor with built-in Git and terminal support.

### Hardware Requirements

Describes the minimum and recommended specifications needed to support the development and usage of the application.

- **Processor**: Intel Core i5 (8th Gen or above) / AMD Ryzen 5 or better — Ensures fast compilation and multitasking during development.
- **RAM**: Minimum 8 GB (16 GB recommended) — For handling development servers, IDEs, and browser testing simultaneously.
- **Storage**: At least 1 GB free space — Required for package installations, MongoDB setup, and local project files.
- **Display**: 1366x768 or higher — Recommended for optimal coding experience and application layout visualization.

---

## PROJECT ARCHITECTURE

### TECHNICAL ARCHITECTURE

The Wishlist Gifting platform follows a three-tier architecture:

1. **Frontend Tier**: React-based UI hosted on Vite development server communicates with the backend API
2. **Backend Tier**: Express.js server processes requests, handles business logic, and manages API endpoints
3. **Data Tier**: MongoDB database stores user data, wishlists, items, and reservations
4. **External Services**: Integration with Google Generative AI for image generation, email services via Nodemailer

**Data Flow**:
1. User interacts with the Wishlist Gifting Frontend (React application)
2. The frontend sends API requests to the Wishlist Gifting Backend (Express server)
3. The backend processes requests and queries the MongoDB database
4. For image extraction, the backend uses Axios and Cheerio for web scraping
5. For AI image generation, the backend communicates with Google's Generative AI API
6. Email notifications are sent via Nodemailer when items are reserved
7. The backend returns responses to the frontend, which displays results to the user

---

## ER DIAGRAM DESCRIPTION

The Entity-Relationship (ER) diagram for Wishlist Gifting represents the various entities and their relationships within the gifting management system.

### Key Entities:

1. **User**: Represents users who create wishlists and manage their accounts
   - Attributes: userID, email, password (hashed), fullName, createdAt

2. **Wishlist**: Represents wishlists created by users
   - Attributes: wishlistID, userID, title, description, occasion, createdAt, isPublic

3. **Item**: Represents products added to wishlists
   - Attributes: itemID, wishlistID, productName, productURL, imageURL, price, description, priority

4. **Reservation**: Represents items reserved by guests
   - Attributes: reservationID, itemID, guestName, guestEmail, reservedAt, status

### Relationships:

- **User → Wishlist**: One user can have many wishlists (1:N)
- **Wishlist → Item**: One wishlist can contain many items (1:N)
- **Item → Reservation**: One item can have one or zero reservations (1:0..1)
- **User → Notification**: One user receives many notifications (1:N)

### Primary Keys:
- Each entity has a unique primary key (userID, wishlistID, itemID, reservationID)

### Foreign Keys:
- wishlistID in Item table references userID in User table
- itemID in Reservation table references wishlistID in Wishlist table
- userID in Wishlist table maintains the relationship between users and their wishlists

---

## KEY FEATURES

### User Registration and Profiles
- Allow users to create accounts with email and password
- Secure JWT-based authentication for session management
- User profile management with personal information storage

### Wishlist Management
- Create multiple wishlists for different occasions
- Edit and delete wishlists easily
- Share wishlists via public links without requiring account creation from recipients
- Set privacy settings (public/private)

### Intelligent Product Addition
- Add products by pasting product URLs
- Automatic image extraction from product pages using web scraping
- AI-powered placeholder image generation if extraction fails (Google Gemini/Imagen)
- Manual image upload option as fallback

### Gift Reservation System
- Guests can reserve items without creating an account
- Real-time reservation status tracking
- Prevent duplicate gifts by showing reservation status
- Guests provide their name and email when reserving

### Email Notifications
- Real-time notifications when items are reserved
- Email alerts containing reservation details
- Notification preferences and management
- Automated email delivery via Nodemailer

### Responsive Design
- Modern, premium UI built with React and Tailwind CSS
- Smooth animations using Framer Motion
- Mobile-friendly interface
- Cross-browser compatibility

### Public Wishlist Access
- Share wishlist links with non-registered users
- Guest access for viewing and reserving items
- No account required for guests

---

## ROLES AND RESPONSIBILITIES

### User (Wishlist Owner)
- **Account Management**: Create and manage account, update profile information, manage password security
- **Wishlist Creation**: Create wishlists for different occasions, add titles and descriptions
- **Product Management**: Add products via URLs, manage product images, edit product details, remove items
- **Wishlist Sharing**: Share wishlist links with friends and family via email or social media
- **Reservation Monitoring**: View which guests have reserved items, track reservation status
- **Email Notifications**: Receive real-time notifications when items are reserved, manage notification preferences
- **Data Management**: View wishlist history, export wishlist data if needed

### Guest (Reservation Maker)
- **Wishlist Access**: Access shared wishlists using public links without account creation
- **Item Browsing**: Browse wishlist items, view product details and images
- **Gift Reservation**: Reserve items to commit to gifting, provide name and email
- **Reservation Confirmation**: Receive confirmation email after reserving an item
- **Wishlist Sharing**: Share the wishlist link with other potential gift-givers

### Admin (Future Scope - Optional)
- **System Management**: Monitor platform usage, manage system settings and configurations
- **User Management**: Manage user accounts, handle account issues or disputes
- **Content Moderation**: Monitor wishlist content for policy violations
- **Analytics**: Track platform statistics and user engagement
- **Support**: Handle user inquiries and technical issues

---

## USER FLOW

### Wishlist Owner Flow
1. **Registration & Authentication** → Create account and log in securely
2. **Wishlist Creation** → Create new wishlist and customize with title/description
3. **Add Products** → Paste product URLs or manually upload images
4. **Customize Items** → Set prices, descriptions, and priorities
5. **Share Wishlist** → Generate and share public link
6. **Monitor Reservations** → View real-time reservation updates
7. **Receive Notifications** → Get email alerts when items are reserved
8. **Manage Wishlist** → Edit, update, or delete wishlists as needed

### Guest/Reservation Flow
1. **Access Wishlist** → Click shared link or receive link via email
2. **Browse Items** → View wishlist items with images and details
3. **Select Item** → Choose item to gift
4. **Reserve Item** → Click reserve button and provide name/email
5. **Confirmation** → Receive confirmation email
6. **Share** → Optionally share wishlist with other friends

---

## MVC PATTERN ARCHITECTURE

The Wishlist Gifting application follows the Model-View-Controller (MVC) architectural pattern, ensuring modularity, maintainability, and scalability.

### Model Layer (Data Layer)
The Model layer handles all data-related logic using Mongoose schemas for MongoDB:

- **userModel.js**: Defines user schema with email, password, profile info
- **wishlistModel.js**: Defines wishlist schema with title, description, items reference
- **itemModel.js**: Defines item schema with product details, images, reservation status

### Controller Layer
The Controller layer processes requests and implements business logic:

- **userController.js**: Handles registration, login, profile updates, authentication
- **wishlistController.js**: Manages wishlist creation, updates, deletion, and sharing
- **itemController.js**: Manages item creation, image extraction/generation, updates

### View Layer (Routing Layer)
Routes define API endpoints and invoke appropriate controller functions:

- **userRoutes.js**: Routes for /api/users (register, login, profile)
- **wishlistRoutes.js**: Routes for /api/wishlists (CRUD operations)
- **itemRoutes.js**: Routes for /api/items (add, update, delete items)

### Advantages of MVC Pattern
- **Separation of Concerns**: Clear responsibility for each layer
- **Scalability**: Easy to add new features without affecting existing code
- **Reusability**: Business logic can be reused across multiple endpoints
- **Testing**: Each layer can be tested independently
- **Collaboration**: Multiple developers can work on different layers simultaneously

---

## PROJECT SETUP AND CONFIGURATION

### Creating Project Structure

1. Create a new folder: `Wishlist_Gifting`
2. Inside, create two subfolders:
   - `backend` (for Node.js/Express server)
   - `frontend` (for React application)
3. Open the folder in VS Code

### Frontend Setup (React with Vite)

```bash
cd frontend
npm create vite@latest . -- --template react
```

**Select React framework** from the options:
```
? Select a framework: › React
```

**Select JavaScript variant**:
```
? Select a variant: › JavaScript
```

Install dependencies:
```bash
npm install
```

Start development server:
```bash
npm run dev
```

### Backend Setup (Node.js with Express)

```bash
cd backend
npm init -y
```

Create necessary files:
- `server.js` - Main server file

Create necessary folders:
- `models/` - Database schemas
- `controllers/` - Business logic
- `routes/` - API endpoints
- `config/` - Database configuration
- `middleware/` - Custom middleware
- `utils/` - Utility functions

Install dependencies:
```bash
npm install express cors dotenv mongoose bcryptjs jsonwebtoken nodemailer axios cheerio @google/generative-ai
```

Start development server:
```bash
node server.js
```

---

## BACKEND DEVELOPMENT

### Backend File Structure

```
backend/
├── server.js                    # Main server file
├── package.json                 # Dependencies
├── .env                        # Environment variables
├── config/
│   └── db.js                   # MongoDB connection
├── middleware/
│   ├── authMiddleware.js       # JWT authentication
│   └── errorMiddleware.js      # Error handling
├── models/
│   ├── userModel.js            # User schema
│   ├── wishlistModel.js        # Wishlist schema
│   └── itemModel.js            # Item schema
├── controllers/
│   ├── userController.js       # User operations
│   ├── wishlistController.js   # Wishlist operations
│   └── itemController.js       # Item operations
├── routes/
│   ├── userRoutes.js           # User endpoints
│   ├── wishlistRoutes.js       # Wishlist endpoints
│   └── itemRoutes.js           # Item endpoints
├── components/
│   ├── imageExtractor.js       # Web scraping for images
│   ├── imageGenerator.js       # AI image generation
│   └── index.js                # Component exports
└── utils/
    └── extractImage.js         # Image extraction utilities
```

### Controllers Overview

**userController.js**
- `registerUser()` - Handle user registration with password hashing
- `loginUser()` - Authenticate user and return JWT token
- `getUserProfile()` - Fetch user profile information
- `updateUserProfile()` - Update user details

**wishlistController.js**
- `createWishlist()` - Create new wishlist
- `getWishlists()` - Get all wishlists for a user
- `getPublicWishlist()` - Access wishlist via public link
- `updateWishlist()` - Update wishlist details
- `deleteWishlist()` - Delete wishlist

**itemController.js**
- `addItem()` - Add item to wishlist (with image extraction)
- `getItems()` - Get all items in a wishlist
- `updateItem()` - Update item details
- `deleteItem()` - Delete item from wishlist
- `reserveItem()` - Reserve an item (guest action)

---

## DATABASE DEVELOPMENT

### MongoDB Configuration

**Step 1: Install Mongoose**
```bash
npm install mongoose
```

**Step 2: Create Database Connection (config/db.js)**
```javascript
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Database connection failed:', error);
    process.exit(1);
  }
};

module.exports = connectDB;
```

### Database Schemas

**1. userModel.js** - User accounts schema
```javascript
const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  fullName: String,
  createdAt: { type: Date, default: Date.now }
});
```

**2. wishlistModel.js** - Wishlists schema
```javascript
const wishlistSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  description: String,
  occasion: String,
  items: [{ type: Schema.Types.ObjectId, ref: 'Item' }],
  isPublic: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now }
});
```

**3. itemModel.js** - Items schema
```javascript
const itemSchema = new Schema({
  wishlistId: { type: Schema.Types.ObjectId, ref: 'Wishlist', required: true },
  productName: { type: String, required: true },
  productURL: String,
  imageURL: String,
  price: Number,
  description: String,
  isReserved: { type: Boolean, default: false },
  reservedBy: { type: String }, // Guest name
  createdAt: { type: Date, default: Date.now }
});
```

### Environment Variables (.env)
```
MONGODB_URI=mongodb+srv://user:password@cluster.mongodb.net/wishlist_gifting
JWT_SECRET=your_jwt_secret_key
PORT=5000
GOOGLE_API_KEY=your_google_generative_ai_key
NODEMAILER_EMAIL=your_email@gmail.com
NODEMAILER_PASSWORD=your_app_password
```

---

## FRONTEND DEVELOPMENT

### Frontend File Structure

```
frontend/
├── index.html                  # HTML entry point
├── src/
│   ├── main.jsx               # React entry point
│   ├── App.jsx                # Main app component
│   ├── App.css                # Global styles
│   ├── index.css              # Global CSS
│   ├── assets/                # Images, icons, etc.
│   ├── components/            # Reusable components
│   │   ├── ErrorMessage.jsx   # Error display component
│   │   ├── FormInput.jsx      # Form input component
│   │   ├── GlassButton.jsx    # Glass-effect button
│   │   ├── LoadingSpinner.jsx # Loading state component
│   │   ├── PrimaryButton.jsx  # Primary CTA button
│   │   └── index.js           # Component exports
│   ├── context/               # React Context
│   │   └── AuthContext.jsx    # Authentication context
│   └── pages/                 # Page components
│       ├── Landing.jsx        # Landing page
│       ├── Register.jsx       # User registration
│       ├── Login.jsx          # User login
│       ├── Dashboard.jsx      # User dashboard
│       ├── CreateWishlist.jsx # Wishlist creation
│       ├── WishlistDetail.jsx # Wishlist details
│       ├── PublicWishlist.jsx # Public wishlist view
│       ├── ForgotPassword.jsx # Password recovery (future)
│       └── ResetPassword.jsx  # Password reset (future)
├── package.json               # Dependencies
├── vite.config.js            # Vite configuration
└── eslint.config.js          # ESLint configuration
```

### Key Components

**AuthContext.jsx** - Global authentication state management
- Manages user login state, JWT tokens
- Provides authentication methods to all components
- Handles token persistence

**Pages Overview**:

| Page | Purpose |
|------|---------|
| Landing.jsx | Entry point, marketing information |
| Register.jsx | New user registration |
| Login.jsx | User authentication |
| Dashboard.jsx | User wishlists overview |
| CreateWishlist.jsx | Create/edit wishlists |
| WishlistDetail.jsx | View and manage wishlist items |
| PublicWishlist.jsx | Guest view of shared wishlists |

### Reusable Components

- **FormInput.jsx**: Styled form input fields with validation
- **PrimaryButton.jsx**: Main call-to-action buttons
- **GlassButton.jsx**: Secondary buttons with glassmorphism effect
- **ErrorMessage.jsx**: Error notification display
- **LoadingSpinner.jsx**: Loading state indicator

---

## API ENDPOINTS

### User Routes (`/api/users`)

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/register` | Register new user |
| POST | `/login` | User login, returns JWT |
| GET | `/profile` | Get user profile (protected) |
| PUT | `/profile` | Update user profile (protected) |

### Wishlist Routes (`/api/wishlists`)

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/` | Create new wishlist (protected) |
| GET | `/` | Get user's wishlists (protected) |
| GET | `/:id` | Get specific wishlist (protected) |
| GET | `/public/:id` | Get public wishlist (no auth) |
| PUT | `/:id` | Update wishlist (protected) |
| DELETE | `/:id` | Delete wishlist (protected) |

### Item Routes (`/api/items`)

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/` | Add item to wishlist (protected) |
| GET | `/:wishlistId` | Get items in wishlist |
| PUT | `/:id` | Update item (protected) |
| DELETE | `/:id` | Delete item (protected) |
| POST | `/:id/reserve` | Reserve item (no auth needed) |

---

## KEY TECHNOLOGIES AND LIBRARIES

### Frontend
- **React** (v19.2.4): UI library
- **Vite**: Fast build tool and dev server
- **Tailwind CSS** (v4.2.2): Utility-first CSS framework
- **Framer Motion**: Animation library
- **React Router DOM**: Client-side routing
- **Axios**: HTTP client for API calls
- **Lucide React**: Icon library

### Backend
- **Express.js** (v5.2.1): Web framework
- **Mongoose** (v9.4.1): MongoDB object modeling
- **JWT** (jsonwebtoken): Token-based authentication
- **bcryptjs**: Password hashing
- **Axios**: HTTP requests for image extraction
- **Cheerio**: Web scraping library
- **@google/generative-ai**: Google's AI API
- **Nodemailer**: Email service
- **CORS**: Cross-origin resource sharing
- **dotenv**: Environment variable management

---

## SECURITY FEATURES

- **JWT Authentication**: Secure token-based user authentication
- **Password Hashing**: Bcryptjs for secure password storage
- **CORS Protection**: Cross-origin requests validation
- **Environment Variables**: Sensitive data stored in .env file
- **Error Handling**: Comprehensive error middleware prevents information leakage
- **Public/Private Wishlists**: User can control wishlist visibility
- **Guest Access**: Non-authenticated guests can only view, not modify

---

## DEPLOYMENT CONSIDERATIONS

### Frontend Deployment
- Build: `npm run build`
- Deploy to Vercel, Netlify, or GitHub Pages
- Environment variables for API endpoints

### Backend Deployment
- Node.js hosting: Heroku, Render, Railway, or DigitalOcean
- MongoDB Atlas for cloud database
- Environment variables for credentials and API keys
- SSL/TLS for secure connections

---

## FUTURE ENHANCEMENTS

1. **Admin Panel**: Analytics and user management
2. **Multiple Images per Item**: Gallery support for products
3. **Price Tracking**: Monitor price changes for items
4. **Wishlist Analytics**: Insights on popular items and trends
5. **Social Integration**: Share directly to social media
6. **Mobile App**: Native iOS/Android applications
7. **Payment Integration**: Direct purchasing through the platform
8. **User Profiles**: Follow friends and see their wishlists
9. **Wishlist Collaboration**: Multiple users managing shared wishlists
10. **Advanced Search**: Filter and sort wishlists

---

## CONCLUSION

Wishlist Gifting revolutionizes how people organize and share their wish lists with friends and family. By combining modern web technologies with intelligent image processing and real-time notifications, the platform provides a seamless and enjoyable experience for both wishlist owners and gift givers. The application's scalable architecture and user-centric design make it an excellent foundation for future enhancements and feature additions. With continuous improvement and community feedback, Wishlist Gifting has the potential to become the go-to platform for collaborative gift-giving experiences.

---

**Project Created**: 2024
**Last Updated**: April 2026
**Version**: 1.0.0
**License**: ISC

