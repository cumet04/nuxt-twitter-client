import httpProxy from 'http-proxy'
const proxy = httpProxy.createProxyServer()

export default function(req, resp, next) {
  proxy.web(req, resp, {
    target: 'http://127.0.0.1:5000/api'
  })
}
