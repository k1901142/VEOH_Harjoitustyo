/*const product_view = ((data) => {
    let html = `
    <html>
    <body>
        <!-- linkki paluu pääsivulle-->
        Shopping list: ${data.user_name}
        <form action="/logout" method="POST">
            <button type="submit">Log out</button>
        </form>`;


    data.shoppingLists.forEach((shoppingList) => {
        html += shoppingList.text;
        html += `
            <form action="delete-shoppingList" method="POST">
                <input type="hidden" name="shoppingList_id" value="${shoppingList._id}">
                <button type="submit">Delete shopping list</button>
            </form>
            `;
    });

    html += `
        <form action="/add-product" method="POST">
            Product:
            <input type="text" name="product">
            Image:
            <input type="url" name="url_image">
            Quantity:
            <input type="number" name="quantity" min="0" max="10">
            <button type="submit">Add new product</button>
        </form>
    </html>
    </body>
    `;
    return html;
});

/*const product_view = ((data) => {
=======
const product_view = ((productData) => {
    let html = `
    <html>
    <body>
        Shopping list: ${shoppingList.shoppingListName}
        <form action="/logout" method="POST">
            <button type="submit">Log out</button>
        </form>`;


    /*data.shoppingList.forEach((product) => {
        html += shoppingList.nameShoppingList;
        html += `
            <form action="delete-shoppingList" method="POST">
                <input type="hidden" name="shoppingList_id" value="${shoppingList._id}">
                <button type="submit">Delete shopping list</button>
            </form>
            `;
    });*/

   /* html += `
        <form action="/add-product" method="POST">
            Product:
            <input type="text" name="product">
            Image:
            <input type="url" name="url_image">
            Quantity:
            <input type="number" name="quantity" min="0" max="10">
            <button type="submit">Add new product</button>
        </form>
    </html>
    </body>
    `;
    return html;
});*/

/*<<<<<<< HEAD
>>>>>>> Ostoslista-tasolle asti toteutettu
module.exports.product_view = product_view;
=======
module.exports.product_view = product_view;
>>>>>>> Commit*/
