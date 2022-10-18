function createMessage(title, body) {
    // (1)
    let container = document.createElement('div')

    // (2)
    container.innerHTML = '<div class="my-message"> \
            <div class="my-message-title">'+title+'</div> \
        <div class="my-message-body">'+body+'</div> \
        <input class="my-message-ok" type="button" value="OK"/> \
        <input class="reload" type="button" value="Start again" onClick="window.location.reload()"> \
</div>'

    // (3)
    return container.firstChild
}


function positionMessage(elem) {
    elem.style.position = 'absolute'

    let scroll = document.documentElement.scrollTop || document.body.scrollTop
    elem.style.top = scroll + 200 + 'px'


    elem.style.left = Math.floor(document.body.clientWidth/2) - 150 + 'px'
}


function addCloseOnClick(messageElem) {

    let input = messageElem.getElementsByTagName('INPUT')[0]

    input.onclick = function() {
        messageElem.parentNode.removeChild(messageElem)
    }

}


function setupMessageButton(title, body) {
    // создать

    let messageElem = createMessage(title, body)

    // позиционировать
    positionMessage(messageElem)

    // добавить обработчик на закрытие
    addCloseOnClick(messageElem)

    // вставить в документ
    document.body.appendChild(messageElem)
}

