const root = document.getElementById('root')

const orderEle = document.createElement('a')
orderEle.textContent = 'Order'
orderEle.href = "./pages/order.html"

const adminEle = document.createElement('a')
adminEle.textContent = 'admin'
adminEle.href = "./pages/admin.html"

const h1Ele = document.createElement('h1')
h1Ele.textContent = "Coffee"

root.append(orderEle)
root.append(adminEle)
root.append(h1Ele)


function createElement(tag, props, children) {
    const el = document.createElement(tag);

    // const aaaa = Object.entries(props)

    for(const key in props){
        const value = props[key];
        el[key] = value;
    }
    if(children && Array.isArray(children)){
    children.forEach (
        function (child) {
            el.append(child);
        }
    )
    }

    return el;
}

const h2ELe = createElement('span', {
    href: './pages/order.html',
    target: '_blank',
    style: "color: blue",
    className: "abc",
    textContent: "Test A"
})

root.append(h2ELe);


const divEle = createElement('div', {}, [
    createElement('p', {textContent: 'lorem1'})
])
root.append(divEle);

root.append(
    createElement('button', {
        onclick: () => {
            console.log('........')

        },
        textContent: 'click me'
    })
)

const coffee1 = {
    "name": "name 1",
    "price": 9,
    "image": "image 1"
}

for(const prop in coffee1){
    console.log(prop);
    console.log(coffee1[prop])
}