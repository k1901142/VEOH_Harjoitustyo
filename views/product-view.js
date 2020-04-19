/*
const products_view = ((dataProducts) => {
    let html = `
    <html>
    <h1>Products</h1>
    <body>
        <!-- linkki paluu pääsivulle-->
        Shopping list: ${dataProducts.user_name}//linkin nimi
        <form action="/logout" method="POST">
            <button type="submit">Log out</button>
        </form>
        `;


    dataProducts.products.forEach((product) => {
        html += product.text;
        //kuva
        html += `
            <form action="delete-product" method="POST">
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

const shoppingLists_view = ((dataShoppingLists) => {
    let html = `
    <html>
    <h1>Shopping lists</h1>
    <body>
        Logged in as user: ${dataShoppingLists.user_name}
        <form action="/logout" method="POST">
            <button type="submit">Log out</button>
        </form>
        `;


        dataShoppingLists.shoppingLists.forEach((shoppingList) => {
            html += //shoppingList.nameShoppingList; 
            `           
             <p><a href="/">${shoppingList.nameShoppingList}</a></p>
             `;
            html += `
                <form action="/delete-shoppingList" method="POST">
                    <input type="hidden" name="shoppingList_id" value="${shoppingList._id}">
                    <button type="submit">Delete shopping list</button>
                </form>
            `;
        });

        html += `
            <form action="/add-shoppingList" method="POST">
                <input type="text" name="shoppingList">
                <button type="submit">Add new shopping list</button>
            </form>
    </html>
    </body>
    `;
    return html;
});
