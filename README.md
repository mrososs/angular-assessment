## 📦 Angular In-Work Technical Assessment

This project was built as part of a technical evaluation to demonstrate proficiency in Angular v17+, architectural decisions, component reusability, and frontend best practices in a scalable and modular environment.

---

### 🚀 Tech Stack

- **Angular** v18 (Standalone Components)
- **SCSS** (with Bootstrap customization)
- **PrimeNG** (Table Module)
- **RxJS**, **HttpClient**, **Interceptors**
- **Modular Architecture** (`Core`,`auth`, `Shared`, `Feature`, `System`)
- **ChangeDetectionStrategy.OnPush**

---

### 📂 Project Structure

```
src/
├── auth/           # auth component, login, register, model
├── core/           # Global services, guards, interceptors
├── shared/         # Reusable components, directives, pipes
├── feature/        # Feature-specific modules like Products
├── system/         # Layout components (Sidebar, Navbar, Footer)
├── assets/
└── styles/         # SCSS variables, mixins, Bootstrap overrides
```

---

### 📊 Layouts

- **Auth Layout**: For login/register pages
- **System Layout**: For main dashboard content (includes Sidebar, Navbar, Footer)

---

### 🧹 Reusable Components

These components were built headlessly, allowing flexibility and content projection via `@ContentChild` and `NgTemplateOutlet`:

- `InputFieldComponent`
- `InputUploadComponent`
- `CardComponent`
- `ButtonComponent`

---

### 📊 PrimeNG Table

- Used **PrimeNG's TableModule** with:

  - Sorting
  - Filtering
  - Global Search
  - Export Options

---

### 📦 Product Module (CRUD)

- View all products in **card view**
- Switch to **table view** using a toggle
- Add/Edit/Delete product functionality
- Detail view with route-based navigation

---

### 🛠 Core Features Implemented

- ✅ Lazy-loaded components
- ✅ use signals state management 
- ✅ Custom SCSS structure (with Bootstrap overrides)
- ✅ HttpClient with Interceptors
- ✅ RxJS Observables for reactive data flow
- ✅ Built-in & custom Pipes
- ✅ Attribute & Structural Directives
- ✅ `NgTemplateOutlet`

---

### 📦 Optional Enhancements

- ✅ Loader overlay during HTTP requests
- ✅ Responsive design with Bootstrap classes
- ✅ Basic animation transitions for routing/components

---

### 📄 How to Run

```bash
npm install
ng serve
```

App will be available at: `http://localhost:4200/`

---

### 📁 Sample Dummy Data

For product listing and table display, either local data or `https://fakestoreapi.com` was used.

---

### 📸 Screenshots

> _(Add UI screenshots here if possible)_

---

### 🧠 Developer Notes

- Focus was placed on clean code, reusability, and maintainability
- SCSS and Bootstrap were used together with custom theming
- Code was structured to mimic real-world, enterprise-level architecture

---

### 📚 Commands

```bash
# Run the app
ng serve

# Build for production
ng build

# Lint
ng lint
```

---

### 📌 To-Do / Future Improvements

- Add unit tests for core services and shared components
- Add form validation feedback on InputField
- Persist products using localStorage or in-memory DB
- Improve accessibility (ARIA tags)

---

### 👤 Author

- **Your Name**
- [LinkedIn](https://www.linkedin.com/) | [GitHub](https://github.com/mrososs)
