const product_view = ((data) => {
    let html = `
    <html>
    <body>
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
        <form action="/add-shoppingList" method="POST">
            <input type="text" name="shoppingList">
            <button type="submit">Add shopping list</button>
        </form>
    </html>
    </body>
    `;
    return html;
});

module.exports.shoppingList_view = shoppingList_view;