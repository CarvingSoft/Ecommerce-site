# 🛍️ E-Mart - Modern Ecommerce Website

A full-stack ecommerce application built with Angular, Node.js, Express, and PostgreSQL, featuring a beautiful modern UI with Tailwind CSS.

![E-Mart Banner](https://via.placeholder.com/1200x400/3B82F6/FFFFFF?text=E-Mart+Ecommerce+Platform)

## ✨ Features

### 🏪 **Customer Features**
- **Modern Homepage** - Beautiful hero section with featured products and categories
- **Product Catalog** - Responsive grid layout with search and filtering
- **Shopping Cart** - Add/remove items with quantity management
- **User Authentication** - Secure login and registration system
- **Address Management** - Add and select shipping addresses
- **Checkout Process** - Complete order flow with payment integration
- **Order Tracking** - View order history and status
- **Responsive Design** - Works perfectly on all devices

### 👨‍💼 **Admin Features**
- **Product Management** - Add, edit, and delete products with image upload
- **Category Management** - Organize products into categories
- **Brand Management** - Manage product brands
- **Order Management** - View and process customer orders
- **User Management** - Manage customer accounts
- **Inventory Tracking** - Stock management system

### 🎨 **Design & UX**
- **Modern UI** - Clean, professional design with Tailwind CSS
- **Responsive Layout** - Mobile-first design approach
- **Smooth Animations** - Hover effects and transitions
- **Intuitive Navigation** - Easy-to-use interface
- **Loading States** - Better user experience with proper feedback

## 🚀 Tech Stack

### **Frontend**
- **Angular 15** - Modern web application framework
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Angular Material** - UI component library
- **RxJS** - Reactive programming

### **Backend**
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **PostgreSQL** - Relational database
- **Sequelize** - ORM for database operations
- **JWT** - Authentication tokens
- **Bcrypt** - Password hashing
- **Cloudinary** - Image upload and storage
- **Multer** - File upload middleware

## 📦 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- PostgreSQL (v12 or higher)
- npm or yarn package manager

### 1. Clone the Repository
```bash
git clone <repository-url>
cd workspace
```

### 2. Backend Setup
```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your database credentials and other configurations

# Start the backend server
npm start
```

The backend server will run on `http://localhost:8000`

### 3. Frontend Setup
```bash
# Navigate to frontend directory
cd Frontend

# Install dependencies
npm install

# Start the development server
npm start
```

The frontend application will run on `http://localhost:4200`

### 4. Database Setup
```bash
# Create PostgreSQL database
createdb admitezy_db

# The application will automatically sync database models on startup
```

## 🔧 Configuration

### Backend Configuration
Create a `.env` file in the backend directory with:
```env
DB_HOST=localhost
DB_PORT=5432
DB_NAME=admitezy_db
DB_USER=your_username
DB_PASSWORD=your_password
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret
```

### Frontend Configuration
Update the API URL in `Frontend/src/app/Modules/user/user.service.ts`:
```typescript
url = 'http://localhost:8000' // Your backend URL
```

## 🏃‍♂️ Running the Application

### Development Mode
1. Start the backend server:
   ```bash
   cd backend
   npm start
   ```

2. Start the frontend application:
   ```bash
   cd Frontend
   npm start
   ```

3. Open your browser and navigate to `http://localhost:4200`

### Production Build
```bash
# Frontend production build
cd Frontend
npm run build

# Serve the built files using a web server
```

## 📱 Usage Guide

### For Customers
1. **Browse Products**: Visit the homepage to see featured products and categories
2. **Search & Filter**: Use the search bar and filters to find specific products
3. **Add to Cart**: Click "Add to Cart" on any product
4. **Checkout**: Review your cart and proceed to checkout
5. **Address**: Add or select a shipping address
6. **Payment**: Complete the payment process
7. **Order Confirmation**: Receive order confirmation and tracking details

### For Administrators
1. **Login**: Access the admin panel with admin credentials
2. **Manage Products**: Add new products with images and descriptions
3. **Organize Catalog**: Create categories and brands
4. **Process Orders**: View and update order statuses
5. **Monitor Inventory**: Track stock levels and manage inventory

## 🎯 API Endpoints

### Authentication
- `POST /login` - User login
- `POST /user` - User registration

### Products
- `GET /product` - Get all products
- `GET /product/:id` - Get product by ID
- `POST /product` - Create new product (Admin)
- `PUT /product/:id` - Update product (Admin)
- `DELETE /product/:id` - Delete product (Admin)

### Categories
- `GET /category` - Get all categories
- `POST /category` - Create category (Admin)

### Cart
- `GET /cart` - Get user cart
- `POST /cart` - Add item to cart
- `PATCH /cart/:id` - Update cart item
- `DELETE /cart/:id` - Remove from cart

### Orders
- `GET /order` - Get user orders
- `POST /order` - Create new order
- `GET /orderDetails` - Get order details

### Address
- `GET /address` - Get user addresses
- `POST /address` - Add new address
- `GET /address/:id` - Get address by ID

## 🎨 UI Components

### Key Components
- **Homepage** - Landing page with hero section and featured content
- **Product Catalog** - Grid layout with product cards
- **Shopping Cart** - Detailed cart with quantity controls
- **Checkout Flow** - Multi-step checkout process
- **User Dashboard** - Account management interface
- **Admin Panel** - Complete admin interface

### Design System
- **Colors**: Blue primary theme with gray accents
- **Typography**: Clean, readable fonts
- **Spacing**: Consistent spacing using Tailwind utilities
- **Components**: Reusable, modular components
- **Responsive**: Mobile-first responsive design

## 🔒 Security Features

- **JWT Authentication** - Secure token-based authentication
- **Password Hashing** - Bcrypt for secure password storage
- **Input Validation** - Form validation on frontend and backend
- **CORS Protection** - Cross-origin request security
- **SQL Injection Prevention** - Sequelize ORM protection

## 📈 Performance Optimizations

- **Lazy Loading** - Angular modules loaded on demand
- **Image Optimization** - Cloudinary for optimized image delivery
- **Caching** - Browser caching for static assets
- **Minification** - Production builds are minified
- **Tree Shaking** - Unused code removal

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 👥 Support

For support, email support@emart.com or create an issue in the GitHub repository.

## 🙏 Acknowledgments

- Angular team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- All the open-source contributors who made this project possible

---

**Built with ❤️ by the E-Mart Team**