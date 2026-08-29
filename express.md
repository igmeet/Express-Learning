# day - 4 notes
Cookie = Server ka diya hua chhota data jo browser save karta hai aur baad ki requests mein bhej sakta hai.

Cookie khud stateful ya stateless nahi hoti.

Cookie ke andar kya hai, woh matter karta hai.

1. Cookie + Session ID → Stateful 🔴

Browser
🍪 sessionId=123
       ↓
Server
       ↓
"123 → Meet"
       ↓
Server ke paas session stored

Server remembers → Stateful



2. Cookie + JWT → Stateless 🟢
Browser
🍪 JWT
       ↓
Server
       ↓
JWT verify
       ↓
User = Meet

Server ko session memory mein store karne ki zarurat nahi.

Server doesn't remember → Stateless



🧠 STATE
= Server ko kya yaad hai?

🍪 COOKIE
= Browser mein kya save hai?

🎫 JWT
= Authentication information/token

And:

Cookie ≠ JWT
Cookie ≠ Session

Cookie = WHERE/HOW data is stored & sent
JWT    = WHAT the authentication token looks like
Session = Server-side stored state



Cookie ke time ke 2 common options
1. maxAge → kitne milliseconds tak cookie rahegi

res.cookie("token", "abc", {
    maxAge: 1000 * 60 * 60
});

2. expires → exact date/time jab cookie expire hogi

res.cookie("token", "abc", {
    expires: new Date("2026-09-01")
});



# day - 5

session -
configuration : it is uses `express-session` to handle session

install 
npm install express-session


go to day-5 directory for session codes eg......





