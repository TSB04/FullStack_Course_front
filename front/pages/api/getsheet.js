export default function LogUser(req, res) {
    fetch(("http://localhost:4898/api/books/sheet"),{
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(req.body)
    })
    .then(response => response.json())
    .then(result => res.status(200).json(result)) 
}