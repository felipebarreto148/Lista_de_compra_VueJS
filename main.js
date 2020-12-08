var shoppingList = new Vue({
    el: "#shopping-list",
    data: {
        state: "default",
        header: "Lista de compras",
        newItem: "",
        items: [
            // {
            //     label: "10 party hats",
            //     purchased: false,
            //     highPriority: false,
            // },
            // {
            //     label: "2 board games",
            //     purchased: true,
            //     highPriority: false,
            // },
            // {
            //     label: "20 cups",
            //     purchased: false,
            //     highPriority: true,
            // },
        ]
    },
    computed: {
        reversedItems() {
            return this.items.slice(0).reverse();
        }
    },
    methods: {
        saveItem: function () {
            this.items.push({
                label: this.newItem,
                purchased: false,
            },);
            this.newItem = "";
        },
        changeState: function (newState) {
            this.state = newState;
            this.newItem = "";
        },
        tooglePurchased: function(item) {
            item.purchased = ~item.purchased;
        },
    },
});