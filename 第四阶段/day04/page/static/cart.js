let cartEle = document.getElementsByClassName('cart')[0];
let loadingEle = document.getElementsByClassName('loading')[0];


let data = [
    {
        name:'菜肉饺',
        price:1,
        count:0
    },
    {
        name:'肉饺',
        price:1,
        count:0
    },
    {
        name:'上海锅贴',
        price:1,
        count:0
    }
]

init();



function init(){

    renderCart();
}

function renderCart(){
    cartEle.innerHTML = '';
    let html = '';
    data.forEach((item,index)=>{

        html += `<div class="cart-item">`+

        `<div class="cart-item-name">${item.name}</div>`+

        `<div class="cart-item-info">`+

            `<div class="cart-item-price">$${item.price}</div>`+

            `<button class="cart-remove-btn">-`+
                
            `</button>`+
            `<div class="cart-count">${item.count}`+
                
            `</div>`+
            `<button class="cart-add-btn" onclick="add(${item.count},${index});fakeRequest()">+`+
                
            `</button>`+
        `</div>`+
        `</div>`
    })

    cartEle.innerHTML = html;
}

function add(count,index){

    data[index].count = count + 1;

    renderCart();
}

const fakeRequest = _.debounce(()=>{

    loadingEle.style.display = 'flex';
    setTimeout(()=>{
        loadingEle.style.display = 'none';
    },2000)
},1000);