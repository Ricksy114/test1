# Web App Demo Activity

**Node.js + Next.js + Vercel Deployment**

Welcome! This activity will guide you through creating and deploying your first web app using **Node.js**, **Next.js**, and **Vercel**.
By the end, you will customize the page into **your own Tutorial Blog about Tailwind CSS**.

---

## Prerequisites

Before you start, install the following tools:

* **Node.js** – [https://nodejs.org/en/download](https://nodejs.org/en/download)
* **Git** – [https://git-scm.com/install/](https://git-scm.com/install/)
* **GitHub Desktop** – [https://desktop.github.com/download/](https://desktop.github.com/download/)
* **Visual Studio Code (VS Code)** – [https://code.visualstudio.com/download/](https://code.visualstudio.com/download/)

---

## Step-by-Step Instructions

### **1. Create a GitHub Repository**

1. Open **GitHub Desktop**
2. Sign in to your account
3. Create a new repository named:

   ```
   lastname-webapp-demo
   ```
4. Publish the repository to GitHub

---

### **2. Open the Project in VS Code**

* In GitHub Desktop → click **"Open in Visual Studio Code"**
* In VS Code → right-click on the project panel
  Select **"Open in Integrated Terminal"**

---

### **3. Verify Installed Tools**

Run the following commands in the terminal:

```bash
node -v
npm -v
git -v
```

You should see version numbers for each tool.

---

### **4. Download the Activity Materials**

Get the starter files from:
[https://github.com/clydeatmcm/IT103/tree/main/M1/FA4/webapp1](https://github.com/clydeatmcm/IT103/tree/main/M1/FA4/webapp1)

---

### **5. Create a New Next.js Project**

Run this command inside your project folder:

```bash
npx create-next-app@latest .
```

Follow the configuration settings provided in the activity materials.

---

### **6. Add Your Boilerplate Page**

Copy the provided `page.js` code from the activity material into your project’s:

```
app/page.js
```

Overwrite the existing file.

---

### **7. Run the Web App Locally**

Start your development server:

```bash
npm run dev
```

Your project should open at:
[http://localhost:3000](http://localhost:3000)

---

### **8. Push Your Updates to GitHub**

In **GitHub Desktop**:

* Commit your changes
* Push to your remote repository

---

### **9. Deploy to Vercel**

1. Go to [https://vercel.com](https://vercel.com)
2. Sign in using GitHub
3. Create a **New Project**
4. Select your repository
5. Deploy!

---

## 🎉 You're Done!

Your first web app is successfully deployed using **Node.js + Next.js + Vercel**. Great job!

---

## Main Task: Customize Your Web App

Modify your `app/page.js` content and turn it into **your own Tutorial Blog Page** explaining:

> *“How to Use Tailwind CSS”*

Be creative—add examples, steps, or your own explanation.

---

## Submission Requirements

Please submit the following in our **Blackboard submission bin**:

1. **Clickable links**

   * GitHub Repository
   * Live Vercel Deployment
2. **Screenshots**

   * Desktop view of your web app
   * Mobile view of your web app
3. **Reflection**

   * What you learned
   * Challenges encountered
   * What you enjoyed or found interesting