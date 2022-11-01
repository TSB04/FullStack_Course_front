export default function MySheets(req, res) {
    const token = req.cookies.jwt   
    fetch(("http://localhost:4898/api/books/mysheets"),{
        method: "GET",
        headers: { "Authorization": "Bearer "+token,
                    "Content-Type": "application/json" },
    })
    .then(response => response.json())
    .then(result => res.status(200).json(result))
}