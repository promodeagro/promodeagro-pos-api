# Product Requirements Document (PRD): POS Application - PTR Technologies

## Overview
The POS (Point-of-Sale) application by PTR Technologies is a comprehensive retail management system designed to streamline sales, inventory, customer management, reporting, and business operations through an intuitive interface for admins, cashiers, and warehouse personnel.

## Modules

### 1. User Authentication & Profile Management
**Features:**
- Sign-Up with email, name, contact number
- Sign-In with email & password
- Forgot Password with OTP email verification
- Profile Management: Personal Info, Login & Password, Store Profile, Logout
- Social Account linking

### 2. Customer Management
**Key Functions:**
- Add/Edit/Delete Customer (auto-generated ID)
- View customer list with search and filters
- View Order History and last invoice
- Pagination for customer list

### 3. Product Management
**Features:**
- Add Product: Image, Name, UOM, Dates, Quantity, Type, Tax, Inventory account
- View Product Details: Purchase/Sale Info, Margin, Stock Location
- Edit Product Information
- Inventory View: Low Stock, Best Selling, Total Products
- Import Products (bulk upload in .xls, .pdf, .docx)
- Export Products (planned feature)

### 4. Sales & Checkout
**Cart Workflow:**
- Add to Cart from product list
- Modify quantity or remove items from cart
- Sale Details with subtotal, GST, discount, payable amount
- Hold Cart or Proceed to Checkout
- Checkout Options: Add existing or new customer via WhatsApp number

**Payment Workflow:**
- Confirm order
- Select payment method: Cash, Card, QR Code
- Payment Summary + Confirmation popup
- Generate, print, share, or download invoice

### 5. Order Management
**Order History:**
- View past orders with search & filters
- View invoice details

**Order On Hold:**
- View, resume, edit, or remove held orders
- Confirmation for removal

**Offline Orders:**
- Sync all offline orders
- View offline order list, status, and details

### 6. Inventory Management
**Overview Dashboard:**
- Total Products, Categories, Best Selling, Low Stock
- View low-stock product list with pagination

**Inventory Buttons:**
- Import/Export Product Data
- Download Inventory Template (A4 format)
- View Product Details with full edit access

### 7. Product Display
**Home Interface:**
- Horizontal scroll bar for: All, Fruits, Vegetables, Leafy Vegetables
- Vertical display of products in cart format
- Add to cart functionality
- Frequently Bought Together recommendations

### 8. Invoice Management
**Features:**
- Eye icon to view invoice
- A4 format with all order details
- Print, Share, Download options

### 9. Reports Module
**Subsections:**
- Gross Revenue
- Avg Order Value
- Total Orders
- Today's Sales
- Charts: Daily Sales Graph, Best Selling Products, Order Categories
- Time Filters: Today, Yesterday, Last Week, Last Month

### 10. Transaction History
- Filter by Customer Name/Order ID & Date
- View transaction amount, status, and detailed view

### 11. Sale History
- Filter by Customer Name/Order ID
- Columns: Date, Customer, Order ID, Payment Types, Total

### 12. UI Components
**Header:**
- Company Name, Search bar (with mic), Add to Cart, Profile Avatar, Date/Time

**Left Sidebar:**
- Navigation: Home, Customer, Inventory, Reports, Orders, Settings, Logout

**Right Horizontal Bar:**
- Category Filters (All/Fruits/Vegetables/Leafy Vegetables)

## Settings Module

### 1. Appearance Settings
- Toggle Light/Dark Theme
- Font Size adjustment

### 2. Checkout Settings
- Enable/Disable Payment History
- Save/Clear Payment History
- Toggle Payment Modes (Cash, Card, QR Code)

### 3. Language & Region
- Set preferred region and language
- Enable predictive text

### 4. Notifications
- Toggle notification type (text, push, email)
- Enable/Disable for specific events (new inventory, billing alert, etc.)

### 5. Security
- View login alerts and active sessions
- Logout from specific device with password confirmation

### 6. Store Setup
- Profile: Contact info, Address, Gmail, etc.
- Business Info: GST, TIN, FSSAI, License Nos
- POS Details: Model, ID, Address, Version, Contact Info

## Non-Functional Requirements
- **Responsive UI:** Compatible with tablets and desktops
- **Data Backup:** Offline sync and backup capabilities
- **Security:** Authentication, session management, and data protection
- **Performance:** Fast product load, real-time cart update, and inventory sync
- **Scalability:** Supports multi-store and multi-terminal setup in future releases

## Future Enhancements
- Export Inventory to Excel/CSV
- Role-Based Access Control (Admin, Cashier, Staff)
- Loyalty Programs / Discounts
- AI-powered analytics for top-selling products and demand forecasting

## Stakeholders
- **Product Owner:** PTR Technologies
- **Users:** Cashiers, Store Admins, Inventory Managers, Accountants

## Appendix
- **UI references:** Derived from provided user flows
- **Data formats:** Accepts .xls, .pdf, .docx in import
- **Print formats:** A4 standard for invoice and download list
