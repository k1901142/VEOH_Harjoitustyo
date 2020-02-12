const shoppingLists_view = ((dataShoppingLists) => {
    let html = `
    <html>
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

const shoppingList_view = (dataShoppingLists) => {
    let html=`
    <html>
    <body>
        Shopping lists: ${dataShoppingLists.nameShoppingList}
    </body>
    </html>
    `;
    return html;

};

module.exports.shoppingLists_view = shoppingLists_view;
module.exports.shoppingList_view = shoppingList_view;
