# React Course – Tasks & Exercises

This repository contains all the tasks, exercises, and practice projects completed as part of my **React course**.

The purpose of this repository is to track my progress throughout the course and keep all the exercises and implementations organized in one place.

#### Getting Started

To run this project locally, switch to the corresponding branch first and install the required dependencies:

```bash
git checkout main
npm install
npm run dev
```

## 📚 Course Tasks

### Task 1 – Component Segregation

**Branch:** [feature/FurtherComponentsDecomposition](https://github.com/ManishNewa/ReactApp/tree/feature/FurtherComponentsDecomposition)

The first task focuses on understanding the importance of breaking a React application into **smaller, reusable components**.

The UI looks as below:-
<img width="1911" height="1865" alt="image" src="https://github.com/user-attachments/assets/89459dd3-4749-4d8a-b058-7a5dbbcfcb4f" />

This task served as an introduction to the core concept of **component-based architecture in React**.

### Task 2 – Tailwind CSS & Pricing Section

**Branch:** [task/PricingSectionUIWithTailwindCss](https://github.com/ManishNewa/ReactApp/tree/task/PricingSectionUIWithTailwindCss)

The second task focused on learning how to **add, configure, and use Tailwind CSS** in a React project.

As part of the exercise, a **pricing section template** had to be built based on a reference image provided during the course. The goal was to recreate the design using React and Tailwind CSS while becoming familiar with Tailwind's utility classes and styling approach.

The final result of the pricing section is shown below.
<img width="2075" height="1492" alt="image" src="https://github.com/user-attachments/assets/3bf106e5-bf4e-484d-8819-d5c6499993e3" />

### Task 3A – Traffic Light with useState

**Branch:** [task/MiniTrafficLight](https://github.com/ManishNewa/ReactApp/tree/task/MiniTrafficLight)

This task focuses on learning and using React's **`useState` hook** to manage component state.

An existing template containing a **three-light traffic signal** was provided. The objective was to make the traffic light functional by using `useState` to control which light is currently active.

The functionality allows the user to select any of the three available lights, and the selected light changes its appearance to indicate that it is active.

This task provides an introduction to:

* Using the `useState` hook in React.
* Managing and updating component state.
* Handling user interactions.
* Dynamically changing UI elements based on state.
* Passing and updating state within React components.

The final result demonstrates a functional traffic light where the active color changes based on the user's selection.

https://github.com/user-attachments/assets/650bfb34-365a-404c-8ad1-7f5ae40546e2

### Task 3B – Temperature Controller

**Branch:** [task/TemperaturePractice](https://github.com/ManishNewa/ReactApp/tree/task/TemperaturePractice)

This task focuses on using React's **`useState` hook** to manage and update a temperature value.

The initial temperature is set to **20°C**. The user can interact with three buttons to control the temperature:

* **Minus (-):** Decreases the temperature by 1°C.
* **Reset to 20°C:** Resets the temperature back to **20°C**.
* **Plus (+):** Increases the temperature by 1°C.

The task provides further practice with:

* Managing state using `useState`.
* Updating state based on user interactions.
* Handling button click events.
* Resetting state to an initial value.
* Dynamically displaying updated state values in the UI.

The final result is a functional temperature controller that allows the user to increase, decrease, or reset the displayed temperature.

https://github.com/user-attachments/assets/a7a813f6-07d5-4414-9102-c0a727f737e1

### Task 4 - Shopping Cart

**Branch:** [task/ShoppingCart](https://github.com/ManishNewa/ReactApp/tree/task/ShoppingCart)

This task involves creating a **shopping cart UI** with item management, pricing calculations, discounts, shipping fees, and voucher functionality.

The cart section displays the items currently in the cart, with the **quantity of each item** shown alongside the item details. Users can manage the contents of their cart using the available controls.

The summary section displays:

* **Subtotal:** The total price of all items based on their quantities.
* **Discount:** Set to **10% by default**.
* **Shipping Fee:** Set to **100** by default.
* **Total Amount:** The final amount after applying the discount and shipping fee.

#### Cart Functionality

Users can manage the quantity of each item by:

* Increasing the quantity of an item.
* Decreasing the quantity of an item.
* Removing an item using the **delete icon**.
* Automatically removing an item when its quantity is decreased below **1**.

#### Voucher Functionality

The cart also includes a **voucher section** where users can enter and apply discount vouchers.

The applicable vouchers are:

* `DISCOUNT20`
* `DISCOUNT30`
* `DISCOUNT40`
* `DISCOUNT50`

Applying a valid voucher increases the discount applied to the order and updates the summary and total amount accordingly.

This task provides practice with:

* Managing complex state using React.
* Updating item quantities dynamically.
* Adding and removing items from an array.
* Calculating subtotal, discounts, shipping fees, and totals.
* Handling user input and button interactions.
* Applying conditional logic based on voucher codes.

The result output is as follows:-
<img width="2376" height="1550" alt="image" src="https://github.com/user-attachments/assets/763be41f-8438-4669-8079-2ebd3b217b0c" />

## 🎯 Purpose

This repository is primarily a **learning and practice repository**. It documents my journey through React and provides a collection of examples demonstrating concepts learned throughout the course.

New tasks and exercises will be added as the course progresses.
