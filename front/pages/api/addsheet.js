export default function CreateSheet(req, res) {
    
    fetch(("http://localhost:4898/api/books/add"),{
        method: "post",
        headers:{ "Authorization": `Bearer ${req.cookies.jwt}`,
                  "Content-Type": "application/json" },
        body: JSON.stringify(req.body)
    })
    .then(response => response.json())
    .then(result => res.status(200).json(result)) 
}