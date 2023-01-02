namespace Components {
    export namespace SubComponents {
        export class test {
            constructor() {
                const elem = document.createElement('div')
                elem.innerText = 'This is test'
                document.body.appendChild(elem)
            }
        }
    }
    export class Header {
        constructor() {
            const elem = document.createElement('div')
            elem.innerText = 'This is Header'
            document.body.appendChild(elem)
            new SubComponents.test()
        }
    }
    export class Content {
        constructor() {
            const elem = document.createElement('div')
            elem.innerText = 'This is Content'
            document.body.appendChild(elem)
        }
    }
    export class Footer {
        constructor() {
            const elem = document.createElement('div')
            elem.innerText = 'This is Footer'
            document.body.appendChild(elem)
        }
    }
}