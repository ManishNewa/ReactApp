# React Course – Tasks & Exercises

This repository contains all the tasks, exercises, and practice projects completed as part of my **React course**.

The purpose of this repository is to track my progress throughout the course and keep all the exercises and implementations organized in one place.

#### Getting Started

To run this project locally, switch to the corresponding branch first and install the required dependencies:

```bash
git checkout task/ShoppingCart
npm install
npm run dev
```

## 📚 Task 4 - Shopping Cart

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

#### The result output is as follows:-
<img width="2376" height="1550" alt="image" src="https://github.com/user-attachments/assets/763be41f-8438-4669-8079-2ebd3b217b0c" />


