const UA = window.navigator.userAgent

/* detecting wechat */
export function isWechat() {
    if (UA.includes('micromessenger')) {
        return true
    }
    return false
}

export function cutString(s, n) {
    if (s.length > n) {
        return s.slice(0, n) + '...'
    } else {
        return s
    }
}
// 判断是否是JSON对象
export function isJson(obj) {
	var isJson = typeof(obj) === "object" && Object.prototype.toString.call(obj).toLowerCase() === "[object object]" && !obj.length;
	return isJson;
}
export function json2Form(json) {
    if (!json) {
        return ''
    }
    if(isJson(json)){
        let str = []
        for (let p in json) {
            if (json.hasOwnProperty(p)) {
                str.push(encodeURIComponent(p) + '=' + encodeURIComponent(json[p]))
            }
        }
        return str.join('&')
    } else {
        return json
    }
}

export async function ajax(url='/', method='GET', payload={}) {
    let init = {}
    const auth = localStorage.getItem('token') ? ('JWT ' + localStorage.getItem('token')) : 'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6Im9SMFZHNDZ1TGJxdWRtZGVBZDdLOW5CRF96cnciLCJleHAiOjE1NTkyOTU3NTUsIm9yaWdfaWF0IjoxNTI3NzU5NzU1LCJ1c2VyX2lkIjoxMSwiZW1haWwiOiIifQ.cTPzW78njb4BOn1-AhVCnUdEQAwn_fETHl_KyUdwHqs'

    if (method === 'GET' || method === 'get') {
        if (typeof payload === 'string' || typeof payload === 'number') {
            url = url + '/' + payload
        }

        if (isJson(payload) && json2Form(payload)) {
            url = url + '?' + json2Form(payload)
        }

        init = {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Authorization': auth
            },
        }
    } else if (method === 'POST' || method === 'post' || method === 'PUT' || method === 'put') {
        init = {
            method: method,
            credentials: 'include',
            headers: {
                // 'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'Content-type': 'application/json',

                'Authorization': auth
            },
            body: JSON.stringify(payload)
        }
    } else {
        return
    }

    // url = API_HOST + url

    try {
        const response = await fetch(url, init)
        if (
            response.status === 500 ||
            response.status === 404
        ) {
            return Object.assign({}, {error: response.statusText}, {hasError: true})
        }
        const responseJson = await response.json()

        if (response.status.toString()[0] !== '2') {
            return {error: responseJson[Object.keys(responseJson)[0]], hasError: true}
        } else {
            return responseJson
        }
    } catch (error) {
        return error.statusText
    }
}

export function toInt(num) {
    if (typeof num === 'number') {
        num = num.toString()
    }

    if (num) {
        return parseInt(num, 10)
    }

    return 0
}

export function getCookies() {
    let cookies = {
        token: ''
    }
    for (let cookie of document.cookie.split('; ')) {
        let [name, value] = cookie.split('=')
        cookies[name] = decodeURIComponent(value)
    }
    return cookies
}

export function createCookie(name, value, days) {
    let expires
    if (days) {
        let date = new Date()
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000))
        expires = '; expires=' + date.toUTCString()
    } else {
        expires = ''
    }
    document.cookie = name + '=' + encodeURIComponent(value) + expires + '; path=/'
}

export function clearCookieByName(name) {
    createCookie(name, '', -1)
}

export function checkRegex(regex, s) {
    const re = new RegExp(regex)
    return re.test(s)
}

export function cloneObject(obj) {
    return JSON.parse(JSON.stringify(obj))
}