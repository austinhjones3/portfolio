var host = "austinjones.io"
if (window.location.host == host && window.location.protocol != "https:") {
    window.location.protocol = "https:"
}