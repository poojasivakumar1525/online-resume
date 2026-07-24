*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:Arial, Helvetica, sans-serif;
}

body{
    background:#f4f6f9;
}

.container{
    width:600px;
    margin:40px auto;
    background:#fff;
    padding:30px;
    border-radius:10px;
    box-shadow:0 0 15px rgba(0,0,0,0.2);
}

h1{
    text-align:center;
    color:#0d6efd;
    margin-bottom:25px;
}

label{
    display:block;
    margin-top:15px;
    margin-bottom:5px;
    font-weight:bold;
    color:#333;
}

input,
textarea{
    width:100%;
    padding:10px;
    border:1px solid #ccc;
    border-radius:5px;
    font-size:16px;
}

input:focus,
textarea:focus{
    outline:none;
    border-color:#0d6efd;
}

textarea{
    resize:vertical;
}

button{
    width:100%;
    margin-top:25px;
    padding:12px;
    background:#0d6efd;
    color:white;
    border:none;
    border-radius:5px;
    font-size:18px;
    cursor:pointer;
}

button:hover{
    background:#0b5ed7;
}

/* Resume Page */

.resume{
    width:800px;
    margin:30px auto;
    background:white;
    padding:30px;
    border-radius:10px;
    box-shadow:0 0 15px rgba(0,0,0,0.2);
}

.resume h2{
    color:#0d6efd;
    border-bottom:2px solid #0d6efd;
    padding-bottom:5px;
    margin-top:20px;
}

.resume p{
    margin:8px 0;
    line-height:1.6;
}

.buttons{
    text-align:center;
    margin-top:25px;
}

.buttons button{
    width:180px;
    margin:10px;
}